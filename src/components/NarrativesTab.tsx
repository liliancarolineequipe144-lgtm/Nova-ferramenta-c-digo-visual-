import { Brain, PlayCircle, Copy, Check, Target, Zap, MessageCircle, Heart, Search, ChevronDown, Filter, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NARRATIVES, VIDEO_PROMPTS, GARIMPADOS, LESSONS } from '../data';
import { useState, useMemo } from 'react';
import { useToast } from '../hooks/useToast';

type NarrativeCategory = 'gancho' | 'contexto' | 'solucao' | 'cta';

interface NarrativesTabProps {
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export default function NarrativesTab({ toggleFavorite, isFavorite }: NarrativesTabProps) {
  const [activeCategory, setActiveCategory] = useState<NarrativeCategory>('gancho');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { showToast } = useToast();

  const totalMaterials = VIDEO_PROMPTS.length + NARRATIVES.length + GARIMPADOS.length + LESSONS.length;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast('Texto copiado com sucesso!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = [
    { id: 'gancho', label: 'Gancho', icon: Zap, color: 'text-rose-600', bg: 'bg-rose-50', accent: 'bg-rose-600' },
    { id: 'contexto', label: 'Contexto', icon: Brain, color: 'text-indigo-600', bg: 'bg-indigo-50', accent: 'bg-indigo-600' },
    { id: 'solucao', label: 'Solução', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50', accent: 'bg-emerald-600' },
    { id: 'cta', label: 'CTA', icon: MessageCircle, color: 'text-blue-600', bg: 'bg-blue-50', accent: 'bg-blue-600' },
  ] as const;

  const sortedCategories = useMemo(() => {
    return [...categories].sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const filteredItems = useMemo(() => {
    return NARRATIVES.filter(item => {
      const matchesCategory = item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-12 pb-20">
      {/* Header Section */}
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-indigo-600 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600/70">
                Performance Lab
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">
              Narrativas de <br className="hidden md:block" /> <span className="text-indigo-600">Alta Conversão</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
              Estruturas validadas para transformar visualizações em desejo de compra imediata.
            </p>
          </div>
          <div className="px-4 md:px-6 py-3 md:py-4 bg-white/40 backdrop-blur-md border border-slate-200/40 rounded-2xl md:rounded-3xl shadow-sm flex items-center gap-3 md:gap-4">
            <div className="p-2 md:p-2.5 bg-indigo-50 rounded-xl">
              <Layers size={18} className="text-indigo-600 md:w-5 md:h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Total de Materiais</span>
              <span className="text-xl md:text-2xl font-black text-slate-900 leading-none">{totalMaterials}</span>
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
                placeholder="Buscar narrativa estratégica..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-8 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-indigo-50/50 focus:border-indigo-600/20 transition-all shadow-sm placeholder:text-slate-300"
              />
            </div>
            
            {/* Category Dropdown */}
            <div className="relative space-y-2">
              <div className="flex items-center gap-2 px-1">
                <Filter size={10} className="text-slate-400" />
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Filtrar Etapa</span>
              </div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between gap-3 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-900 shadow-sm hover:border-indigo-200 transition-all min-w-[220px]"
              >
                <span className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${categories.find(c => c.id === activeCategory)?.accent || 'bg-indigo-500'}`} />
                  {categories.find(c => c.id === activeCategory)?.label}
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
                        {sortedCategories.map((cat) => {
                          const isActive = activeCategory === cat.id;
                          const Icon = cat.icon;
                          return (
                            <button
                              key={cat.id}
                              onClick={() => {
                                setActiveCategory(cat.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                isActive 
                                ? 'bg-indigo-50 text-indigo-600' 
                                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Icon size={14} className={isActive ? cat.color : 'opacity-50'} />
                                {cat.label}
                              </div>
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

      {/* Content Area */}
      <div className="grid grid-cols-1 gap-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${searchQuery}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-white rounded-[32px] overflow-hidden border border-slate-100/60 flex flex-col md:flex-row card-shadow hover:card-shadow-hover transition-all duration-500"
              >
                {/* Reference Video */}
                {item.videoUrl && (
                  <div className="relative aspect-[9/16] md:w-[280px] bg-slate-950 overflow-hidden shrink-0 group/video">
                    <iframe
                      src={item.videoUrl}
                      className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-[1.02]"
                      allow="autoplay"
                      title={item.title}
                    ></iframe>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-5 left-5">
                      <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2">
                        <div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse" />
                        <span className="text-[9px] font-black text-white uppercase tracking-widest">Referência</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-8 md:p-10 flex-grow flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div className="space-y-2">
                        <div className={`inline-flex px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${categories.find(c => c.id === item.category)?.color} ${categories.find(c => c.id === item.category)?.bg} border border-current/10`}>
                          {categories.find(c => c.id === item.category)?.label}
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            const currentlyFavorite = isFavorite(item.id);
                            toggleFavorite(item.id);
                            showToast(!currentlyFavorite ? 'Adicionado aos favoritos' : 'Removido dos favoritos', currentlyFavorite ? 'info' : 'success');
                          }}
                          className={`p-2.5 rounded-xl border transition-all duration-300 active:scale-90 ${
                            isFavorite(item.id)
                              ? 'bg-rose-50 border-rose-100 text-rose-500 shadow-sm'
                              : 'bg-slate-50 border-slate-100 text-slate-400 hover:text-rose-500 hover:bg-white'
                          }`}
                        >
                          <Heart size={16} fill={isFavorite(item.id) ? "currentColor" : "none"} />
                        </button>
                        <button
                          onClick={() => copyToClipboard(item.description, item.id)}
                          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 shadow-sm active:scale-95 ${
                            copiedId === item.id
                              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-100'
                              : 'bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-100'
                          }`}
                        >
                          {copiedId === item.id ? <><Check size={14} /> Copiado</> : <><Copy size={14} /> Copiar</>}
                        </button>
                      </div>
                    </div>

                    <div className="relative bg-slate-50/50 rounded-2xl p-6 md:p-8 border border-slate-100/80 group-hover:border-indigo-100/40 transition-colors">
                      <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                        <MessageCircle size={48} />
                      </div>
                      <p className="relative z-10 text-base md:text-lg text-slate-600 leading-relaxed font-semibold italic">
                        "{item.description}"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100/60">
                    <div className="flex items-center gap-3">
                      <div className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-[9px] font-black uppercase tracking-widest">
                        Validado
                      </div>
                    </div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      ID: {item.id}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredItems.length === 0 && (
              <div className="py-24 text-center space-y-4 bg-slate-50/40 rounded-[32px] border border-dashed border-slate-200">
                <Search size={32} className="mx-auto text-slate-200" />
                <p className="text-sm font-semibold text-slate-400">Nenhuma narrativa encontrada.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
