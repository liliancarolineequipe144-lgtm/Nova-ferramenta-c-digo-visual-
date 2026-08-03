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
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[2px] bg-indigo-600 rounded-full" />
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-indigo-500/80">
              Narrativas Estratégicas
            </span>
          </div>
          <div className="flex items-end gap-4">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-none">Fluxo Criativo</h2>
            <div className="mb-1 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-2xl text-[13px] font-black border border-indigo-100/50 shadow-sm">
              {filteredItems.length}
            </div>
          </div>
          <p className="text-slate-500 text-base max-w-lg font-medium leading-relaxed">
            Estruturas validadas para converter visualizações em vendas. Copie e adapte para o seu nicho.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search size={20} className="text-slate-400 group-focus-within:text-indigo-600 transition-colors duration-300" />
          </div>
          <input
            type="text"
            placeholder="O que você está criando hoje?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-16 pr-8 py-6 bg-white border border-slate-100 rounded-[32px] text-base font-semibold focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.02)] placeholder:text-slate-300"
          />
        </div>
      </div>

      {/* Mini Tabs Navigation */}
      <div className="flex flex-wrap gap-2.5 p-2.5 bg-slate-100/40 backdrop-blur-md rounded-[32px] border border-slate-200/40">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-[22px] text-[12px] font-black uppercase tracking-widest transition-all duration-500 relative overflow-hidden group/tab ${
                isActive ? 'text-white shadow-xl shadow-indigo-100' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSubTab"
                  className={`absolute inset-0 ${cat.accent}`}
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.7 }}
                />
              )}
              <cat.icon size={16} className={`relative z-10 transition-transform duration-500 ${isActive ? 'text-white scale-110' : `${cat.color} group-hover/tab:scale-110`}`} />
              <span className="relative z-10">{cat.label}</span>
              <span className={`relative z-10 text-[10px] font-black px-2 py-0.5 rounded-lg transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200/50 text-slate-400'}`}>
                {NARRATIVES.filter(n => n.category === cat.id).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 gap-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${searchQuery}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-10"
          >
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-white rounded-[48px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)] transition-all duration-700"
              >
                {/* Video Player (if exists) */}
                {item.videoUrl && (
                  <div className="relative aspect-[9/16] md:w-[320px] bg-slate-900 overflow-hidden shrink-0">
                    <iframe
                      src={item.videoUrl}
                      className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                      allow="autoplay"
                      title={item.title}
                    ></iframe>
                    <div className="absolute top-8 left-8 pointer-events-none">
                      <div className="glass px-5 py-2.5 rounded-2xl border border-white/40 flex items-center gap-2.5">
                        <PlayCircle size={16} className="text-indigo-600" />
                        <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Preview Real</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-12 space-y-10 flex-grow flex flex-col justify-between">
                  <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                      <div className="space-y-4">
                        <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${categories.find(c => c.id === item.category)?.color} ${categories.find(c => c.id === item.category)?.bg} border border-current/20`}>
                          <Zap size={12} fill="currentColor" />
                          {categories.find(c => c.id === item.category)?.label}
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-[1.1] group-hover:text-indigo-600 transition-colors duration-500">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            const currentlyFavorite = isFavorite(item.id);
                            toggleFavorite(item.id);
                            showToast(!currentlyFavorite ? 'Adicionado aos favoritos' : 'Removido dos favoritos', currentlyFavorite ? 'info' : 'success');
                          }}
                          className={`p-3.5 rounded-2xl border transition-all duration-500 active:scale-90 group/fav ${
                            isFavorite(item.id)
                              ? 'bg-rose-50 border-rose-100 text-rose-500 shadow-sm'
                              : 'bg-white border-slate-100 text-slate-300 hover:text-rose-400 hover:border-rose-100'
                          }`}
                        >
                          <Heart size={22} fill={isFavorite(item.id) ? "currentColor" : "none"} className="group-hover/fav:scale-110 transition-transform" />
                        </button>
                        <button
                          onClick={() => copyToClipboard(item.description, item.id)}
                          className={`flex items-center gap-3 px-7 py-4 rounded-2xl font-black text-[12px] transition-all duration-500 shadow-sm active:scale-95 uppercase tracking-widest shrink-0 group/copy ${
                            copiedId === item.id
                              ? 'bg-emerald-500 text-white shadow-emerald-200'
                              : 'bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-100'
                          }`}
                        >
                          {copiedId === item.id ? (
                            <><Check size={16} strokeWidth={3} /> Copiado</>
                          ) : (
                            <><Copy size={16} strokeWidth={3} className="group-hover/copy:scale-110 transition-transform" /> Copiar Estrutura</>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="relative bg-slate-50/50 rounded-[32px] p-10 border border-slate-100 transition-all duration-500 group-hover:bg-white group-hover:border-indigo-100/50">
                      <div className={`absolute -left-[2px] top-10 w-[4px] h-12 ${categories.find(c => c.id === item.category)?.accent} rounded-full`} />
                      <p className="text-lg text-slate-700 leading-relaxed font-semibold italic text-gradient">
                        "{item.description}"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-400">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest">+1.2k criadores usaram</span>
                  </div>
                </div>
              </div>
            ))}

            {filteredItems.length === 0 && (
              <div className="py-20 text-center space-y-6 bg-slate-50/50 rounded-[40px] border border-dashed border-slate-200">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto text-slate-300 shadow-sm">
                  <Search size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900">Nenhum resultado</h3>
                  <p className="text-slate-500 text-sm font-medium max-w-xs mx-auto">Tente ajustar sua busca ou navegar por outras categorias.</p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
