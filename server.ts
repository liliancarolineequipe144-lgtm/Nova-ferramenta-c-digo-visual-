import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '20mb' }));

  // API Routes
  app.post("/api/remodel-prompt", async (req, res) => {
    console.log("[Server] /api/remodel-prompt - Request received");
    try {
      const { originalPrompt, idea, imageData } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
        console.error("[Server] GEMINI_API_KEY missing");
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured" });
      }

      const promptText = `Como um especialista em marketing de vídeo UGC e engenharia de prompts de alta estética, seu objetivo é REMODELAR um prompt existente para um novo produto ou ideia.

PROMPT ORIGINAL:
"${originalPrompt}"

NOVA IDEIA/CONTEXTO:
"${idea || 'Nenhuma ideia adicional fornecida, foque na imagem.'}"

INSTRUÇÕES:
1. Analise a imagem de referência fornecida para capturar cores, texturas, estilo do produto e iluminação.
2. Mantenha a estrutura e a alta estética do prompt original, mas ADAPTE-O para o novo produto e ideia.
3. Se o original for uma narrativa de vários vídeos, mantenha a estrutura de vários vídeos.
4. Se o original for um prompt técnico de cena única, mantenha esse formato.
5. Melhore o prompt original se possível, tornando-o ainda mais atraente e visualmente descritivo.
6. Mantenha o idioma do prompt original (se for Português, responda em Português; se for Inglês, responda em Inglês).
7. NÃO inclua explicações, apenas o prompt remodelado final.`;

      const modelsToTry = [
        "gemini-3.6-flash",
        "gemini-3.5-flash-lite",
        "gemini-3.1-flash-lite",
        "gemini-2.5-flash"
      ];
      let text = "";
      let lastError: any = null;

      // Prepare input for Interactions API
      const input: any[] = [{ type: 'text', text: promptText }];
      if (imageData) {
        try {
          const [prefix, data] = imageData.split(',');
          const mimeType = prefix.match(/:(.*?);/)?.[1] || 'image/jpeg';
          input.push({
            type: 'image',
            data: data,
            mime_type: mimeType
          });
          console.log("[Server] Image data prepared", { mimeType });
        } catch (e) {
          console.error("[Server] Error processing image data:", e);
        }
      }

      for (const modelName of modelsToTry) {
        try {
          console.log(`[Server] Attempting model: ${modelName}`);
          const interaction = await ai.interactions.create({
            model: modelName,
            input: input,
          });
          
          text = interaction.output_text || "";
          if (text) {
            console.log(`[Server] Success with ${modelName}`);
            break;
          }
        } catch (error: any) {
          console.error(`[Server] Error with model ${modelName}:`, error.message);
          lastError = error;
          await new Promise(resolve => setTimeout(resolve, 500));
          continue;
        }
      }

      if (!text && lastError) throw lastError;
      if (!text) throw new Error("Não foi possível gerar uma resposta. Tente novamente.");
      
      res.json({ prompt: text });
    } catch (error: any) {
      console.error("[Server] Fatal error remodeling prompt:", error);
      if (error.message?.includes('429') || error.status === 'RESOURCE_EXHAUSTED' || error.message?.includes('quota')) {
        return res.status(429).json({ error: "Limite de cota atingido. Por favor, tente novamente em alguns instantes." });
      }
      res.status(500).json({ error: error.message || "Erro interno ao processar sua solicitação." });
    }
  });

  app.post("/api/generate-prompt", async (req, res) => {
    console.log("[Server] /api/generate-prompt - Request received");
    try {
      const { product, type, imageData } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
        console.error("[Server] GEMINI_API_KEY missing");
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured" });
      }

      let promptText = "";
      if (type === 'Provador') {
        promptText = `Create a high-fidelity video generation prompt in ENGLISH for Veo 3.1 Lite. 
        Product: "${product}".
        
        Structure: Hook > Context > Solution > CTA.
        Style: POV (Point of View) movements, natural and humanized influencer.
        
        CONSTRAINTS:
        - The influencer must remain consistent.
        - The product must remain exactly as described/shown.
        - NO speech, NO captions, NO text overlays, NO audio.
        - Focus ONLY on realistic human movements and visual hooks in each scene.
        - Premium fashion UGC aesthetic.
        
        Output the prompt as a detailed technical description for a video model, ensuring the narrative flow of movements is clear.`;
      } else if (type === 'UGC') {
        promptText = `Como um especialista em marketing de vídeo UGC (User Generated Content), crie 6 narrativas curtas (aproximadamente 8 segundos cada) para o produto: "${product}".
        
        Cada narrativa deve seguir a estrutura:
        1. GANCHO (Hook): Algo visual ou auditivo para prender a atenção nos primeiros 2 segundos.
        2. CONTEXTO: O problema ou situação inicial.
        3. SOLUÇÃO: Como o produto resolve ou brilha.
        4. CTA (Call to Action): Chamada clara para ação.
 
        IMPORTANTE:
        - Separe cada vídeo com o marcador "--- VIDEO [N] ---" (onde [N] é o número do vídeo).
        - Mantenha a constância da influencer e do produto em todas as cenas.
        - Use ganchos visuais criativos em cada cena.
        - Estruture para 6 vídeos de 8 segundos.
        - Inclua falas diferentes e naturais para cada vídeo.
        - Linguagem em Português do Brasil.
        - Se houver uma imagem de referência, use os detalhes visuais dela (cores, texturas, estilo) para enriquecer o prompt.`;
      } else {
        promptText = `Crie um prompt detalhado e profissional para geração de vídeo/imagem do produto: "${product}". 
        Foque em alta estética, realismo e iluminação cinematográfica.
        Linguagem em Português do Brasil.`;
      }

      const modelsToTry = [
        "gemini-3.6-flash",
        "gemini-3.5-flash-lite",
        "gemini-3.1-flash-lite",
        "gemini-2.5-flash"
      ];
      let text = "";
      let lastError: any = null;

      // Prepare input for Interactions API
      const input: any[] = [{ type: 'text', text: promptText }];
      if (imageData) {
        try {
          const [prefix, data] = imageData.split(',');
          const mimeType = prefix.match(/:(.*?);/)?.[1] || 'image/jpeg';
          input.push({
            type: 'image',
            data: data,
            mime_type: mimeType
          });
          console.log("[Server] Image data prepared", { mimeType });
        } catch (e) {
          console.error("[Server] Error processing image data:", e);
        }
      }

      for (const modelName of modelsToTry) {
        try {
          console.log(`[Server] Attempting model: ${modelName}`);
          const interaction = await ai.interactions.create({
            model: modelName,
            input: input,
          });
          
          text = interaction.output_text || "";
          if (text) {
            console.log(`[Server] Success with ${modelName}`);
            break;
          }
        } catch (error: any) {
          console.error(`[Server] Error with model ${modelName}:`, error.message);
          lastError = error;
          await new Promise(resolve => setTimeout(resolve, 500));
          continue;
        }
      }

      if (!text && lastError) {
        throw lastError;
      }
      if (!text) throw new Error("Não foi possível gerar uma resposta. Tente novamente.");
      
      res.json({ prompt: text });
    } catch (error: any) {
      console.error("[Server] Fatal error generating prompt:", error);
      if (error.message?.includes('429') || error.status === 'RESOURCE_EXHAUSTED' || error.message?.includes('quota')) {
        return res.status(429).json({ error: "Limite de cota atingido. Por favor, tente novamente em alguns instantes." });
      }
      res.status(500).json({ error: error.message || "Erro interno ao processar sua solicitação." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
