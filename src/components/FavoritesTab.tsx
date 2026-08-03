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
    'Conjuntos': { icon: Sparkles, color: 'text-purple-600', bg: 'bg-purple-50/50', accent: 'bg-purple-600' },
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
    <div className="space-y-12 pb-20">
      {/* Header Section */}
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-rose-500 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-500/70">
                Your Selection
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">
              Sua <span className="text-rose-500">Curadoria</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
              Acesso rápido aos seus comandos e roteiros estratégicos salvos para produção imediata.
            </p>
          </div>
          <div className="px-6 py-4 bg-white/40 backdrop-blur-md border border-slate-200/40 rounded-3xl shadow-sm hidden lg:flex items-center gap-4">
            <div className="p-2.5 bg-rose-50 rounded-xl">
              <Heart size={20} className="text-rose-500" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Favoritos</span>
              <span className="text-2xl font-black text-slate-900 leading-none">{favoritePrompts.length + favoriteNarratives.length}</span>
            </div>
          </div>
        </div>
      </div>

      {!hasFavorites ? (
        <div className="py-32 text-center space-y-6 bg-slate-50/40 backdrop-blur-md rounded-[40px] border border-dashed border-slate-200">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto text-rose-200 shadow-sm border border-slate-100">
            <Heart size={40} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-slate-900">Sua lista está vazia</h3>
            <p className="text-slate-500 text-sm font-medium max-w-xs mx-auto">Favorite prompts e roteiros para acessá-los rapidamente aqui.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-24">
          {/* Favorited Narratives */}
          {favoriteNarratives.length > 0 && (
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Brain className="text-indigo-600" size={20} />
                </div>
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest">Roteiros Salvos</h3>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {favoriteNarratives.map((item) => {
                  const cat = narrativeCategories[item.category as keyof typeof narrativeCategories];
                  return (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group relative bg-white rounded-[40px] overflow-hidden border border-slate-100/60 flex flex-col md:flex-row card-shadow hover:card-shadow-hover transition-all duration-700"
                    >
                      {item.videoUrl && (
                        <div className="relative aspect-[9/16] md:w-[280px] bg-slate-950 overflow-hidden shrink-0">
                          <iframe
                            src={item.videoUrl}
                            className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-[1.02]"
                            allow="autoplay"
                            title={item.title}
                          ></iframe>
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                      )}
                      <div className="p-10 flex flex-col flex-grow space-y-10">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                          <div className="space-y-3">
                            <span className={`inline-flex px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${cat.color} ${cat.bg} border border-current/10`}>
                              {cat.label}
                            </span>
                            <h4 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                          </div>
                          <div className="flex items-center gap-2.5 shrink-0">
                            <button onClick={() => toggleFavorite(item.id)} className="p-2.5 bg-rose-50 text-rose-500 rounded-xl border border-rose-100 shadow-sm active:scale-90 transition-all"><Heart size={18} fill="currentColor" /></button>
                            <button onClick={() => copyToClipboard(item.description, item.id)} className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all shadow-sm active:scale-95 group/copy ${copiedId === item.id ? 'bg-emerald-500 text-white shadow-emerald-100' : 'bg-slate-900 text-white hover:bg-indigo-600'}`}>
                              {copiedId === item.id ? <><Check size={14} /> Copiado</> : <><Copy size={14} /> Copiar</>}
                            </button>
                          </div>
                        </div>
                        <div className="relative flex-grow bg-slate-50/50 rounded-3xl p-8 border border-slate-100 group-hover:border-indigo-100/40 transition-colors">
                          <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed italic line-clamp-4 group-hover:line-clamp-none transition-all duration-500">"{item.description}"</p>
                        </div>
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
                <div className="p-2 bg-amber-50 rounded-lg">
                  <Sparkles className="text-amber-500" size={20} />
                </div>
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest">Prompts Salvos</h3>
              </div>
              <div className="grid grid-cols-1 gap-12">
                {favoritePrompts.map((prompt) => {
                  const config = categoryConfig[prompt.category as keyof typeof categoryConfig] || categoryConfig['Universal'];
                  return (
                    <motion.div 
                      key={prompt.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group relative bg-white rounded-[40px] overflow-hidden border border-slate-100/60 flex flex-col md:flex-row card-shadow hover:card-shadow-hover transition-all duration-700"
                    >
                      {prompt.videoUrl && (
                        <div className="relative aspect-[9/16] md:w-[280px] bg-slate-950 overflow-hidden shrink-0">
                          <iframe
                            src={prompt.videoUrl}
                            className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-[1.02]"
                            allow="autoplay"
                            title={prompt.title}
                          ></iframe>
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                      )}
                      <div className="p-10 flex flex-col flex-grow space-y-10">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${config.color} ${config.bg} border border-current/10`}>{prompt.category || 'Geral'}</span>
                              <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[9px] font-black text-slate-400 uppercase tracking-widest">{prompt.type}</span>
                            </div>
                            <h4 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">{prompt.title}</h4>
                          </div>
                          <div className="flex items-center gap-2.5 shrink-0">
                            <button onClick={() => toggleFavorite(prompt.id)} className="p-2.5 bg-rose-50 text-rose-500 rounded-xl border border-rose-100 shadow-sm active:scale-90 transition-all"><Heart size={18} fill="currentColor" /></button>
                            <button onClick={() => copyToClipboard(prompt.content, prompt.id)} className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all shadow-sm active:scale-95 group/copy ${copiedId === prompt.id ? 'bg-emerald-500 text-white shadow-emerald-100' : 'bg-slate-900 text-white hover:bg-amber-600'}`}>
                              {copiedId === prompt.id ? <><Check size={14} /> Copiado</> : <><Copy size={14} /> Copiar</>}
                            </button>
                          </div>
                        </div>
                        <div className="relative flex-grow bg-slate-50/50 rounded-3xl p-8 border border-slate-100 group-hover:border-amber-100/40 transition-colors">
                          <div className="prose prose-slate prose-sm max-w-none text-slate-600 font-semibold italic text-gradient line-clamp-6 group-hover:line-clamp-none transition-all duration-700">
                            <ReactMarkdown>{prompt.content}</ReactMarkdown>
                          </div>
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
