import { VIDEO_PROMPTS, NARRATIVES } from '../data';
import { Heart, Copy, Check, Sparkles, Brain, Zap, Target, Users, MessageCircle, Globe, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';

interface FavoritesTabProps {
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export default function FavoritesTab({ toggleFavorite, isFavorite }: FavoritesTabProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const favoritePrompts = VIDEO_PROMPTS.filter(p => isFavorite(p.id));
  const favoriteNarratives = NARRATIVES.filter(n => isFavorite(n.id));

  const categoryConfig = {
    'Universal': { icon: Globe, color: 'text-emerald-600', bg: 'bg-emerald-50/50', accent: 'bg-emerald-600' },
    'Blazer': { icon: Heart, color: 'text-indigo-600', bg: 'bg-indigo-50/50', accent: 'bg-indigo-600' },
    'Vestido': { icon: Sparkles, color: 'text-rose-600', bg: 'bg-rose-50/50', accent: 'bg-rose-600' },
    'Óculos': { icon: Sparkles, color: 'text-amber-600', bg: 'bg-amber-50/50', accent: 'bg-amber-600' },
    'Blusas': { icon: Sparkles, color: 'text-sky-600', bg: 'bg-sky-50/50', accent: 'bg-sky-600' },
    'Calçados': { icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50/50', accent: 'bg-rose-600' },
  } as const;

  const narrativeCategories = {
    'gancho': { label: 'Gancho', icon: Zap, color: 'text-rose-600', bg: 'bg-rose-50', accent: 'bg-rose-600' },
    'contexto': { label: 'Contexto', icon: Brain, color: 'text-indigo-600', bg: 'bg-indigo-50', accent: 'bg-indigo-600' },
    'solucao': { label: 'Solução', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50', accent: 'bg-emerald-600' },
    'cta': { label: 'CTA', icon: MessageCircle, color: 'text-blue-600', bg: 'bg-blue-50', accent: 'bg-blue-600' },
  };

  const hasFavorites = favoritePrompts.length > 0 || favoriteNarratives.length > 0;

  return (
    <div className="space-y-16 pb-20">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-[2px] bg-rose-500 rounded-full" />
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-rose-400">
            Sua Seleção
          </span>
        </div>
        <div className="flex items-end gap-3">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Favoritos</h2>
          <span className="mb-1 px-3 py-1 bg-rose-50 text-rose-500 rounded-full text-xs font-bold border border-rose-100 shadow-sm">
            {favoritePrompts.length + favoriteNarratives.length}
          </span>
        </div>
        <p className="text-slate-500 text-sm max-w-md font-medium leading-relaxed">
          Sua biblioteca personalizada de prompts e narrativas estratégicas salvos.
        </p>
      </div>

      {!hasFavorites ? (
        <div className="py-20 text-center space-y-6 bg-white/40 backdrop-blur-xl rounded-[40px] border border-white/60 shadow-sm">
          <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-200">
            <Heart size={40} />
          </div>
          <div className="space-y-2">
            <p className="text-slate-600 font-black uppercase tracking-widest text-sm">Sua lista está vazia</p>
            <p className="text-slate-400 text-sm font-medium">Toque no ícone de coração nos prompts para salvá-los aqui.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-20">
          {/* Favorited Narratives */}
          {favoriteNarratives.length > 0 && (
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <Brain className="text-indigo-600" size={24} />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-wider">Narrativas Salvas</h3>
                <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-black border border-indigo-100">
                  {favoriteNarratives.length}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {favoriteNarratives.map((item) => {
                  const cat = narrativeCategories[item.category as keyof typeof narrativeCategories];
                  return (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group relative bg-white rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500"
                    >
                      {item.videoUrl && (
                        <div className="relative aspect-[9/16] md:w-[240px] bg-slate-900 overflow-hidden shrink-0">
                          <iframe
                            src={item.videoUrl}
                            className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-1000"
                            allow="autoplay"
                            title={item.title}
                          ></iframe>
                        </div>
                      )}
                      <div className="p-8 flex-grow space-y-6">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                            <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${cat.color} ${cat.bg} border border-current`}>
                              {cat.label}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => toggleFavorite(item.id)} className="p-2 bg-rose-50 text-rose-500 rounded-xl border border-rose-100"><Heart size={16} fill="currentColor" /></button>
                            <button onClick={() => copyToClipboard(item.description, item.id)} className={`p-2 rounded-xl transition-all ${copiedId === item.id ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}`}><Copy size={16} /></button>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 font-medium italic">"{item.description}"</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Favorited Prompts */}
          {favoritePrompts.length > 0 && (
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <Sparkles className="text-amber-500" size={24} />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-wider">Prompts Salvos</h3>
                <span className="px-2.5 py-0.5 bg-amber-50 text-amber-600 rounded-lg text-[10px] font-black border border-amber-100">
                  {favoritePrompts.length}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-12">
                {favoritePrompts.map((prompt) => {
                  const config = categoryConfig[prompt.category as keyof typeof categoryConfig] || categoryConfig['Universal'];
                  return (
                    <motion.div 
                      key={prompt.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group relative bg-white rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500"
                    >
                      {prompt.videoUrl && (
                        <div className="relative aspect-[9/16] md:w-[240px] bg-slate-900 overflow-hidden shrink-0">
                          <iframe
                            src={prompt.videoUrl}
                            className="absolute inset-0 w-full h-full opacity-80"
                            allow="autoplay"
                            title={prompt.title}
                          ></iframe>
                        </div>
                      )}
                      <div className="p-8 flex-grow">
                        <div className="flex justify-between items-start gap-4 mb-6">
                          <div>
                            <h4 className="text-xl font-black text-slate-900 mb-2">{prompt.title}</h4>
                            <div className="flex gap-2">
                              <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${config.color} ${config.bg} border border-current`}>{prompt.category || 'Geral'}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => toggleFavorite(prompt.id)} className="p-2 bg-rose-50 text-rose-500 rounded-xl border border-rose-100"><Heart size={16} fill="currentColor" /></button>
                            <button onClick={() => copyToClipboard(prompt.content, prompt.id)} className={`p-2 rounded-xl transition-all ${copiedId === prompt.id ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}`}><Copy size={16} /></button>
                          </div>
                        </div>
                        <div className="prose prose-slate prose-sm max-w-none text-slate-600 font-medium">
                          <ReactMarkdown>{prompt.content}</ReactMarkdown>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
