import { VIDEO_PROMPTS } from '../data';
import { Sparkles, Copy, Check, Heart, Globe, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { useToast } from '../hooks/useToast';

interface PromptsTabProps {
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export default function PromptsTab({ toggleFavorite, isFavorite }: PromptsTabProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const { showToast } = useToast();

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast('Prompt copiado com sucesso!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const dynamicCategories = useMemo(() => ['Todos', ...new Set(VIDEO_PROMPTS.map(p => p.category).filter(Boolean) as string[])], []);

  const categoryConfig = {
    'Universal': { icon: Globe, color: 'text-emerald-600', bg: 'bg-emerald-50/50', accent: 'bg-emerald-600' },
    'Blazer': { icon: Heart, color: 'text-indigo-600', bg: 'bg-indigo-50/50', accent: 'bg-indigo-600' },
    'Vestido': { icon: Sparkles, color: 'text-rose-600', bg: 'bg-rose-50/50', accent: 'bg-rose-600' },
    'Óculos': { icon: Sparkles, color: 'text-amber-600', bg: 'bg-amber-50/50', accent: 'bg-amber-600' },
    'Conjuntos': { icon: Sparkles, color: 'text-purple-600', bg: 'bg-purple-50/50', accent: 'bg-purple-600' },
    'Blusas': { icon: Sparkles, color: 'text-sky-600', bg: 'bg-sky-50/50', accent: 'bg-sky-600' },
    'Calçados': { icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50/50', accent: 'bg-rose-600' },
  } as const;

  const filteredPrompts = useMemo(() => {
    return VIDEO_PROMPTS.filter(p => {
      const matchesCategory = selectedCategory === 'Todos' ? true : p.category === selectedCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[2px] bg-indigo-600 rounded-full" />
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-indigo-500/80">
              Inspiração Visual
            </span>
          </div>
          <div className="flex items-end gap-4">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-none">Galeria de Prompts</h2>
            <div className="mb-1 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-2xl text-[13px] font-black border border-indigo-100/50 shadow-sm">
              {filteredPrompts.length}
            </div>
          </div>
          <p className="text-slate-500 text-base max-w-lg font-medium leading-relaxed">
            Roteiros técnicos e referências visuais projetadas para maximizar o alcance das suas produções.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search size={20} className="text-slate-400 group-focus-within:text-indigo-600 transition-colors duration-300" />
          </div>
          <input
            type="text"
            placeholder="O que você quer criar hoje?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-16 pr-8 py-6 bg-white border border-slate-100 rounded-[32px] text-base font-semibold focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.02)] placeholder:text-slate-300"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5 p-2.5 bg-slate-100/40 backdrop-blur-md rounded-[32px] border border-slate-200/40">
        {dynamicCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3.5 rounded-[22px] text-[11px] font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-2 relative overflow-hidden group/tab ${
              selectedCategory === cat
                ? 'text-white shadow-xl shadow-indigo-100'
                : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
            }`}
          >
            {selectedCategory === cat && (
              <motion.div
                layoutId="activePromptTab"
                className="absolute inset-0 bg-indigo-600"
                transition={{ type: 'spring', bounce: 0.15, duration: 0.7 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
            <span className={`relative z-10 px-2 py-0.5 rounded-lg text-[9px] font-black transition-colors ${selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-400'}`}>
              {cat === 'Todos' ? VIDEO_PROMPTS.length : VIDEO_PROMPTS.filter(p => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredPrompts.length > 0 ? (
            filteredPrompts.map((prompt, index) => {
              const config = categoryConfig[prompt.category as keyof typeof categoryConfig] || categoryConfig['Universal'];
              
              return (
                <motion.div 
                  key={prompt.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group relative bg-white rounded-[48px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)] transition-all duration-700"
                >
                  {/* Video Section */}
                  {prompt.videoUrl && (
                    <div className="relative aspect-[9/16] md:w-[320px] bg-slate-950 overflow-hidden shrink-0">
                      <iframe
                        src={prompt.videoUrl}
                        className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-1000 scale-[1.02] group-hover:scale-100"
                        allow="autoplay"
                        title={prompt.title}
                      ></iframe>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                      <div className="absolute top-8 left-8 pointer-events-none">
                        <div className="glass px-5 py-2.5 rounded-2xl border border-white/40 flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                          <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Estética Real</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="p-12 flex flex-col flex-grow bg-gradient-to-br from-white to-slate-50/50">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-10">
                      <div className="space-y-4">
                        <h4 className="text-3xl font-black text-slate-900 leading-[1.1] group-hover:text-indigo-600 transition-colors duration-500">
                          {prompt.title}
                        </h4>
                        <div className="flex items-center gap-3">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${config.color} ${config.bg} border border-current opacity-70`}>
                            {prompt.category || 'Geral'}
                          </span>
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            {prompt.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 shrink-0">
                        <button
                          onClick={() => {
                            const currentlyFavorite = isFavorite(prompt.id);
                            toggleFavorite(prompt.id);
                            showToast(!currentlyFavorite ? 'Adicionado aos favoritos' : 'Removido dos favoritos', currentlyFavorite ? 'info' : 'success');
                          }}
                          className={`p-3.5 rounded-2xl border transition-all duration-500 active:scale-90 group/fav ${
                            isFavorite(prompt.id)
                              ? 'bg-rose-50 border-rose-100 text-rose-500 shadow-sm'
                              : 'bg-white border-slate-100 text-slate-300 hover:text-rose-400 hover:border-rose-100'
                          }`}
                        >
                          <Heart size={22} fill={isFavorite(prompt.id) ? "currentColor" : "none"} className="group-hover/fav:scale-110 transition-transform" />
                        </button>
                        <button 
                          onClick={() => copyToClipboard(prompt.content, prompt.id)}
                          className={`flex items-center gap-3 px-7 py-4 rounded-2xl font-black text-[12px] transition-all duration-500 shadow-sm active:scale-95 shrink-0 uppercase tracking-widest group/copy ${
                            copiedId === prompt.id 
                            ? 'bg-emerald-500 text-white shadow-emerald-200' 
                            : 'bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-100'
                          }`}
                        >
                          {copiedId === prompt.id ? (
                            <><Check size={16} strokeWidth={3} /> Copiado</>
                          ) : (
                            <><Copy size={16} strokeWidth={3} className="group-hover/copy:scale-110 transition-transform" /> Copiar Prompt</>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-grow bg-white/50 backdrop-blur-sm rounded-[32px] p-10 border border-slate-100 group-hover:border-indigo-100/50 transition-all duration-500">
                      <div className="absolute -left-[2px] top-10 w-[4px] h-12 bg-indigo-200 rounded-full group-hover:bg-indigo-400 transition-colors" />
                      <div className="markdown-content prose prose-slate prose-sm max-w-none text-slate-600 leading-relaxed font-semibold italic text-gradient">
                        <ReactMarkdown>
                          {prompt.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="py-32 text-center space-y-6 bg-slate-50/50 rounded-[48px] border border-dashed border-slate-200">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto text-slate-300 shadow-sm">
                <Search size={40} />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-slate-900">Busca vazia</h3>
                <p className="text-slate-500 text-base font-medium max-w-xs mx-auto">Tente usar termos mais genéricos ou mude a categoria de busca.</p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Pro Tip Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-slate-900 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[80px] -mr-32 -mt-32 rounded-full group-hover:bg-indigo-500/30 transition-colors duration-700" />
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
            <Sparkles size={32} className="text-indigo-400" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-black text-2xl mb-2 tracking-tight">Dica de Edição Dinâmica</h4>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Para um efeito profissional, sincronize as transições <span className="text-white font-bold">POV</span> com batidas fortes da trilha sonora. O movimento da mão cobrindo a lente deve durar no máximo 0.3 segundos para manter o dinamismo.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
