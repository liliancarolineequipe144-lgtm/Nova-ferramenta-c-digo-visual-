import { VIDEO_PROMPTS, NARRATIVES, GARIMPADOS } from '../data';
import { Sparkles, Copy, Check, Heart, Globe, Search, ChevronDown, Filter, Layers } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { useToast } from '../hooks/useToast';
import { LESSONS } from './VideoLessonsTab';

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

  const dynamicCategories = useMemo(() => {
    const categories = [...new Set(VIDEO_PROMPTS.map(p => p.category).filter(Boolean) as string[])];
    return ['Todos', ...categories.sort((a, b) => a.localeCompare(b))];
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const totalMaterials = VIDEO_PROMPTS.length + NARRATIVES.length + GARIMPADOS.length + LESSONS.length;

  const categoryConfig = {
    'Universal': { icon: Globe, color: 'text-emerald-600', bg: 'bg-emerald-50/50', accent: 'bg-emerald-600' },
    'Blazer': { icon: Heart, color: 'text-indigo-600', bg: 'bg-indigo-50/50', accent: 'bg-indigo-600' },
    'Vestido': { icon: Sparkles, color: 'text-rose-600', bg: 'bg-rose-50/50', accent: 'bg-rose-600' },
    'Óculos': { icon: Sparkles, color: 'text-amber-600', bg: 'bg-amber-50/50', accent: 'bg-amber-600' },
    'Conjuntos': { icon: Sparkles, color: 'text-purple-600', bg: 'bg-purple-50/50', accent: 'bg-purple-600' },
    'Blusas': { icon: Sparkles, color: 'text-sky-600', bg: 'bg-sky-50/50', accent: 'bg-sky-600' },
    'Calçados': { icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50/50', accent: 'bg-rose-600' },
    'Bolsas': { icon: Sparkles, color: 'text-amber-600', bg: 'bg-amber-50/50', accent: 'bg-amber-600' },
    'Moda': { icon: Globe, color: 'text-blue-600', bg: 'bg-blue-50/50', accent: 'bg-blue-600' },
    'Roupas de Cama': { icon: Sparkles, color: 'text-emerald-600', bg: 'bg-emerald-50/50', accent: 'bg-emerald-600' },
    'Cozinha': { icon: Sparkles, color: 'text-orange-600', bg: 'bg-orange-50/50', accent: 'bg-orange-600' },
    'Cortina': { icon: Sparkles, color: 'text-violet-600', bg: 'bg-violet-50/50', accent: 'bg-violet-600' },
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
      {/* Header Section */}
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-600/70">
                Visual Library
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">
              Comandos de <br className="hidden md:block" /> <span className="text-gradient-indigo">Alta Estética</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
              Prompts otimizados para gerar imagens e vídeos ultra-realistas que prendem a atenção.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="px-4 md:px-6 py-3 md:py-4 bg-white/40 backdrop-blur-md border border-slate-200/40 rounded-2xl md:rounded-3xl shadow-sm flex items-center gap-3 md:gap-4">
              <div className="p-2 md:p-2.5 bg-amber-50 rounded-xl">
                <Sparkles size={18} className="text-amber-600 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Prompts</span>
                <span className="text-xl md:text-2xl font-black text-slate-900 leading-none">{VIDEO_PROMPTS.length}</span>
              </div>
            </div>
            <div className="px-4 md:px-6 py-3 md:py-4 bg-white/40 backdrop-blur-md border border-slate-200/40 rounded-2xl md:rounded-3xl shadow-sm flex items-center gap-3 md:gap-4">
              <div className="p-2 md:p-2.5 bg-indigo-50 rounded-xl">
                <Layers size={18} className="text-indigo-600 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Total Geral</span>
                <span className="text-xl md:text-2xl font-black text-slate-900 leading-none">{totalMaterials}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search Container */}
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-grow group">
              <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input
                type="text"
                placeholder="Buscar prompt ou categoria..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-8 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-indigo-50/50 focus:border-indigo-600/20 transition-all shadow-sm placeholder:text-slate-300"
              />
            </div>
            {/* Category Dropdown */}
            <div className="relative space-y-2">
              <div className="flex items-center gap-2 px-1">
                <Filter size={10} className="text-slate-400" />
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Filtrar Categoria</span>
              </div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between gap-3 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-900 shadow-sm hover:border-indigo-200 transition-all min-w-[220px]"
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {selectedCategory}
                </span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} className="text-slate-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsDropdownOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-64 bg-white border border-slate-100 rounded-[24px] shadow-2xl z-50 overflow-hidden"
                    >
                      <div className="p-2 max-h-[320px] overflow-y-auto no-scrollbar">
                        {dynamicCategories.map((cat) => {
                          const isActive = selectedCategory === cat;
                          return (
                            <button
                              key={cat}
                              onClick={() => {
                                setSelectedCategory(cat);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                isActive 
                                ? 'bg-indigo-50 text-indigo-600' 
                                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              {cat}
                              {isActive && <Check size={12} strokeWidth={3} />}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Area */}
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
                  className="group relative bg-white rounded-[40px] overflow-hidden border border-slate-100/60 flex flex-col md:flex-row card-shadow hover:card-shadow-hover transition-all duration-700"
                >
                  {/* Video Section */}
                  {prompt.videoUrl && (
                    <div className="relative aspect-[9/16] md:w-[320px] bg-slate-950 overflow-hidden shrink-0 group/video">
                      <iframe
                        src={prompt.videoUrl}
                        className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-[1.02]"
                        allow="autoplay"
                        title={prompt.title}
                      ></iframe>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-6 left-6">
                        <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2">
                          <div className="w-1 h-1 bg-amber-400 rounded-full animate-pulse" />
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Estética Real</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="p-8 md:p-12 flex flex-col flex-grow space-y-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${config.color} ${config.bg} border border-current/10`}>
                            {prompt.category || 'Geral'}
                          </span>
                          <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            {prompt.type}
                          </span>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                          {prompt.title}
                        </h4>
                      </div>
                      
                      <div className="flex items-center gap-2.5 shrink-0">
                        <button
                          onClick={() => {
                            const currentlyFavorite = isFavorite(prompt.id);
                            toggleFavorite(prompt.id);
                            showToast(!currentlyFavorite ? 'Adicionado aos favoritos' : 'Removido dos favoritos', currentlyFavorite ? 'info' : 'success');
                          }}
                          className={`p-2.5 rounded-xl border transition-all duration-300 active:scale-90 group/fav ${
                            isFavorite(prompt.id)
                              ? 'bg-rose-50 border-rose-100 text-rose-500 shadow-sm'
                              : 'bg-slate-50 border-slate-100 text-slate-400 hover:text-rose-500 hover:bg-white'
                          }`}
                        >
                          <Heart size={18} fill={isFavorite(prompt.id) ? "currentColor" : "none"} />
                        </button>
                        <button 
                          onClick={() => copyToClipboard(prompt.content, prompt.id)}
                          className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-[11px] transition-all duration-300 shadow-sm active:scale-95 shrink-0 uppercase tracking-widest group/copy ${
                            copiedId === prompt.id 
                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-100' 
                            : 'bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-100'
                          }`}
                        >
                          {copiedId === prompt.id ? <><Check size={14} /> Copiado</> : <><Copy size={14} /> Copiar Prompt</>}
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-grow bg-slate-50/50 rounded-3xl p-8 md:p-10 border border-slate-100 group-hover:border-indigo-100/40 transition-colors overflow-hidden">
                      <div className="absolute -top-4 -right-4 opacity-[0.02] rotate-12">
                        <Globe size={160} />
                      </div>
                      <div className="prose prose-slate prose-sm max-w-none text-slate-600 leading-relaxed font-semibold italic text-gradient line-clamp-10 group-hover:line-clamp-none transition-all duration-700">
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
            <div className="py-32 text-center space-y-4 bg-slate-50/40 rounded-[40px] border border-dashed border-slate-200">
              <Search size={32} className="mx-auto text-slate-200" />
              <p className="text-sm font-semibold text-slate-400">Nenhum prompt encontrado.</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Pro Tip Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 rounded-[40px]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative p-10 flex flex-col md:flex-row items-center gap-10">
          <div className="w-20 h-20 bg-white/5 backdrop-blur-xl rounded-[28px] flex items-center justify-center border border-white/10 shrink-0 shadow-2xl">
            <Sparkles size={36} className="text-indigo-400" />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-2xl font-black text-white tracking-tight">Master Tip: Edição Dinâmica</h4>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl font-medium">
              Sincronize as transições <span className="text-indigo-400 font-bold">POV</span> com batidas fortes da trilha. O movimento da mão cobrindo a lente deve durar no máximo <span className="text-white font-bold">0.3 segundos</span> para um acabamento profissional de alto impacto.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
