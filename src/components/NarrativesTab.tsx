import { Brain, PlayCircle, Copy, Check, Target, Zap, MessageCircle, Heart, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NARRATIVES } from '../data';
import { useState, useMemo } from 'react';
import { useToast } from '../hooks/useToast';

type NarrativeCategory = 'gancho' | 'contexto' | 'solucao' | 'cta';

interface NarrativesTabProps {
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export default function NarrativesTab({ toggleFavorite, isFavorite }: NarrativesTabProps) {
  const [activeCategory, setActiveCategory] = useState<NarrativeCategory>('gancho');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { showToast } = useToast();

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
              Narrativas de <br className="hidden md:block" /> <span className="text-gradient-indigo">Alta Conversão</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
              Estruturas validadas para transformar visualizações em desejo de compra imediata.
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 shadow-sm overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-600 flex items-center justify-center text-[10px] font-black text-white shadow-sm">
                +2k
              </div>
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Criadores Ativos</span>
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
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-50 border border-slate-100 rounded-2xl overflow-x-auto no-scrollbar">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                      isActive 
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-100' 
                      : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <cat.icon size={14} className={isActive ? cat.color : 'opacity-50'} />
                    {cat.label}
                  </button>
                );
              })}
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
