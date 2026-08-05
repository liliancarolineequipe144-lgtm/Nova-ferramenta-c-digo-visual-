import { PromptItem, ProductItem, NarrativeItem, LessonItem } from './types';

export const LESSONS: LessonItem[] = [
  {
    id: 'lesson-master',
    title: 'Seja bem vindos',
    duration: '05:30',
    category: 'Estratégia',
    thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop',
    description: 'O que você vai aprender aqui',
    videoUrl: 'https://drive.google.com/file/d/1-9DZBJTqbQIGj4sLoTgWrZaRHguWSMd_/preview'
  },
  {
    id: 'lesson-influencer',
    title: 'Como criar a influencer',
    duration: '08:45',
    category: 'Criação',
    thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop',
    description: 'Aprenda o passo a passo para criar sua própria influencer digital usando IA.',
    videoUrl: 'https://drive.google.com/file/d/1Y7BH-Y7dKV69yGoGprthyIJ9IxVYotq4/preview'
  },
  {
    id: 'lesson-utilidades',
    title: 'influencer para utilidades do lar',
    duration: '10:15',
    category: 'Nicho',
    thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
    description: 'Estratégias específicas para criar conteúdos de alta performance no nicho de casa e utilidades.',
    videoUrl: 'https://drive.google.com/file/d/19rVQC_k1iHPjTD0Z-LIWcS9dulM7TA59/preview'
  },
  {
    id: 'lesson-ferramentas',
    title: 'Ferramentas gratuitas',
    duration: '09:30',
    category: 'Ferramentas',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
    description: 'Conheça as melhores ferramentas gratuitas para criar e editar seus conteúdos com IA.',
    videoUrl: 'https://drive.google.com/file/d/1auRm1vlT1Xmbb52mm24KAfX3UG9eNuId/preview'
  },
  {
    id: 'lesson-tiktok-shop',
    title: 'como se afiliar no tiktok shop',
    duration: '07:45',
    category: 'Vendas',
    thumbnail: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000&auto=format&fit=crop',
    description: 'Aprenda o passo a passo para se afiliar no TikTok Shop e começar a vender seus produtos.',
    videoUrl: 'https://drive.google.com/file/d/1-Fs0sfjOK1ixSQHngigpzf71rHWq9waC/preview'
  },
  {
    id: 'lesson-bolsa',
    title: 'como fazer bolsa estilo provador pov',
    duration: '07:20',
    category: 'Produção',
    thumbnail: 'https://images.unsplash.com/photo-1544816153-199d821e1bb6?q=80&w=1000&auto=format&fit=crop',
    description: 'Aprenda a técnica de POV para mostrar produtos de moda com estilo de provador.',
    videoUrl: 'https://drive.google.com/file/d/1oRqxivZdsVGZKO6e_Y_FbmZ3gC5xZh6i/preview'
  },
  {
    id: 'lesson-live-products',
    title: 'como colocar produtos na live',
    duration: '09:15',
    category: 'Live',
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000&auto=format&fit=crop',
    description: 'Aprenda a gerenciar e exibir seus produtos de forma estratégica durante suas transmissões ao vivo.',
    videoUrl: 'https://drive.google.com/file/d/1vgXzbpxLAOYTFu0SV6kQn5DMlfakiMDv/preview'
  },
  {
    id: 'lesson-transicao',
    title: 'como fazer transição de vestido',
    duration: '06:15',
    category: 'Edição',
    thumbnail: 'https://images.unsplash.com/photo-1539109132381-31a1c97deeac?q=80&w=1000&auto=format&fit=crop',
    description: 'Aprenda a criar transições suaves e profissionais de troca de roupa para seus vídeos.',
    videoUrl: 'https://drive.google.com/file/d/1oXd6kU9l5sKNXoVQLHMDxbsY_vul3utC/preview'
  },
  {
    id: 'lesson-tapete',
    title: 'como fazer tapete de cozinha',
    duration: '08:20',
    category: 'Produção',
    thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
    description: 'Aprenda o passo a passo para criar vídeos de alta conversão para tapetes de cozinha usando IA.',
    videoUrl: 'https://drive.google.com/file/d/1QnVmf98OirlB24vRtajXEtNiQ-GoJo3s/preview'
  },
  {
    id: 'lesson-extra-1',
    title: 'Como fazer a cortina',
    duration: '07:40',
    category: 'Produção',
    thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop',
    description: 'Aprenda novas técnicas de criação de conteúdo com IA para potencializar seus resultados.',
    videoUrl: 'https://drive.google.com/file/d/1ftUQWOG93j6VKth9vvXFfRcxU2sptQF9/preview'
  },
  {
    id: 'lesson-glasses-prompt',
    title: 'Como remodelar o prompt de óculos',
    duration: '06:45',
    category: 'Prompts',
    thumbnail: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop',
    description: 'Aprenda a técnica para ajustar e remodelar seus prompts especificamente para o nicho de óculos.',
    videoUrl: 'https://drive.google.com/file/d/1cK9CNcm6s54G-sOTmwIBo7dqNneYGM1m/preview'
  }
];

export const NARRATIVES: NarrativeItem[] = [
  {
    id: 'h-package-throw',
    category: 'gancho',
    title: 'Abrindo o pacote na cama',
    description: 'Uma mão joga um pacote preto de entrega sobre a cama. Pega rapidamente e abre e tira o Body.\n\nFala (POV):\n"POV:"',
    videoUrl: 'https://drive.google.com/file/d/1fxumdDnFgPh0tBMwBLzmhRNcOsX1x03h/preview'
  },
  {
    id: 'h-gift',
    category: 'gancho',
    title: 'Gancho sacola de presente',
    description: 'Gancho visual: Alguem entregando uma sacola de presente e ela tira o chinelo exatamente igual da foto fala: "Olha o que eu acabei de receber, esse é o presente que toda mulher elegante merece."',
    videoUrl: 'https://drive.google.com/file/d/1aFbiowJBm-eCJJfWX5N1yPlqK5jnyWvI/preview'
  },
  {
    id: 'h-elegant-pov',
    category: 'gancho',
    title: 'Abertura POV Elegante',
    description: 'Começa com ela bem próxima da tela cobrindo a tela completamente ela tira a mão e mexe no cabelo de forma elegante.',
    videoUrl: 'https://drive.google.com/file/d/1vwubIor9DM-iEvQkqaAL58EGwrwwNbUE/preview'
  },
  {
    id: 'h-ugc-get-ready',
    category: 'gancho',
    title: 'UGC Arruma-se Comigo',
    description: 'Use the uploaded image as the exclusive reference for the clothing item. The garment shown in the video must be **identical** to the reference image, preserving 100% of its original design, silhouette, cut, fabric, color, print, texture, stitching, fit, finishing, trims, buttons, zippers, pockets, collar, sleeves, proportions, and every visual detail. Do not redesign, reinterpret, stylize, replace, or modify any aspect of the garment. The clothing must remain exactly the same throughout the entire video. The influencer is an ultra-realistic, elegant woman shown full-body with her face clearly visible. She walks naturally toward the camera while holding the garment on a hanger. When she reaches the camera, she smiles, presents the garment from different angles, and brings it close to the lens to highlight the fabric and details. **The spoken dialogue must be in Brazilian Portuguese (pt-BR), with perfect lip-sync and natural pronunciation.** She says:\n "Arruma-se comigo porque hoje eu quero um look incrível sem gastar uma fortuna." \n\nCreate an authentic UGC-style video with natural lighting, a modern indoor setting, smooth realistic movements, cinematic 4K quality, and absolute fidelity to the clothing shown in the reference image.',
    videoUrl: 'https://drive.google.com/file/d/18YDB8SUPgop2CDIrk2--PNt1afy7oUqp/preview'
  },
  {
    id: 'h-color-transition',
    category: 'solucao',
    title: 'Transição de cores rápida',
    description: 'As mãos colocam o body preto sobre a calça, depois trocam rapidamente pelo branco e pelo marrom, criando transições rápidas.\n\nFala:\n"Agora eu monto vários looks em segundos com um único kit"',
    videoUrl: 'https://drive.google.com/file/d/1H0go29rmVgB0pU-D0IyQNaxoKDl5s1DC/preview'
  },
  {
    id: 'ctx-1',
    category: 'contexto',
    title: 'Look + Óculos e Bolsa',
    videoUrl: 'https://drive.google.com/file/d/160gLz2n-iS8Q0yiCqkWOkg5ueegxSRVL/preview',
    description: 'Use the uploaded image as the ONLY reference for the clothing set. \n\nIMPORTANT: The clothing set must be an exact copy of the reference image. \n\nCreate a realistic fashion UGC video. \n\nScene: A modern bedroom with a neatly made bed. The influencer picks up the hanger and shows the outfit. \n\nShe says: "Tenho almoço, vou resolver algumas coisas no shopping e queria uma roupa elegante que servisse para o dia inteiro."'
  },
  {
    id: 'cta-car-key',
    category: 'cta',
    title: 'Pegando a chave do carro',
    videoUrl: 'https://drive.google.com/file/d/1g3ZZpTv6KvjHsNqBkgdvLEeRCpumlho8/preview',
    description: 'Use the uploaded image as the **ONLY reference** for the clothing set **and for the appearance of the influencer**.\n\n**IMPORTANT:** The clothing set must be an exact copy of the reference image. Preserve the identical garment design, colors, fabric, texture, stitching, proportions, fit, silhouette, collar, sleeveless cut, waistband, pant length, and every visible detail. Do **NOT** redesign, improve, reinterpret, replace, or modify the outfit in any way.\n\nThe influencer must closely match the reference image, including hairstyle, facial features, skin tone, body proportions, smile, and overall appearance. She is wearing the exact same outfit from the reference image.\n\n### Scene\nCreate a **10-second ultra-realistic fashion UGC video** inside a modern, bright, elegant bedroom similar to the reference.\nThe influencer is standing full body, facing the camera with a warm, natural smile.\n\n### Visual Hook (First 3 seconds)\nWhile speaking, she naturally notices a car key placed on top of the bed beside her.\nShe reaches toward the bed, picks up the car key with one hand, smiles confidently at the camera, then casually holds the key while continuing to speak.\nAt the end of the sentence, she points downward with her index finger, as if indicating the product link or caption.\nHer movements must feel spontaneous and natural, like authentic social media content.\n\n### Camera\n* Handheld UGC style\n* Full-body framing\n* Eye-level perspective\n* 4K cinematic quality\n\n### Dialogue\n"Se você também ama um look elegante e versátil, aproveita que ainda está disponível."'
  },
  {
    id: 'h-pov-bedding',
    category: 'gancho',
    title: 'POV Enxoval de Luxo',
    videoUrl: 'https://drive.google.com/file/d/1qZstZZfK0fYTeNL5DPq_wHQVqauByUgl/preview',
    description: '**Ultra-realistic POV (first-person perspective) video in VERTICAL PORTRAIT format (9:16, 1080×1920).**\n\nUse **EXACTLY** the bedding product shown in the reference image. Preserve **100%** of the original product\'s appearance, including all colors, patterns, textures, stitching, materials, shape, proportions, folds, and every visible detail. Do **not** modify, replace, invent, or reinterpret any aspect of the product.\n\nThe scene begins with the viewer walking into a modern, elegant bedroom. The exact same bedding set from the reference image is beautifully arranged on the bed, creating a luxurious and inviting atmosphere.\n\nThe viewer slowly approaches the bed and gently smooths the duvet with one hand, highlighting the fabric\'s texture. Next, they lightly fluff one of the pillows and run their hand across the bedding to emphasize its softness and premium finish.\n\nThe viewer then steps back slightly, allowing the entire bed to be visible for a brief moment. Finally, one hand naturally enters the frame and **points downward with the index finger**, holding the gesture for about one second as a clear call-to-action.\n\nThe bedroom features contemporary interior design, soft natural lighting through a window, elegant neutral décor, and a premium, cozy atmosphere. The bedding remains the central focus throughout the entire scene.\n\nShot on **iPhone 15 Pro**, 24mm lens, **f/1.8 aperture**, shallow depth of field, realistic lighting, soft shadows, cinematic handheld camera movement, natural motion, and professional product photography aesthetics. The scene should feel authentic, premium, and optimized for TikTok, Instagram Reels, and e-commerce advertising.\n\n**No text, no logos, no watermarks, no extra objects distracting from the scene. Maintain absolute fidelity to the reference product.**'
  }
];

export const VIDEO_PROMPTS: PromptItem[] = [
  {
    id: 'p-oculos-cafe',
    title: 'Óculos de Sol | Café de Luxo',
    type: 'lifestyle',
    category: 'Óculos',
    videoUrl: 'https://drive.google.com/file/d/1wwfusfsZVhfLfjPAMzAX7J-xLjukemHT/preview',
    content: `# Prompt Otimizado para Veo 3.1 – Óculos de Sol (8 segundos) | Café de Luxo

Create an ultra-realistic **8-second vertical luxury fashion commercial** featuring a **fictional AI-generated female fashion influencer based exclusively on the reference image**.

## CHARACTER CONSISTENCY (EXTREMELY IMPORTANT)

**Do not change the influencer under any circumstances.**

The influencer must remain **100% identical** to the reference image from the first frame to the last frame.

Never modify or regenerate:

* Face
* Facial structure
* Eyes
* Eyebrows
* Nose
* Lips
* Skin tone
* Hair color
* Hair length
* **Hairstyle (must remain exactly the same as the reference image)**
* Makeup
* Body proportions
* Age
* Identity
* Facial features
* Clothing fit
* Facial expressions (only natural variations)

The model must be recognized as **the exact same fictional AI-generated influencer** throughout the entire video.

---

## CLOTHING

Dress the influencer in an elegant casual-chic outfit suitable for a luxury café.

Suggested clothing:
* White linen shirt or elegant beige blouse.
* High-waisted neutral trousers or a sophisticated midi skirt.
* Minimalist jewelry.
* Soft neutral colors (white, beige, off-white or light brown).

The outfit must look: Elegant, Modern, Sophisticated, Comfortable, Feminine, **Not revealing**, **Not sensual**.

---

## PRODUCT CONSISTENCY (CRITICAL)

Use **ONLY the sunglasses from the reference image**.
The sunglasses must remain **100% identical** during the entire video.

---

## LOCATION

Luxury outdoor café with a sophisticated European aesthetic. Elegant wooden tables, comfortable upholstered chairs, large windows, natural daylight, soft golden sunlight, fresh flowers, minimalist architecture.

---

## AUDIO

* No speech.
* No dialogue.
* No narration.
* No voice-over.
* No music.
* No captions.
* No subtitles.
* No logos.
* No text.

---

# HOOK (0–2.5s)

The influencer is seated at an elegant café table already wearing the exact sunglasses from the reference image. She naturally picks up a cup of coffee. Takes a slow sip while looking toward the window. Natural sunlight creates beautiful reflections across the sunglasses.

---

# CONTEXT (2.5–5s)

She gently places the coffee cup back on the table. Looks naturally toward the camera. Lightly adjusts the sunglasses with one hand. A soft breeze moves only the loose ends of her hair while **preserving exactly the same hairstyle**.

---

# SOLUTION (5–7s)

Still seated. She gently rests one hand on the table. With the other hand, she lightly touches one temple of the sunglasses. She naturally turns her face slightly to the left and then back toward the camera. She smiles softly and confidently.

---

# CTA (7–8s)

She looks directly into the camera. Maintains a natural, confident smile. Slowly raises one hand and **points downward with her index finger**, keeping the gesture natural and elegant.

---

# CINEMATIC STYLE

* Ultra-photorealistic.
* Authentic facial expressions.
* Natural blinking and breathing.
* Soft natural lighting.
* Vertical 9:16 format.`
  },
  {
    id: 'p-provador',
    type: 'lifestyle',
    category: 'Blazer',
    title: 'Troca de Looks (Transição)',
    content: 'Visual: A modelo aparece usando o blazer preto. Ela estala os dedos, a roupa muda instantaneamente para bege. Transição: Match cut. Visual: A modelo se aproxima da tela com o blazer bege, tampa a tela completamente e quando tira aparece com o blazer verde. Visual: ela estala o dedo e aparece com o blazer vinho. Transição: Spin transition. Visual: Corte rápido mostrando diferentes ocasiões: Escritório (preto), Café (bege), Passeio (verde), Reunião (azul), Jantar (vinho). Visual: no final ela aponta para baixo. Sem fala, só os movimentos.',
    videoUrl: 'https://drive.google.com/file/d/1-4S4ASo5CsnJoWQi5miFeEADAA36TJaf/preview'
  },
  {
    id: 'p-blazer',
    type: 'lifestyle',
    category: 'Blazer',
    title: 'Troca de Looks POV (Blazer)',
    content: 'Visual: ela veste com o blazer preto tampa a tela completamente. Transição: Ao retirar da tela, aparece o blazer bege. Visual: ela com o blazer bege tampa a tela completamente. Transição: ao retirar Revela a blezer azul. Visual: ela a blusa azul. A mão aponta o acabamento e cobre a lente completamente. Transição: ao retirar a bleaser verde. Visual: ela com a bleaser verde A mão cobre a lente completamente pela última vez. Transição: Abre e revela o blazer vinho e ela aponta para baixo. *Cada mudança de cor acontece com a mão cobrindo totalmente a lente (efeito de transição POV). Zoom rápido ao revelar cada nova cor. Sem fala só o movimento.',
    videoUrl: 'https://drive.google.com/file/d/1A-Euc2SmgGtO56Av0_M8_FSvur3raO8j/preview'
  },
  {
    id: 'p-vestidos',
    type: 'lifestyle',
    category: 'Vestido',
    title: 'Troca de Looks (Vestidos)',
    content: 'Visual: A modelo caminha em direção a câmera com o vestido azul bebe. Transição: ela estala o dedo e aparece com o vestido preto. Visual: ela coloca a mão tampando a tela e aparece o vestido azul marinho. Visual: Ela segura a bolsa, e a iluminação fica mais elegante ela caminha em direção a tela e ela tampa a tela completamente. Transição: ela tira e revela o vestido marrom. Visual: Close no vestido marrom, ela ajusta a faixa e mostra o caimento e depois aponta para baixo.',
    videoUrl: 'https://drive.google.com/file/d/1UQb9bDhgtrusypw-LEjEJloBTBpisGmG/preview'
  },
  {
    id: 'veo-3-universal',
    title: 'VEO 3 PROMPT',
    type: 'lifestyle',
    category: 'Universal',
    videoUrl: 'https://drive.google.com/file/d/1cWm-FCgEUQzG6lICKeJDIuDbbmwJHtKu/preview',
    content: `Create a **hyper-realistic vertical 9:16 UGC fashion video** with cinematic 4K quality, perfect temporal consistency, natural human behavior, and authentic smartphone aesthetics.

## Opening (First Frame)

The video **begins with the influencer's palm completely covering the camera lens**.

Her hand fills **100% of the frame**, fully blocking the view, as if she has intentionally placed her hand directly over the phone camera before starting the recording.

No part of her face or body is visible during the first moment.

After a brief pause, she naturally removes her hand from the lens in one smooth motion, revealing herself.

As her hand moves away from the camera, she immediately uses that same hand to gently brush her hair back, tucking a few strands behind her ear in one continuous, fluid movement.

The motion feels effortless, spontaneous, and completely natural.

No robotic timing.

No abrupt movement.

No exaggerated gesture.

---

## Outfit Adjustment

After fixing her hair, she casually makes a very subtle outfit adjustment.

She lightly touches the waistline or the side of the top for less than one second, exactly like someone preparing to record a video.

The adjustment is discreet and natural.

Never pull the neckline.

Never touch or emphasize the chest.

Never pose.

Immediately afterward she relaxes into a comfortable standing position.

---

## Body Language

Natural, confident posture.

Relaxed shoulders.

One hand occasionally rests on her waist.

Gentle weight shift between both legs.

Very subtle hip movement.

One foot naturally positioned slightly in front of the other.

Small spontaneous posture adjustments.

Natural breathing.

Real human timing.

Continuous movement.

No frozen poses.

No looping animations.

No robotic behavior.

---

## Clothing Presentation

She naturally presents the outfit through subtle movement.

Small torso rotations.

Gentle side-to-side movement.

Natural fabric motion.

Slight repositioning of her legs.

Everything feels casual and authentic.

No runway modeling.

No exaggerated posing.

No influencer clichés.

---

## Facial Expressions

Her facial expressions evolve naturally throughout the video.

Most of the time:

* neutral expression
* relaxed lips
* calm eye contact
* confident but natural appearance

Occasionally she gives a very brief soft smile.

The smile fades naturally.

Never hold a smile for too long.

No exaggerated expressions.

---

## Final Scene

At the end of the video she naturally walks toward the camera.

Her pace is relaxed and comfortable.

As she gets **very close to the camera**, her face fills most of the frame.

She smiles warmly.

She gently blows a kiss toward the camera.

Immediately afterward she naturally points downward with her index finger, as creators commonly do when indicating the caption or comments below.

The pointing gesture lasts less than one second.

Her smile remains genuine and relaxed.

She slightly tilts her head while smiling.

The video ends naturally.

---

## Camera

POV smartphone recording.

Chest-to-face height.

Very subtle handheld micro-movements.

No camera shake.

No zoom.

No dramatic camera movement.

No sudden framing changes.

---

## Motion Quality

Ultra-realistic human movement.

Perfect body mechanics.

Natural hair physics.

Natural fabric simulation.

Continuous movement.

No stuttering.

No morphing.

No identity drift.

No extra fingers.

No body deformation.

No frozen frames.

No repeated gestures.

---

## Identity Preservation

Preserve the exact facial identity.

Preserve hairstyle.

Preserve skin texture.

Preserve body proportions.

Preserve every clothing detail exactly as shown in the reference.

Maintain perfect temporal consistency from beginning to end.

---

## Restrictions

No talking.

No captions.

No text.

No logos.

No UI elements.

No visual effects.

No beauty filters.

No skin smoothing.

No dancing.

No exaggerated influencer poses.

No unrealistic gestures.

---

## Audio

Generate soft, modern, royalty-free background music only.

No vocals.

No sound effects.

**Final result:** A hyper-realistic TikTok/Reels-style fashion video that starts with the influencer's hand completely covering the camera lens, transitions naturally into a relaxed outfit presentation, and ends with her approaching very close to the camera, blowing a kiss, and naturally pointing downward with a warm, genuine smile.

sem áudio só movimentos`
  },
  {
    id: 'p-oculos-sol',
    title: 'Prompt Detalhado Óculos',
    type: 'lifestyle',
    category: 'Óculos',
    videoUrl: 'https://drive.google.com/file/d/1-AQLOlniGeJCk-koMnKkQP9wVzXrxHbf/preview',
    content: `Create a short, ultra-realistic product video using the exact sunglasses from the reference image.

PRODUCT LOCK — EXTREMELY IMPORTANT:
The sunglasses must remain 100% identical to the reference image throughout the entire video. Do not redesign, modify, replace, or distort the product. Preserve the exact rectangular rimless shape, black lenses, thin gold temples, gold details, proportions, size, color, and overall design. Do not add or remove any product details. The sunglasses must always look like the exact same physical product from the reference image.

INFLUENCER:
The female influencer must look like a real human being, natural, elegant, and relatable. Use subtle, realistic facial expressions and smooth human body movements. Avoid exaggerated acting, artificial posing, stiff movements, or robotic gestures. Her hands, fingers, face, and body must move naturally and anatomically correctly.

AUDIO AND TEXT:
No dialogue. No voice. No lip-syncing. No subtitles. No captions. No written text. No on-screen text. No logos. No graphics. No product name. No added elements. Only natural visual movements.

SCENE 1 — HOOK:
Start with a natural close-up of the influencer holding the sunglasses gently with both hands in front of her face. She looks naturally at the sunglasses for a brief moment, then slowly puts them on her face using both hands. She adjusts the temples gently and looks directly at the camera with a calm, confident expression.

VISUAL HOOK:
Close-up on her hands holding the sunglasses, followed by a smooth transition as she puts them on.

SCENE 2 — CONTEXT:
The influencer naturally touches her hair with one hand while wearing the sunglasses. She slightly turns her head from side to side, allowing the camera to capture the sunglasses from different natural angles. Her expression remains relaxed, confident, and authentic.

VISUAL HOOK:
Slow, smooth camera movement around her face, clearly showcasing the black lenses and gold details.

SCENE 3 — PRODUCT FOCUS:
The influencer gently removes the sunglasses from her face using both hands. She holds the sunglasses carefully in front of her chest and looks naturally at them for a moment. She then brings them closer to the camera for a brief product-focused shot, keeping the sunglasses clearly visible and perfectly intact.

VISUAL HOOK:
A natural close-up of the influencer holding the sunglasses with both hands, showing the exact frame and lens details.

SCENE 4 — SOLUTION:
She naturally puts the same sunglasses back on using both hands. After putting them on, she gently adjusts them with her fingertips, then relaxes her hands and gives a subtle, natural smile. She slightly tilts her head and looks confidently toward the camera.

VISUAL HOOK:
Smooth close-up of the sunglasses being placed on her face, followed by a subtle confident expression.

SCENE 5 — FINAL CTA:
The influencer looks directly into the camera with a natural, confident, subtle smile. She then gently extends one arm and points downward with her index finger, clearly pointing toward the lower part of the screen, as if naturally indicating where the viewer should look. Keep the gesture slow, smooth, relaxed, and natural. Her other hand remains relaxed by her side. She maintains a friendly and confident expression until the end.

**Importante:** ela **não deve apontar para os óculos**; deve **apontar claramente para baixo**, em direção à parte inferior da tela.

VISUAL HOOK:
Final close-up of the influencer wearing the exact sunglasses while naturally pointing downward with one finger. Keep the sunglasses clearly visible and perfectly identical to the reference image.

MOTION AND REALISM:
All movements must be slow, fluid, subtle, and physically realistic. The influencer must behave like a real person casually showing a product to the camera. Avoid exaggerated facial expressions. Do not make her frown. Do not wrinkle or furrow her forehead. Do not make an angry, confused, worried, or uncomfortable face. Keep her facial expression natural, relaxed, elegant, and confident throughout the entire video.

HAND ACCURACY:
When holding the sunglasses, her fingers must naturally grip the temples without covering or deforming the lenses or frame. Keep the hands anatomically correct with five fingers on each hand. Avoid extra fingers, deformed hands, or unnatural hand positions.

CAMERA:
Use realistic handheld cinematic camera movement with smooth, subtle motion. Use natural depth of field and realistic lighting. Keep the influencer and sunglasses sharply visible. Do not use sudden camera movements or unrealistic transitions.

FINAL PRODUCT CONSISTENCY:
The sunglasses must be the exact same product in every scene. Never change the shape, frame, lens color, gold details, proportions, or construction. Never generate a different pair of sunglasses. The product must remain visually consistent from beginning to end.

sem áudio só os movimentos`
  },
  {
    id: 'p-oculos-praia',
    title: 'Óculos de Sol | Praia de Luxo',
    type: 'lifestyle',
    category: 'Óculos',
    videoUrl: 'https://drive.google.com/file/d/1p-cCTXXnjmzD4hKf0zN5ecdwJC5YtUDB/preview',
    content: `# Prompt Otimizado para Veo 3.1 – Óculos de Sol (8 segundos) | Praia de Luxo

Create an ultra-realistic **8-second vertical luxury fashion commercial** featuring a **fictional AI-generated female fashion influencer based exclusively on the reference image**.

## CHARACTER CONSISTENCY (EXTREMELY IMPORTANT)

**Do not change the influencer under any circumstances.**

The influencer must remain **100% identical** to the reference image from the first frame to the last frame.

Never modify or regenerate:
* Face
* Facial structure
* Eyes
* Eyebrows
* Nose
* Lips
* Skin tone
* Hair color
* Hair length
* Hairstyle (**keep exactly the same hairstyle from the reference image**)
* Makeup
* Body proportions
* Age
* Identity
* Facial expressions (only natural variations)

The model must be recognized as **the exact same fictional AI-generated influencer** throughout the video.

---

## CLOTHING

Dress the influencer in a **light, elegant beach cover-up (saída de praia)**.

The cover-up must be: Sophisticated, Lightweight, Neutral-colored (white, beige or off-white), Chic and modern, Comfortable, **Not revealing**, **Not sensual**.

---

## PRODUCT CONSISTENCY (CRITICAL)

Use **ONLY the sunglasses from the reference image**.
The sunglasses must remain **100% identical** during the entire video.

---

## LOCATION

Luxury tropical beach. Crystal-clear ocean. Golden-hour sunlight. Soft waves. Elegant summer atmosphere. The influencer remains seated in a beautiful wooden beach chair throughout the video.

---

## AUDIO

* No speech.
* No dialogue.
* No narration.
* No voice-over.
* No music.
* No captions.
* No subtitles.
* No logos.
* No text on screen.

---

# HOOK (0–2.5s)

The influencer is comfortably seated in the beach chair already wearing the exact sunglasses from the reference image. She gently turns her face toward the sunlight. The camera slowly moves closer. She lightly adjusts the sunglasses. Natural sunlight creates beautiful reflections across the lenses.

---

# CONTEXT (2.5–5s)

Still seated. She looks toward the ocean. Then slowly returns her gaze to the camera. A gentle ocean breeze naturally moves only the loose ends of her hair while **preserving the exact hairstyle from the reference image**. She smiles softly. The camera slowly circles around her, highlighting the sunglasses from different angles.

---

# SOLUTION (5–7s)

Still seated. She comfortably relaxes in the chair. She lightly touches one temple of the sunglasses. The camera performs an elegant cinematic close-up showing the sunglasses with realistic sunlight reflections.

---

# CTA (7–8s)

Still seated. She looks directly into the camera. Smiles naturally. Points downward with her index finger toward the bottom of the screen, indicating the shopping link. Maintains the pointing gesture until the video ends.

---

# CINEMATIC STYLE

* Ultra-photorealistic.
* Extremely humanized AI influencer.
* Natural breathing and blinking.
* Realistic skin texture.
* Soft natural lighting.
* Vertical 9:16 format.`
  },
  {
    id: 'p-comando-narrativa-universal',
    title: 'comando para narrativa',
    type: 'universal',
    category: 'Universal',
    content: `faz uma narrativa para esse produto com a estrutura gancho contexto- solucao e cta com ganchos visuais em cada cena não quero que mude o produto e nem a influencer mantenha constância dos dois em todas as cenas`
  },
  {
    id: 'p-comando-original',
    title: 'Comando Narrativa Provador',
    type: 'sales',
    category: 'Universal',
    content: `Faz uma narrativa de movimentos em pov em texto escrito com esse produto com ganchos visuais na estrutura gancho-contexto-solução e cta, coloca em inglês que não pode alterar o produto e a influencer ser natural e humanizada sem fala , legenda , texto ,específica que quero sem nenhum áudio só os movimentos na hora de gerar eu quero para veo 3.1 lite`
  },
  {
    id: 'p-narrativa-cinematografica',
    title: 'Narrativa Formato Provador (Veo 3.1)',
    type: 'lifestyle',
    category: 'Blusas',
    videoUrl: 'https://drive.google.com/file/d/1Xxb3R8r6mxd-kU-SpKe5l5wKnjSmaSqK/preview',
    content: `Narrativa Formato Provador para Veo 3.1 (30 segundos)

**Estilo:** Provador UGC premium, influencer feminina natural, espontânea e humanizada. Sem atuação exagerada. Sem falas, sem legendas, sem textos, sem música e sem qualquer áudio. Apenas movimentos naturais e transições visuais de troca de roupa. **O produto deve permanecer exatamente igual ao da imagem**, sem alterar estampa, modelagem ou cores. A única mudança entre cenas é a camiseta utilizada pela influencer (branca, bege e pink).

---

 Cena 1 — GANCHO (0–5s)

**Movimento**
A câmera começa muito próxima da blusas abertas sobre a cama dobrada . A influencer pega a blusa branca No exato momento em que ela cobre toda a lente acontece um corte invisível.

**Gancho visual**
Transição usando o próprio tecido cobrindo a câmera para o formato provador.

---

Cena 2 — CONTEXTO (5–10s)

Quando o tecido sai da frente da lente, a influencer já está vestindo a blusa branca.

Ela sorri discretamente enquanto meche no cabelo ajeita a manga dobrada e passa a mão suavemente sobre a estampa dos corações.

Depois caminha naturalmente em direção a tela e tampa completamente
Ela tira a mão e  agora veste a blusa bege
Ela tampa a tela completamente pela última vez e aparece usando a blusa  pink
Ela coloca uma bolsa no ombro, veste um óculos escuro, pega as chaves sobre uma mesa aponta para baixo e manda um beijo 

Movimentos leves e naturais de provador

### Direção para Veo 3.1

* Formato Provador ultra realista.
* Expressões naturais e discretas.
* Movimentos fluidos e cotidianos.
* Iluminação suave de luz natural.
* Câmera em estilo handheld cinematográfico.
* Transições práticas e precisas 
* Nenhum texto na tela.
* Nenhuma fala.
* Nenhuma legenda.
* Nenhum áudio.
* **Formato:** 9:16 (Vertical)
* **Resolução:** 4K
* Não alterar em hipótese alguma a estampa, o tecido, a modelagem ou as cores origem 
Sinais da camiseta mostrada na imagem. Apenas alternar entre as três cores existentes durante as transições.`
  },
  {
    id: 'p-pov-8s-blusas',
    title: 'Narrativa POV (8 segundos)',
    type: 'lifestyle',
    category: 'Blusas',
    videoUrl: 'https://drive.google.com/file/d/10wMVPrQNovjHUs5-IS1oAK-0aK29XhRY/preview',
    content: `Narrativa POV – 8 segundos

*Estilo:* Ultra realista | Influencer humanizada | Com fala natural | Produto idêntico ao original | Mesmo quarto.

CENA ÚNICA (0–8s)

*Movimentos*

* A câmera aproxima lentamente das quatro blusas abertas no tapete.
* Apenas as mãos aparecem passando sobre todas as cores.
* Ela levanta rapidamente a blusa branca, mostra o tecido e o caimento com as mãos e coloca no lugar.
* Faz o mesmo com a preta, a cinza e a marrom.
* Finaliza apontando para baixo indicando o link.

*Fala*

> "Olha essas quatro cores eu não consegui escolher só uma! O tecido é super macio, o caimento veste  bem e  são lindas. Me conta qual é a sua favorita  o link está  aqui embaixo!"`
  },
  {
    id: 'p-pov-8s-sem-fala-blusas',
    title: 'Narrativa POV – 8 segundos (Sem fala)',
    type: 'lifestyle',
    category: 'Blusas',
    videoUrl: 'https://drive.google.com/file/d/15ZPSSdG05FFNEE3UMRFKaYwdootxqXRO/preview',
    content: `Narrativa POV – 8 segundos (Sem fala)**

**Estilo:** Ultra-realista | POV (primeira pessoa) | Apenas as mãos aparecem | Mãos femininas morenas, elegantes e bem cuidadas | Unhas curtas com esmalte nude | Iluminação natural | Movimentos suaves | Produto 100% idêntico à imagem de referência.

### CENA ÚNICA (0–8s)

**Movimentos**

* A câmera inicia em um plano superior mostrando as quatro blusas organizadas exatamente como na imagem de referência.
* As mãos femininas morenas entram no quadro e fazem um movimento suave sobre todas as peças, sem levantá-las.
* **Em seguida, pegam apenas a blusa branca**, levantando-a com as duas mãos. Aproximam da câmera para mostrar a estampa, o tecido e o caimento. Depois retornam a peça exatamente à mesma posição.
* **Somente após devolver a branca**, as mãos pegam a blusa preta, repetindo o mesmo movimento. A peça é devolvida ao lugar antes da próxima ser tocada.
* **Por último, pegam apenas a blusa marrom**, mostrando cuidadosamente a frente, a textura e o acabamento. A peça é devolvida ao lugar original.
* As mãos alinham delicadamente as quatro blusas e finalizam apontando para baixo indicando o link 

### Regras obrigatórias

* **Nunca pegar duas blusas ao mesmo tempo.**
* **Sempre levantar apenas uma peça por vez.**
* A próxima blusa só pode ser tocada depois que a anterior for devolvida ao lugar.
* As mãos devem manter movimentos lentos, naturais e elegantes.
* Não trocar a posição das blusas.
* Não alterar cores, modelagem, estampa, tecido, costuras, proporções ou qualquer detalhe das peças.
* Nenhuma fala.
* Nenhum texto na tela.
* Nenhuma pessoa aparece além das mãos.
sem áudio só movimentos`
  },
  {
    id: 'p-calcados-provador',
    title: 'Prompt de Provador (Sandália)',
    type: 'lifestyle',
    category: 'Calçados',
    videoUrl: 'https://drive.google.com/file/d/1PP7eSx8W_QhSpJnTlYUdo6BHlltvmQ5r/preview',
    content: `### PROMPT UNIVERSAL — VEO 3.1 | UGC ULTRA-REALISTA | SANDÁLIA EM DESTAQUE

Crie um vídeo UGC ultra-realista, natural e humanizado, utilizando **exatamente a mesma influencer e exatamente a mesma sandália das imagens de referência**.

### REGRA ABSOLUTA — PRESERVAÇÃO DO PRODUTO

A sandália deve permanecer **100% idêntica ao produto de referência durante todo o vídeo**.
**Não alterar, redesenhar, modificar ou substituir absolutamente nada.**

Preservar rigorosamente:

* Mesmo modelo e formato da sandália.
* Mesma cor nude/bege.
* Mesmo salto bloco quadrado.
* Mesmo design das tiras trançadas.
* Mesmo formato da ponta aberta.
* Mesma tira no tornozelo.
* Mesma fivela metálica de ajuste.
* Mesmos detalhes, proporções, textura e acabamento.
* Não adicionar nenhum detalhe inexistente.
* Não remover nenhum detalhe original.
* A sandália deve ser sempre o **principal destaque visual do vídeo**.

A influencer também deve permanecer **exatamente com a mesma aparência, características físicas, cabelo, rosto e estilo visual da referência**, sem alterações de identidade ou aparência entre as cenas.

### CENA 1 — GANCHO VISUAL

A influencer está sentada naturalmente na cama, em um quarto aconchegante e realista. Ela está usando um sapato casual no pé. A câmera começa em um plano médio e faz um movimento suave de aproximação, direcionando imediatamente a atenção para os pés.

Ela olha naturalmente para o próprio pé e começa a retirar o sapato que já está usando, com movimentos espontâneos e realistas.

**Gancho visual:** o movimento de retirar o sapato cria curiosidade e prepara visualmente a transformação.

### CENA 2 — REVELAÇÃO DO PRODUTO

Após retirar o sapato, a influencer olha para o lado e alcança uma **caixa de sapatos posicionada sobre a cama**.

Ela puxa a caixa para perto de si e abre a tampa de forma natural e cuidadosa.

A câmera acompanha o movimento e faz uma transição para um **close-up cinematográfico da sandália dentro da caixa**.

A sandália deve ocupar grande parte do enquadramento e ser claramente o elemento mais importante da cena.

### CENA 3 — DETALHE DA SANDÁLIA

A influencer pega a sandália delicadamente com as duas mãos.

Ela gira a sandália lentamente, mostrando naturalmente:

* As tiras trançadas.
* O salto bloco.
* A parte frontal.
* A tira do tornozelo.
* A fivela metálica.

A câmera acompanha os movimentos das mãos com foco nítido no produto, utilizando profundidade de campo suave.

**Atenção:** não deformar a sandália durante o movimento. O produto deve manter exatamente o mesmo formato da referência.

### CENA 4 — ABRINDO A FIVELA

A influencer aproxima a sandália do próprio pé.

Antes de calçá-la, ela demonstra naturalmente a funcionalidade da fivela: com os dedos, **abre a fivela de ajuste da tira do tornozelo**, soltando a tira de maneira realista.

Fazer um **close-up extremo e detalhado da mão abrindo a fivela**, mostrando claramente o mecanismo real de ajuste.

A câmera deve priorizar a fivela e a sandália, sem perder o contexto da cena.

### CENA 5 — CALÇANDO A SANDÁLIA

A influencer coloca cuidadosamente o pé dentro da sandália.

Ela ajusta o pé de forma natural, posicionando corretamente os dedos e o calcanhar.

A câmera acompanha o movimento em um enquadramento próximo, mantendo a sandália em primeiro plano.

O movimento deve parecer espontâneo, como uma pessoa realmente experimentando um calçado novo em casa.

### CENA 6 — FECHANDO A FIVELA

A influencer puxa delicadamente a tira do tornozelo e **fecha a fivela de ajuste**, encaixando-a corretamente.

Fazer novamente um close-up realista da mão prendendo a fivela.

Mostrar claramente o momento em que a fivela é fechada e a tira fica ajustada ao tornozelo.

**O fechamento da fivela deve acontecer de forma fisicamente correta e realista.**

### CENA 7 — MOMENTO DE ENCANTAMENTO

Depois de colocar a sandália, a influencer movimenta levemente o pé para frente e para trás, observando o calçado.

Ela olha para a sandália com uma expressão natural de satisfação, como quem acabou de experimentar e gostou do produto.

Ela cruza levemente as pernas sobre a cama e movimenta o pé de maneira espontânea, permitindo que a câmera capture o design completo da sandália.

A câmera faz um movimento suave de aproximação, destacando principalmente:
**as tiras trançadas + salto bloco + fivela + acabamento nude.**

### CENA 8 — FINAL / CTA VISUAL

A influencer permanece sentada na cama, com postura natural e descontraída.

Ela olha para a câmera e, de maneira espontânea e humanizada, **aponta naturalmente para baixo**, indicando visualmente a região inferior da tela, como se estivesse sinalizando onde encontrar o produto.

O gesto deve ser sutil, natural e convincente, sem parecer ensaiado.

Finalizar com um **close-up hero da sandália no pé**, mostrando o produto perfeitamente ajustado e em destaque.

### ESTILO VISUAL

Vídeo vertical 9:16, estética UGC premium, ultra-realista, iluminação natural e aconchegante, movimentos de câmera suaves, profundidade de campo cinematográfica, textura de pele realista, mãos e dedos anatomicamente corretos, movimentos humanos naturais, sem poses artificiais.

**A sandália deve ser o protagonista absoluto do vídeo.**

Não alterar o produto.
Não mudar o modelo.
Não mudar a cor.
Não mudar o formato.
Não trocar a sandália por outra.
Não criar uma sandália semelhante.
Usar **exatamente o produto das imagens de referência**.

**Sem fala, sem diálogo, sem narração, sem música e sem qualquer tipo de áudio. Apenas movimentos naturais e realistas.**`
  },
  {
    id: 'p-sandalia-veo-3-8s',
    title: 'UGC Ultra-Realista | Sandália em Destaque',
    type: 'lifestyle',
    category: 'Calçados',
    videoUrl: 'https://drive.google.com/file/d/1i3BkgKNE26H5axw7wsgd8BNA0hEeLtGB/preview',
    content: `# PROMPT UNIVERSAL — VEO 3.1 | UGC ULTRA-REALISTA | SANDÁLIA EM DESTAQUE (8 SEGUNDOS)

Crie um vídeo UGC ultra-realista de **8 segundos**, vertical (9:16), utilizando **exatamente a mesma influencer e exatamente a mesma sandália das imagens de referência**.

## REGRA ABSOLUTA — LOCK DO PRODUTO

A sandália mostrada nas imagens de referência deve ser tratada como **um único objeto físico contínuo durante todo o vídeo**.

**A IA deve rastrear (track) a mesma sandália do primeiro ao último frame, sem recriá-la, reinterpretá-la ou substituí-la durante qualquer movimento.**

A sandália deve permanecer absolutamente idêntica em todos os enquadramentos, closes, mudanças de câmera e movimentos da influencer.

**Mesmo durante a caminhada, a sandália NÃO pode ser regenerada. Deve permanecer exatamente a mesma sandália da referência.**

Nunca alterar:

* modelo
* design
* silhueta
* formato
* largura
* altura
* proporções
* cor nude/bege
* material
* textura
* acabamento
* brilho
* salto bloco quadrado
* altura do salto
* espessura do salto
* tiras trançadas
* posição das tiras
* largura das tiras
* ponta aberta
* tira do tornozelo
* fivela metálica
* costuras
* curvas
* encaixe no pé

É proibido:

* gerar outra sandália
* reinterpretar o modelo
* modificar detalhes durante a caminhada
* trocar a fivela
* alterar o salto
* alterar a textura
* alterar a cor
* alterar as tiras
* alterar as proporções
* criar qualquer versão semelhante

A sandália deve parecer **o mesmo objeto físico filmado continuamente**, como em uma gravação real.

A influencer também deve permanecer exatamente igual à referência, mantendo o mesmo rosto, cabelo, corpo, roupa, maquiagem e identidade visual.

---

# CENA 1 (0–1,5s)

No quarto elegante, a influencer entra segurando uma pequena caixa de sapatos.

Ela senta na cama.

Coloca a caixa ao lado.

Passa delicadamente a mão sobre a tampa.

Travelling suave.

Ainda não revelar completamente a sandália.

---

# CENA 2 (1,5–3s)

Ela abre lentamente a caixa.

Close cinematográfico revelando parcialmente a sandália.

Ela sorri discretamente.

Todo o foco permanece na sandália.

---

# CENA 3 (3–5s)

Ela retira cuidadosamente a sandália.

Passa os dedos pelas tiras trançadas.

Desliza a mão pelo acabamento.

Toca o salto.

Ajusta suavemente a fivela.

A câmera alterna entre:

* close das mãos
* close da textura
* close do salto
* detalhe da fivela

Sem qualquer deformação do produto.

---

# CENA 4 (5–6,8s)

Ela calça cuidadosamente a sandália.

**Após calçar, a sandália deve permanecer exatamente a mesma da referência.**

Durante toda a caminhada:

**A câmera deve apenas acompanhar o movemento da sandália já existente.**

**Não recriar o calçado.**

**Não redesenhar o calçado.**

**Não gerar uma nova versão ao caminhar.**

Mostrar somente:

* dois passos lentos
* movimento natural
* estabilidade
* conforto

A câmera acompanha lateralmente os pés.

A sandália permanece exatamente igual à referência durante todos os frames.

---

# CENA 5 (6,8–8s)

Ela para próxima à cama.

Cruza uma perna.

Levanta levemente o pé.

Olha para a câmera.

Sorri.

Aponta  para baixo indicando o link 

Finalizar com um hero shot cinematográfico aproximando lentamente da sandália.

Destacar:

* tiras trançadas
* salto bloco
* fivela metálica
* acabamento nude
* textura original

---

# ESTILO VISUAL

* Vertical 9:16
* Duração total de 8 segundos
* UGC Premium
* Ultra-realista
* Iluminação natural
* Quarto elegante
* Movimentos suaves de câmera
* Profundidade de campo cinematográfica
* Pele hiper-realista
* Física realista
* Mãos anatomicamente corretas
* Expressões espontâneas
* Sem cortes bruscos

# CONSISTÊNCIA ABSOLUTA

* A sandália deve ser tratada como **um único objeto físico rastreado (tracked object)** durante todo o vídeo.
* **Nunca regenerar o produto durante a animação.**
* **Nunca substituir o modelo ao caminhar.**
* **Nunca modificar o design entre os frames.**
* **A sandália deve manter identidade visual perfeita do primeiro ao último frame.**
* Manter exatamente a mesma influencer.
* Manter exatamente a mesma roupa.
* Manter exatamente o mesmo quarto.
* Manter exatamente a mesma iluminação.

**Sem fala, sem diálogo, sem narração, sem música e sem qualquer tipo de áudio. Apenas movimentos naturais, realistas e humanizados.**`
  },
  {
    id: 'p-sandalia-ficticia-8s',
    title: 'UGC Ultra-Realista | Sandália Feminina (8s)',
    type: 'lifestyle',
    category: 'Calçados',
    videoUrl: 'https://drive.google.com/file/d/1fuQ7mbIQMCV4V_VhcqYYiydfoENFyoBu/preview',
    content: `# PROMPT UNIVERSAL — VEO 3.1 | UGC ULTRA-REALISTA | 8 SEGUNDOS | SANDÁLIA FEMININA | SEM ÁUDIO

Crie um vídeo UGC ultra-realista de **exatamente 8 segundos**, utilizando **uma influencer fictícia gerada por IA**, mantendo **consistência visual baseada exclusivamente nas imagens de referência**, sem representar ou reproduzir a identidade de qualquer pessoa real ou famosa.

## PERSONAGEM

A personagem deve ser uma **influencer fictícia criada por IA**.

Utilize as imagens apenas para manter a consistência de:

* roupa
* cabelo
* maquiagem
* proporções
* estilo visual
* iluminação
* enquadramento

Não copiar a identidade de nenhuma pessoa real.

A personagem deve permanecer consistente durante todo o vídeo.

---

# REGRA ABSOLUTA — PRESERVAÇÃO DO PRODUTO

A sandália deve permanecer **100% idêntica ao produto mostrado nas imagens de referência**.

É proibido:

* alterar o modelo
* alterar a cor
* alterar o formato
* alterar a espessura das tiras
* alterar o salto
* alterar a fivela
* alterar a textura
* alterar o acabamento
* adicionar detalhes
* remover detalhes
* substituir por outro modelo

Preservar exatamente:

* cor nude/bege
* salto bloco quadrado
* tiras trançadas
* ponta quadrada
* tira do tornozelo
* fivela metálica
* costuras
* acabamento
* proporções

A sandália nunca deve deformar.

Nunca deve mudar durante o vídeo.

Ela deve ser sempre o elemento principal.

---

# DURAÇÃO

Exatamente **8 segundos**.

---

# CENA 1 — GANCHO VISUAL (0–2s)

A influencer fictícia está em pé diante de um espelho em um quarto elegante com iluminação natural.

Ela observa rapidamente o look.

Em seguida levanta discretamente a barra da roupa para revelar a sandália.

A câmera acompanha o movimento descendo lentamente até os pés.

O produto torna-se imediatamente o foco principal.

---

# CENA 2 — MOVIMENTO NATURAL (2–4s)

A influencer dá dois passos lentos em direção à câmera.

A câmera acompanha apenas da altura dos joelhos para baixo.

Cada passo destaca:

* as tiras trançadas
* o salto bloco
* a ponta quadrada
* o acabamento nude

Movimentos suaves e naturais.

---

# CENA 3 — CLOSE PREMIUM (4–6s)

A influencer para.

Cruza levemente um pé à frente do outro.

Com uma das mãos passa delicadamente os dedos sobre as tiras trançadas e depois toca suavemente a fivela apenas para destacar o acabamento.

Não abrir a fivela.

Não modificar a sandália.

A câmera realiza um close cinematográfico extremamente detalhado.

---

# CENA 4 — CTA VISUAL (6–8s)

A influencer olha para a câmera com um sorriso discreto.

Sem falar.

Sem mover os lábios.

Ela aponta suavemente para baixo.

A câmera finaliza com um hero shot da sandália mostrando:

* tiras trançadas
* salto bloco
* fivela metálica
* acabamento nude

A sandália permanece perfeitamente idêntica à referência.

---

# ESTILO VISUAL

* Vertical 9:16
* UGC premium
* Ultra-realista
* Qualidade cinematográfica
* Luz natural
* Quarto moderno e aconchegante
* Movimentos suaves de câmera
* Profundidade de campo cinematográfica
* Pele extremamente realista
* Mãos anatomicamente corretas
* Física realista
* Sem deformações
* Sem glitches
* Produto sempre em foco

---

# REGRAS OBRIGATÓRIAS

* Utilizar uma **personagem fictícia criada por IA**, inspirada apenas no estilo visual das imagens de referência.
* Não reproduzir a identidade de qualquer pessoa real ou famosa.
* Manter a personagem consistente durante todo o vídeo.
* Preservar exatamente o mesmo modelo da sandália.
* Não alterar cor.
* Não alterar formato.
* Não alterar textura.
* Não alterar acabamento.
* Não trocar o produto.
* Não criar uma versão semelhante.
* A sandália deve ser o protagonista absoluto do vídeo.

---

# ÁUDIO

**Não gerar qualquer tipo de áudio.**

* Sem fala.
* Sem diálogo.
* Sem narração.
* Sem música.
* Sem efeitos sonoros.
* Sem ruídos ambientes.
* Sem passos audíveis.
* Sem respiração.
* Sem sons sincronizados.

**O vídeo deve ser completamente silencioso (mute), contendo apenas as imagens e movimentos naturais da personagem fictícia.**`
  },
  {
    id: 'p-conjunto-pov-8s',
    title: 'Narrativa POV | Conjunto Lilás (8s)',
    type: 'lifestyle',
    category: 'Conjuntos',
    videoUrl: 'https://drive.google.com/file/d/1-cmur1zUUQ0jDIL_COypojtWjrCd4EH-/preview',
    content: `**Prompt otimizado – Narrativa POV (8 segundos | sem áudio | apenas movimentos)**

**Estilo:** Ultra-realista | POV (primeira pessoa) | Apenas as mãos aparecem | Mãos femininas morenas, elegantes e bem cuidadas | Unhas curtas com esmalte nude | Iluminação natural suave | Fundo neutro e clean | Movimentos lentos, delicados e humanizados | Produto 100% idêntico à imagem de referência.

### CENA ÚNICA (0–8s)

A câmera inicia em um plano superior mostrando o **conjunto lilás completo** organizado sobre uma superfície neutra, exatamente como na imagem de referência: **a blusa em tecido alfaiataria com modelagem sobreposta (efeito de camada frontal) posicionada acima do shorts lilás combinando**, mantendo o mesmo tom de lilás, a mesma modelagem, o mesmo tecido, acabamento e proporções do conjunto original.

**Movimentos**

* As mãos femininas morenas entram suavemente no quadro e passam delicadamente sobre as duas peças, como quem aprecia o tecido.
* **Primeiro, pegam apenas a blusa**, levantando-a com as duas mãos de forma natural e elegante. Aproximam levemente da câmera para evidenciar o tecido alfaiataria, o caimento, a modelagem sobreposta e o acabamento. A blusa é devolvida exatamente à mesma posição.
* **Somente após devolver a blusa**, as mãos pegam apenas o shorts lilás, levantando-o suavemente para mostrar a modelagem, o tecido, os bolsos e o acabamento. O shorts também é devolvido exatamente ao lugar original.
* As mãos alinham delicadamente as duas peças, deixando o conjunto perfeitamente organizado.
* Finalizam com um gesto natural apontando para baixo, indicando o link do produto.

### Regras obrigatórias

* **Nunca pegar as duas peças ao mesmo tempo.**
* **Sempre levantar apenas uma peça por vez.**
* A próxima peça só pode ser tocada depois que a anterior for devolvida ao lugar.
* Manter movimentos lentos, naturais, elegantes e humanizados.
* **Não alterar absolutamente nada do conjunto original.**
* Não trocar a cor lilás.
* Não modificar a modelagem da blusa sobreposta.
* Não alterar o shorts, bolsos, tecido, costuras, acabamento ou proporções.
* Não mudar o modelo do produto.
* Nenhuma fala.
* Nenhum texto na tela.
* Nenhuma pessoa aparece além das mãos.
* **Sem áudio, apenas movimentos naturais e suaves.**`
  },
  {
    id: 'p-conjunto-ugc-8s',
    title: 'UGC Fashion | Conjunto Elegante (8s)',
    type: 'lifestyle',
    category: 'Conjuntos',
    videoUrl: 'https://drive.google.com/file/d/1ALdRSZvi4rGWi_i0kmuLo4yDgoVyGpP3/preview',
    content: `Universal Prompt (English) – UGC Fashion Video | Brazilian Portuguese Speech | 8 Seconds**

> Create a **hyper-realistic vertical 9:16 UGC fashion video** with cinematic 4K quality, perfect temporal consistency, natural human behavior, and authentic smartphone aesthetics.
>
> The influencer is wearing the **exact clothing shown in the reference image**. Preserve **100% of the garment's original design**, including silhouette, cut, fabric, texture, color, stitching, proportions, fit, finishing, trims, sleeves, collar, buttons, zippers, pockets, and every visual detail. Do not redesign, reinterpret, replace, or modify any aspect of the outfit.

### Opening (0–1s)

The video begins with the influencer's **palm completely covering the smartphone camera lens**, filling 100% of the frame.

After a brief moment, she smoothly removes her hand, revealing herself. In the same continuous motion, she brushes a few strands of hair behind her ear naturally.

She then makes a quick, subtle adjustment to the waist of her outfit, exactly like someone about to record a casual TikTok.

### Main Scene (1–7s)

She looks directly into the camera with a relaxed smile, gently shifting her weight while naturally showing the outfit through subtle body movement. The fabric moves realistically.

She speaks **naturally in Brazilian Portuguese (pt-BR)** with perfect lip sync and authentic pronunciation.

**Dialogue (approximately 8 seconds total):**

> **"Esse conjunto resolveu meu dilema: elegante, confortável e sem gastar muito. Se você também ama praticidade, clica no link e garante o seu!"**

**Narrative structure:**

* **Gancho:** "Esse conjunto resolveu meu dilema..."
* **Contexto:** "...elegante, confortável..."
* **Solução:** "...sem gastar muito."
* **CTA:** "Clica no link e garante o seu!"

### Final Scene (7–8s)

She naturally walks a step closer to the camera, smiles warmly, blows a quick kiss, then points downward with her index finger for less than one second, indicating the caption or purchase link.

### Body Language

* Relaxed posture.
* Natural breathing.
* Soft facial expressions.
* Gentle torso movement.
* Slight hip and leg repositioning.
* Casual UGC behavior.
* No runway poses.
* No exaggerated influencer gestures.
* Continuous, fluid human motion.

### Camera

* Vertical 9:16.
* POV smartphone recording.
* Chest-to-face height.
* Very subtle handheld micro-movements.
* No zoom.
* No abrupt framing changes.
* Natural indoor lighting.

### Motion Quality

* Ultra-realistic human movement.
* Perfect body mechanics.
* Natural hair physics.
* Realistic fabric simulation.
* No morphing.
* No identity drift.
* No frozen frames.
* No repeated gestures.
* No body deformation.
* No extra fingers.

### Identity Preservation

Maintain the exact facial identity, hairstyle, skin texture, body proportions, and every clothing detail exactly as shown in the reference image throughout the entire video.

### Restrictions

* No captions.
* No on-screen text.
* No logos.
* No UI elements.
* No visual effects.
* No beauty filters.
* No skin smoothing.
* No dancing.
* No exaggerated poses.
* No unrealistic gestures.

### Audio

* **No background music.**
* **No sound effects.**
* **Only the influencer's natural voice speaking in Brazilian Portuguese (pt-BR).**`
  },
  {
    id: 'p-veo-3-bolsa',
    title: 'VEO 3.1 / FLOW – ULTRA-REALISTIC PRODUCT VIDEO',
    type: 'lifestyle',
    category: 'Bolsas',
    videoUrl: 'https://drive.google.com/file/d/1XwGfyLhjUBEy_ckMskNBs2WtQaBv2uf-/preview',
    content: `# **VEO 3.1 / FLOW – ULTRA-REALISTIC PRODUCT VIDEO (8 SECONDS)**

### **STRICT REFERENCE LOCK – NO PRODUCT MODIFICATIONS**

Use the attached reference images as the **absolute source of truth**.

The generated video **must follow the reference images with 100% accuracy**.

## NON-NEGOTIABLE RULES

* **DO NOT redesign, reinterpret, or modify the product.**
* Maintain **exactly** the same:

  * shape
  * proportions
  * corduroy fabric texture
  * stitching
  * seams
  * zipper position
  * shoulder strap
  * strap adjustment buckle
  * leather logo patch
  * dimensions
  * pockets
  * colors
  * every visible detail.

The product must remain **pixel-faithful** to the reference.

If any detail is uncertain, **copy the reference exactly.**

---

# POCKET ACCURACY (VERY IMPORTANT)

**The bag has ONLY ONE EXTERNAL POCKET.**

This pocket is positioned **ONLY ON THE RIGHT SIDE OF THE BAG**, exactly as shown in the reference images.

### STRICTLY FORBIDDEN

* DO NOT create a front pocket.
* DO NOT invent any additional pocket.
* DO NOT mirror the pocket.
* DO NOT move the pocket.
* DO NOT place any pocket on the front panel.
* DO NOT create decorative flaps on the front.
* DO NOT generate symmetrical pockets.
* DO NOT modify the pocket size or shape.

The front face of the bag must remain completely clean, containing **ONLY the leather logo patch**.

The side pocket must remain exactly where it appears in the reference images.

---

# HANDS ONLY

Only elegant female hands are visible.

No face.

No body.

No arms.

No sleeves.

No reflections.

No shadows of a person.

No influencer visible.

Only natural human hands interacting with the product.

Movements must feel soft, realistic and spontaneous.

---

# CAMERA

Vertical 9:16

Ultra-realistic.

Luxury e-commerce style.

Natural daylight.

Smooth cinematic movements.

No sudden camera motion.

---

# ABSOLUTELY NO AUDIO

This video must be completely silent.

**STRICTLY FORBIDDEN:**

* Voice
* Narration
* Speech
* Whispering
* Music
* Background music
* Ambient sound
* Room sound
* Foley
* Fabric sounds
* Hand sounds
* Footsteps
* Notification sounds
* Sound effects
* Artificial audio
* Generated audio

Generate a **100% silent video**.

---

# STRICTLY FORBIDDEN

* Text
* Captions
* Subtitles
* Titles
* Logos
* Graphics
* Watermarks
* Icons
* Emojis
* UI elements
* Buttons

---

# SCENE

The bag is lying naturally on a soft neutral rug exactly like a lifestyle product photo.

---

# HOOK (0–2s)

One hand gently slides the bag toward the camera.

The second hand slowly glides across the corduroy fabric, highlighting its premium texture.

The bag remains in its original position and design.

---

# CONTEXT (2–4s)

One hand rotates the bag slightly to reveal **ONLY THE SIDE POCKET**.

The hand opens the side pocket.

A small earbud case is placed inside.

The item is removed.

The side pocket is gently closed.

**Do not show or generate any pocket on the front of the bag.**

---

# SOLUTION (4–6.5s)

One hand slowly opens the main zipper.

Both hands gently spread the opening to reveal the spacious interior.

The camera briefly focuses inside the bag.

The zipper remains fully consistent with the reference.

No structural changes.

---

# CTA (6.5–8s)

The zipper is gently closed.

The hands smooth the bag one last time.

One hand exits the frame.

The remaining hand naturally points downward below the bag.

Hold for a brief moment.

Fade out.

---

# FINAL GENERATION RULES

Follow the reference images with **maximum fidelity**.

Do not improvise.

Do not stylize.

Do not redesign.

Do not add features.

Do not remove features.

The final bag must be visually indistinguishable from the reference images, with the **only external pocket located exclusively on the side**, never on the front.

**Output: One continuous 8-second ultra-realistic video with only natural hand movements, no audio, no text, and exact product consistency.**
sem nenhum áudio só movimentos`
  },
  {
    id: 'p-veo-3-camiseta',
    title: 'Universal VEO 3 Prompt (English) – Silent UGC Product Showcase',
    type: 'lifestyle',
    category: 'Moda',
    videoUrl: 'https://drive.google.com/file/d/1ZVp6tMFE50An_ZbmmWP9AgkzhoqrdPbV/preview',
    content: `## **Universal VEO 3 Prompt (English) – Silent UGC Product Showcase | No Speech | Hyper-Realistic**

> **Use the uploaded reference images as the ONLY reference for the T-shirt. The garment MUST remain 100% identical to the reference images throughout the entire video.**
>
> **DO NOT redesign, reinterpret, stylize, replace, improve, simplify, or modify any part of the product. Preserve exactly the same fit, oversized silhouette, proportions, stitching, seams, fabric weight, cotton texture, sleeve length, collar, color, typography, front print placement, back illustration, line thickness, artwork, dimensions, wrinkles, drape, hem, and every visual detail exactly as shown in the reference images.**
>
> **The front text must remain exactly the same. The back artwork must remain exactly the same. Never invent new graphics, fonts, colors, shadows, embroidery, textures, labels, or details.**
>
> **The male model must remain the same person during the entire video. Never replace, morph, regenerate, or swap the model. Keep the same face, hairstyle, gray hair, beard, tattoos, skin tone, body proportions, age, expression, clothing fit, pants, shoes, watch, and realistic appearance with perfect temporal consistency.**
>
> Create a **hyper-realistic vertical 9:16 UGC commercial** with cinematic 4K quality, authentic smartphone aesthetics, soft natural lighting, physically accurate fabric simulation, perfect anatomy, realistic hand interaction, and smooth camera movement.
>
> **There must be NO speech, NO subtitles, NO captions, NO text overlays, NO logos, NO watermarks, and NO background graphics. Only natural movements and ambient realism.**

---

## **Scene 1 – Visual Hook (0–2 seconds)**

The video opens with a premium black gift box placed on a beautiful neutral textured rug.

Only a pair of realistic human hands are visible.

The hands slowly lift the elegant black lid, revealing the folded T-shirt inside.

The hands carefully remove the T-shirt, unfold it naturally, and hold it close to the camera.

First, the **front** is displayed for a moment.

Then, with a smooth realistic movement, the shirt is turned to reveal the **back**.

The camera captures the fabric texture, prints, stitching, collar, and premium cotton material.

Everything looks natural, slow, luxurious, and human.

---

## **Scene 2 – Context (2–5 seconds)**

Cut seamlessly to the **same male model** wearing the exact same T-shirt.

The model slowly walks toward the camera with natural confidence.

He stops naturally.

He gently adjusts one sleeve.

He lightly smooths the fabric across the chest.

Then he slowly rotates 180 degrees to reveal the **back print**.

Pause briefly.

Rotate naturally back to the front.

Every movement feels authentic, relaxed, and premium.

The camera makes subtle handheld movements, creating a genuine UGC feeling.

---

## **Scene 3 – Solution (5–7 seconds)**

The model smiles naturally.

He lightly touches the chest area where the front print is located.

Then he turns once more just enough to highlight the back artwork.

The fabric moves realistically with gravity and body motion.

No exaggerated posing.

No fashion runway attitude.

Only authentic human behavior.

---

## **Scene 4 – CTA (7–8 seconds)**

The model returns to the front.

Maintains eye contact with the camera.

Gives a subtle genuine smile.

Raises one hand naturally and points downward with his index finger, clearly indicating where the purchase link would be.

Hold this final pose for one second.

Fade out naturally.

---

## **Critical Consistency Requirements**

* The T-shirt must remain **100% identical** to the uploaded reference images.
* Never change the front print.
* Never change the back artwork.
* Never modify the oversized fit.
* Never alter the collar shape.
* Never change sleeve length.
* Never alter the cotton texture.
* Never change wrinkles or drape unnaturally.
* Never add or remove labels.
* Never modify colors.
* Never replace the garment.
* Never replace the model.
* Keep the same gray-haired man with the same beard, tattoos, facial features, hairstyle, body proportions, clothing, shoes, and accessories throughout the video.
* Perfect temporal consistency between every frame.
* Hyper-realistic skin, hands, eyes, facial expressions, and natural body mechanics.
* Natural breathing, blinking, and micro-expressions.
* Premium cinematic realism with authentic human movement.
* **No speech. No captions. No subtitles. No text. No logos. No watermarks. Only realistic movement and product presentation.**
sem áudio só movimentos`
  },
  {
    id: 'p-lencol-pov-2',
    title: 'POV Enxoval de Luxo (Lençol)',
    type: 'lifestyle',
    category: 'Roupas de Cama',
    videoUrl: 'https://drive.google.com/file/d/1VY6PSxMAq5bOO1ikkUa_BiHDEZGaZpqL/preview',
    content: `@Airon IA - Vídeos com IA:Ultra-realistic POV (first-person perspective) photograph in VERTICAL PORTRAIT format (9:16, 1080x1920).
Use EXACTLY the bedding product shown in the reference image. Preserve 100% of the original product's appearance, including all colors, patterns, textures, stitching, materials, shape, proportions, folds, and every visible detail. Do not modify, replace, invent, or reinterpret any aspect of the product.
The viewer is holding the folded bedding set naturally with both hands in the foreground, as if they have just picked it up to admire it. The product occupies approximately 50–60% of the frame and remains the primary focus.
In the background, there is a modern and elegant bedroom where the exact same bedding set from the reference image is already arranged perfectly on the bed, creating a cohesive and luxurious presentation. The bedroom should feature contemporary interior design, soft ambient lighting, clean decor, and a premium atmosphere.
Shot on iPhone 15 Pro, 24mm lens, f/1.8 aperture, shallow depth of field, realistic lighting, soft shadows, and professional product photography aesthetics. The scene should feel natural, candid, and suitable for TikTok, Instagram Reels, and e-commerce advertising.
No text, no logos, no watermarks, no extra objects distracting from the scene. Maintain absolute fidelity to the reference product.
no final ela aponta para baixo`
  },
  {
    id: 'p-flow-blusa-vestir',
    title: 'FLOW — UGC ULTRA-REALISTA | VESTINDO A BLUSA',
    type: 'lifestyle',
    category: 'Blusas',
    videoUrl: 'https://drive.google.com/file/d/1YTuI2oH-g3NxxxrAnAlSbc6CBtemq38p/preview',
    content: `### **FLOW — UGC ULTRA-REALISTA | GANCHO VISUAL | VESTINDO A BLUSA | SEM ÁUDIO**

**Scene Duration:** 8 seconds
**Style:** Ultra-realistic UGC, cinematic realism, natural lighting, human behavior, continuous single shot.

**Visual Hook:**
The influencer is initially shown **from behind**, standing naturally while holding the blouse on a hanger at shoulder height. She remains relaxed for a brief moment, creating curiosity before putting it on.

**Action Sequence (Continuous Motion):**

The influencer gently removes the blouse from the hanger using both hands. She holds the blouse naturally by the lower hem, slightly opening the fabric while leaning her head forward. She smoothly guides her head through the neck opening, allowing the fabric to slide naturally over her hair and shoulders. Her hair reacts realistically, moving slightly as the collar passes over it.

Next, she inserts one arm into the corresponding sleeve, extending it naturally until her hand emerges from the cuff. Without interruption, she repeats the same movement with the opposite arm. The blouse settles naturally onto her body under gravity, with realistic folds, stretching, compression, and soft fabric dynamics.

After the blouse is fully on, she gently pulls the bottom hem downward to adjust the fit. She then lightly smooths the shoulders, collar, and sleeves using her fingertips with subtle, spontaneous gestures exactly as a real person would when dressing. She slowly turns her body toward the camera, ending with a confident, natural smile while the blouse remains perfectly positioned.

### **Movement Quality Requirements**

* Human, organic movements only.
* Realistic body biomechanics.
* Natural interaction between hands, fabric, hair, and body.
* Hair reacts naturally while passing through the collar.
* Fabric responds with realistic gravity, folds, tension, and inertia.
* Fingers move independently with realistic articulation.
* Natural breathing and subtle body balance throughout.
* Slight weight shifts between feet.
* Realistic shoulder, elbow, wrist, neck, and torso movement.
* Clothing follows the body's movement naturally.
* No robotic animation.
* No exaggerated movements.
* No clipping between body and clothing.
* No deformation of the hands, body, face, or garment.
* No morphing.
* No frame glitches.
* No sudden acceleration.
* No unnatural poses.

### **Product Consistency**

The blouse must remain **exactly identical** to the reference image throughout the entire scene.

* Same model.
* Same color.
* Same fabric.
* Same texture.
* Same stitching.
* Same sleeves.
* Same collar.
* Same print.
* Same proportions.
* Same fit.
* Same drape.

Do not modify, replace, reinterpret, or redesign the blouse in any way.

### **Character Consistency**

The influencer's face, body proportions, hairstyle, hair color, skin tone, makeup, age, and overall identity must remain exactly the same throughout the scene.

### **Camera**

Single continuous shot. No cuts. No transitions. No zoom jumps. Natural handheld micro-movements only. The camera remains stable and follows the action smoothly.

### **Audio**

**Absolutely no audio of any kind.**

* No voice.
* No dialogue.
* No narration.
* No music.
* No sound effects.
* No ambient sounds.
* No footsteps.
* No clothing sounds.
* No hanger sounds.
* No breathing sounds.
* No captions.
* No subtitles.
* No on-screen text.
* Silent video only.`
  },
  {
    id: 'p-tapete-cozinha',
    title: 'FLOW — UGC | COMERCIAL TAPETE COZINHA',
    type: 'lifestyle',
    category: 'Tapete',
    videoUrl: 'https://drive.google.com/file/d/1_AyogAjgrOz7MS4CfDpPuJwuQinKN8VK/preview',
    content: `## **VEO 3 Prompt (English) – Kitchen Mat Commercial**

**Style:** Ultra-realistic | Natural | Humanized | No dialogue | No subtitles | No text | No audio

### **IMPORTANT INSTRUCTIONS (DO NOT IGNORE)**

* **DO NOT CHANGE THE PRODUCT IN ANY WAY.**
* **The kitchen mats MUST be 100% identical to the reference image.**
* Maintain the **exact same design, size, proportions, colors, border, print, texture, thickness, and overall appearance.**
* **Do not redesign, simplify, replace, or reinterpret the mats.**
* The influencer must be **natural, humanized, authentic, and expressive**, never looking like a mannequin or AI.
* Smooth, realistic body language and facial expressions.
* Bright modern kitchen with soft natural lighting.
* **No speech.**
* **No captions.**
* **No text on screen.**
* **No music.**
* **No sound effects.**
* Only realistic movements.

---

## **SCENE 1 – HOOK (Visual Hook)**

The influencer enters carrying the rolled kitchen mat. She pretends it feels heavier than expected, smiles with curiosity, and quickly unrolls it on the floor in one smooth motion.

**Visual Hook:** The mat unfolds dramatically across the kitchen floor.

---

## **SCENE 2 – CONTEXT**

She kneels naturally and carefully aligns both mats in front of the sink, gently smoothing them with her hands while admiring how perfectly they fit the space.

**Visual Hook:** Close-up of her hands adjusting the mats with attention to detail.

---
---

## **SCENE 4 – SOLUTION**

She steps onto the mats barefoot or with clean indoor shoes, smiling naturally. She shifts her weight comfortably while preparing something on the countertop, showing relaxation and comfort.

**Visual Hook:** Gentle foot movement emphasizing comfort.

---

## **SCENE 5 – RESULT**

She walks naturally across the kitchen, returns to the mats, looks satisfied, then gives a warm genuine smile toward the camera.

**Visual Hook:** Comfortable natural movement while using the kitchen.

---

## **SCENE 6 – CTA**

She walks toward the camera with a friendly smile, stops naturally, and **points both index fingers downward**, clearly indicating the purchase link below.

**Visual Hook:** Downward pointing gesture held naturally for a moment before the video ends.`
  },
  {
    id: 'p-cortina-premium',
    title: 'FLOW — UGC | COMERCIAL CORTINA BLACKOUT',
    type: 'lifestyle',
    category: 'Cortina',
    videoUrl: 'https://drive.google.com/file/d/1_u6if-lIz_TMLvt9Q6ErW5gSgB6j6G_3/preview',
    content: `## **Veo 3.1 Lite Prompt – POV Curtain Narrative (Silent UGC)**

**Style:** Ultra-realistic POV | 9:16 Vertical | 8 Seconds | No Audio | No Text

### **CORE MANDATES**
* **DO NOT ALTER THE PRODUCT:** The curtain must remain 100% identical to the reference image (color, fabric, texture, folds).
* **IDENTITY CONSISTENCY:** The influencer must be natural, humanized, and identical to the reference.
* **SILENT EXECUTION:** No speech, no dialogue, no subtitles, no captions, no on-screen text.
* **ABSOLUTELY NO AUDIO:** The output must be completely silent.

---

### **SCENE 1 – THE HOOK (POV Visual Surprise)**
**Action:** Handheld POV. The camera (viewer's eyes) is positioned close to the curtain. A hand enters the frame naturally and quickly pulls the blackout curtain shut. 
**Visual Result:** The room transitions instantly from bright daylight to a deep, comfortable shadow. The influencer is seen in the frame reacting with a genuine, silent "wow" expression and a satisfied smile.

---

### **SCENE 2 – CONTEXT (The Elegant Detail)**
**Action:** POV moves closer to the fabric. The influencer’s hand gently slides across the delicate voile layer underneath. 
**Visual Result:** Focus on the rich texture and high-quality finish of the fabric. The movement is slow and appreciative, highlighting the "Context" of premium quality.

---

### **SCENE 3 – SOLUTION (The Result)**
**Action:** POV pulls back slightly. The influencer is seen standing comfortably in the perfectly shaded room, looking relaxed. She gives a thumbs up or a simple, approving nod toward the camera, demonstrating the "Solution" of a perfect blackout environment.

---

### **SCENE 4 – CTA (Direct Action)**
**Action:** The influencer walks closer to the camera with a friendly, inviting smile. She stops naturally and **points her index finger directly downward**, clearly indicating the link below.
**Visual Result:** The gesture is held for a moment to ensure clarity.

---

### **TECHNICAL REQUIREMENTS (VEO 3.1 LITE)**
* **Cinematic Realism:** High-fidelity skin textures, natural hair movement, and realistic fabric physics.
* **Lighting:** Soft, natural daylight transitioning to a realistic indoor shadow.
* **Motion:** Fluid, organic human movements without robotic stiffness or morphing.
* **No Post-Production:** No logos, no watermarks, no overlay text.
* **Consistency:** Zero changes to the influencer’s appearance or product details throughout the 8 seconds.`
  },
  {
    id: 'p-airfryer-liners',
    title: 'FLOW — UGC | COMERCIAL PROTETOR AIR FRYER',
    type: 'lifestyle',
    category: 'Cozinha',
    videoUrl: 'https://drive.google.com/file/d/1OnCI6FiwEueBi9Cddp0kcWQ_7N4xVG5w/preview',
    content: `Create an 8-second vertical product demonstration video using the exact product shown in the reference image. DO NOT ALTER, MODIFY, REPLACE, REDESIGN, OR CHANGE THE PRODUCT IN ANY WAY. The silicone air fryer liners must remain exactly as shown in the reference image, preserving their original shape, size variations, color, texture, fluted edges, and realistic appearance.

The influencer should look natural, humanized, friendly, and realistic, with authentic facial expressions and smooth natural body movements. She must behave like a real person demonstrating a product in a modern home kitchen. No exaggerated acting or artificial movements.

IMPORTANT: THE TOTAL VIDEO DURATION MUST BE EXACTLY 8 SECONDS.

IMPORTANT: NO AUDIO OF ANY KIND. NO VOICEOVER, NO SPEECH, NO DIALOGUE, NO MUSIC, NO SOUND EFFECTS, NO AMBIENT SOUND, NO BACKGROUND NOISE. THE VIDEO MUST BE COMPLETELY SILENT.

The video must contain ONLY natural visual movements, with NO subtitles, NO captions, NO written text, NO on-screen text, NO logos, NO graphics, and NO additional visual elements.

SCENE 1 — HOOK (0–1.5 seconds):
The influencer stands naturally beside the black air fryer on the kitchen counter. She quickly looks at the camera with a curious, friendly expression and gestures toward the air fryer, creating immediate visual interest. She then reaches naturally for the air fryer handle.

SCENE 2 — CONTEXT (1.5–3 seconds):
She opens the air fryer drawer smoothly and naturally. The camera briefly moves closer to reveal the silicone liner inside the air fryer with food being cooked inside it. The product must remain exactly identical to the reference image.

SCENE 3 — SOLUTION / PRODUCT FUNCTIONALITY (3–5.5 seconds):
The influencer carefully removes the silicone liner from inside the air fryer and holds it toward the camera. She gently flexes or bends the silicone liner with both hands to visually demonstrate its flexible and practical functionality. The movement should clearly show that the liner is reusable, flexible, and easy to handle, without using any text or spoken explanation.

SCENE 4 — CTA (5.5–8 seconds):
She places the complete set of silicone liners, with all the different sizes clearly visible, neatly arranged on the kitchen counter in front of her. She smiles naturally at the camera, blows a friendly kiss toward the viewer, and immediately points downward with one hand, clearly indicating the link or shopping button below the video. End with her finger pointing downward and a natural, inviting smile.

CAMERA STYLE:
Ultra-realistic social media product advertisement. Natural handheld camera movement with subtle smooth motion. Realistic lighting, realistic skin texture, natural facial expressions, authentic human gestures, modern cozy kitchen environment. Use close-up shots when showing the silicone liner functionality and product details. Maintain visual continuity throughout the entire 8-second video.

STRICT PRODUCT CONSISTENCY:
The product must remain 100% identical to the reference image throughout the entire video. Do not change the product's design, color, shape, proportions, texture, size, or number of pieces. Do not generate a different product. Do not add or remove product pieces. The final set displayed on the counter must accurately represent the silicone liners shown in the reference image.

FINAL REQUIREMENT:
EXACTLY 8 SECONDS TOTAL.
COMPLETELY SILENT.
NO AUDIO.
NO VOICE.
NO SPEECH.
NO MUSIC.
NO SOUND EFFECTS.
NO AMBIENT SOUND.
NO SUBTITLES.
NO CAPTIONS.
NO TEXT.
NO WRITTEN WORDS.
ONLY VISUAL ACTIONS AND NATURAL BODY MOVEMENTS.`
  },
  {
    id: 'p-curtain-rod',
    title: 'FLOW — UGC | COMERCIAL CORTINA',
    type: 'lifestyle',
    category: 'Cortina',
    videoUrl: 'https://drive.google.com/file/d/1kRQp9WXopFYlUGjhbA8EE9LrqPD5e4H7/preview',
    content: `### VEO 3 — ULTRA-REALISTIC UGC PRODUCT VIDEO — MOVEMENTS ONLY

Create a short, ultra-realistic UGC-style product video using the **exact product shown in the reference image**.

The female influencer must look **natural, humanized, authentic, and spontaneous**, with realistic body movements and natural facial expressions. She must interact with the product naturally, as if she were demonstrating it in her own home.

### IMPORTANT — PRODUCT PRESERVATION:

**Do not alter, redesign, replace, distort, or change the product in any way.**
The product must remain **exactly identical to the reference image**, preserving its original shape, color, texture, material, size, and all visible details.

### AUDIO AND TEXT RESTRICTIONS:

* **NO SPEECH**
* **NO VOICEOVER**
* **NO AUDIO**
* **NO MUSIC**
* **NO SOUND EFFECTS**
* **NO TEXT ON SCREEN**
* **NO SUBTITLES**
* **NO CAPTIONS**
* **NO WRITTEN WORDS**

The video must communicate the entire story **only through natural movements, gestures, facial expressions, and visual actions**.

### NARRATIVE — HOOK → CONTEXT → PROBLEM → SOLUTION → CTA

**HOOK:**
The influencer naturally grabs the curtain rod and looks at it with a subtle, confident expression, immediately drawing attention to the product. She holds it naturally with both hands and briefly shows it toward the camera.

**CONTEXT:**
She walks naturally toward the window while holding the curtain rod. She begins positioning it carefully above the window, demonstrating how practical and easy it is to use.

**PROBLEM:**
She briefly looks at the window and gestures naturally as if showing that the space needs a curtain and better finishing. Her expression subtly communicates that the window is incomplete without the curtain.

**SOLUTION:**
She takes the curtain and naturally places the curtain rings/grommets onto the rod, one by one, with realistic hand movements. She then adjusts the curtain carefully, slides it along the rod, and arranges the fabric naturally so it hangs beautifully and evenly. She gently smooths and organizes the curtain with her hands, creating a realistic before-and-after transformation.

**CTA:**
At the end, she stands naturally in front of the finished curtain, smiles at the camera, and makes a clear but natural **downward-pointing gesture with one hand**, indicating where the product link would be located. **Do not show any text, captions, subtitles, or visual link.** The CTA must be communicated **only through her gesture**.

### FINAL VISUAL STYLE:

The entire video should feel like a **real, authentic UGC product demonstration**, with natural human movements, realistic hand interactions, subtle facial expressions, smooth transitions, and believable physical interaction with the curtain and curtain rod.

**ONLY MOVEMENTS. NO SPEECH. NO AUDIO. NO TEXT. NO CAPTIONS. NO SUBTITLES.**`
  },
  {
    id: 'p-curtain-colors',
    title: 'FLOW — UGC | TROCA DE CORES CORTINA',
    type: 'lifestyle',
    category: 'Cortina',
    videoUrl: 'https://drive.google.com/file/d/1Pv-D9CqxYwx4AIERL_1JHFChhyDcfF5Q/preview',
    content: `**VEO 3 Prompt (English)**

Use the uploaded reference image as the **only reference** for the curtain and the influencer.

**Do not change the influencer in any way.** Keep the exact same face, body, hairstyle, makeup, clothing, accessories, pose style, room, lighting, camera angle, framing, window, and background throughout the entire video.

**Do not change the curtain model.** Keep the exact same fabric, texture, stitching, pleats, transparency, dimensions, fullness, folds, header, drape, and position. **Only the curtain color changes.** The color transformation must affect **100% of the curtain**, from top to bottom and edge to edge. No partial color changes, gradients, mixed colors, or untransformed sections.

### Scene 1

The curtain is **pink**. The influencer gently slides her hand across the curtain, smiles naturally, then snaps her fingers.

### Transition 1

At the exact moment of the finger snap, the **entire curtain instantly changes** from **pink to beige**. The complete curtain changes color simultaneously while preserving the exact same model, folds, and fabric.

### Scene 2

The influencer lightly opens and closes the beige curtain to show its movement, then snaps her fingers again.

### Transition 2

The **entire curtain instantly changes** from **beige to white**. Nothing else changes.

### Scene 3

The influencer gently smooths the white curtain with one hand, then snaps her fingers.

### Transition 3

The **entire curtain instantly changes** from **white to black**. The curtain remains identical in every detail except color.

### Scene 4

The influencer softly adjusts the black curtain, then snaps her fingers one final time.

### Transition 4

The **entire curtain instantly changes** from **black to gray**. The transformation covers the complete curtain from top to bottom without affecting the wall, window, room, or influencer.

### Ending

The influencer walks one step toward the camera, smiles naturally, and **points downward with her index finger** to indicate the purchase link. Hold the pointing pose for the final second.

### Requirements

* Ultra-realistic.
* Smooth, natural movements.
* Perfect finger-snap synchronized color transitions.
* The curtain color change must be **instant** and affect the **entire curtain at once**.
* No morphing, stretching, flickering, deformation, ghosting, or warping.
* Do not alter the curtain design or dimensions.
* Keep the same influencer, clothing, lighting, room, camera angle, and framing throughout.
* **No dialogue.**
* **No subtitles.**
* **No captions.**
* **No text on screen.**
* **No logos or watermarks.**`
  },
  {
    id: 'p-glasses-car',
    title: 'Óculos de Sol | Luxo no Carro',
    type: 'lifestyle',
    category: 'Óculos',
    videoUrl: 'https://drive.google.com/file/d/1yNDDTSbG5WqepSW4Y9Qa8r93oI75TM_6/preview',
    content: `> 9:16 mobile format, POV shot. A feminine medium-brown (morena) hand with realistic skin texture and elegant nude almond-shaped nails picks up **the exact same rimless rectangular sunglasses shown in the reference image**, preserving every detail: frameless rectangular lenses, gold metal hardware, black temples, identical proportions, lens tint, and design. **Do not change the sunglasses in any way.** The camera stays at eye level as the glasses are lifted from an aesthetic wooden car dashboard, revealing the lens tint against a bright sunny beach highway in the background. Natural summer daylight, ultra-realistic, luxury lifestyle, trending TikTok UGC style, smooth handheld movement. **At the end of the shot, the woman lowers the sunglasses slightly and extends her index finger, pointing downward toward the bottom center of the screen, clearly indicating where the product link/button appears.** High realism, cinematic lighting, premium smartphone commercial look.`
  }
];

export const GARIMPADOS: ProductItem[] = [
  {
    id: 'garimpo-2',
    title: 'Blaiser Feminino Alfaiataria',
    price: 'R$ 10,50',
    status: 'tendência dos últimos 7 dias para escalar',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop',
    video: 'https://drive.google.com/file/d/1A-Euc2SmgGtO56Av0_M8_FSvur3raO8j/preview',
    link: 'https://vt.tiktok.com/ZS9rT9kWm5WgB-5aLgW/',
    category: 'Moda Feminina',
    stats: {
      orders: 49,
      ctr: '14,4',
      creators: 16,
      cart: 552
    },
    commission: '10,50',
    ticket: 'baixo',
    style: 'ugc',
    hooks: [
      'eu estou chocado com o valor desse blaiser',
      'olha esse blaiser que achei aqui no tiktokshop',
      'esse rosa veste muito bem mais o preto e um clássico'
    ],
    hashtags: ['#mulheres', '#lookelegante', '#modafeminina', '#tiktokshop', '#alfaiatariafeminina']
  },
  {
    id: 'garimpo-3',
    title: 'Óculos de Sol',
    price: 'R$ 3,59',
    status: 'Tendência do produto (últimos 7 dias )',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop',
    video: 'https://drive.google.com/file/d/163xuBzfUvnZ5e76a8NMIF0W0sfmug3H8/preview',
    link: 'https://vt.tiktok.com/ZS9rTCnfArFUT-o1cPA/',
    category: 'Óculos',
    stats: {
      orders: 37,
      ctr: '3,6',
      creators: 301,
      cart: 168
    },
    commission: '3,59',
    ticket: 'baixo',
    style: 'ugc',
    hooks: [
      'com esse óculos fiquei parecendo modelo de capa de revista',
      'gente pausa esse óculos pode mudar seu look em 3 segundos',
      'colocou esse óculos automáticamente você sobe de nível'
    ],
    hashtags: ['#mulheres', '#lookelegante', '#oculosfeminino', '#estilofeminino', '#acessorios', '#tiktokshop']
  },
  {
    id: 'garimpo-4',
    title: 'Conjunto Lilás Alfaiataria',
    price: 'R$ 5,60',
    status: 'Tendência do produto (últimos 7 dias )',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop',
    video: 'https://drive.google.com/file/d/1-cmur1zUUQ0jDIL_COypojtWjrCd4EH-/preview',
    link: 'https://vt.tiktok.com/ZS9rt7aAvFu1J-hKt4m/',
    category: 'Conjuntos',
    stats: {
      orders: 25,
      ctr: '5,9',
      creators: 324,
      cart: 244
    },
    commission: '5,60',
    ticket: 'baixo',
    style: 'ugc',
    hooks: [
      'esse conjunto lilás é a definição de elegância',
      'finalmente achei um conjunto que veste bem e é barato',
      'pode parar tudo e olhar o caimento desse conjunto'
    ],
    hashtags: ['#mulheres', '#lookelegante', '#lookdodia', '#estilofeminino', '#tiktokshop']
  },
  {
    id: 'garimpo-5',
    title: 'Camiseta Personalizada',
    price: 'R$ 6,29',
    status: 'Produto para escalar - Tendência do produto (últimos 7 dias)',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop',
    video: 'https://drive.google.com/file/d/1YTuI2oH-g3NxxxrAnAlSbc6CBtemq38p/preview',
    link: 'https://vt.tiktok.com/ZS9hfFKpsU5Ce-g8keS/',
    category: 'Presentes',
    stats: {
      orders: 550,
      ctr: '3,3',
      creators: 207,
      cart: 4700
    },
    commission: '6,29',
    ticket: 'baixo',
    style: 'provador',
    hashtags: ['#presentediadospais', '#camisetapersonslizada', '#ideiadepresente', '#tiktokshop88']
  }
];
