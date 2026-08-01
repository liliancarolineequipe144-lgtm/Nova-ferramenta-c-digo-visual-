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
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-indigo-600 rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-400">
              Narrativas Completas
            </span>
          </div>
          <div className="flex items-end gap-3">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Fluxo Estratégico</h2>
            <span className="mb-1 px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold border border-slate-200 shadow-sm">
              {filteredItems.length}
            </span>
          </div>
          <p className="text-slate-500 text-sm max-w-md font-medium leading-relaxed">
            Navegue pelas etapas da narrativa para construir um conteúdo de alta conversão.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Buscar em narrativas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-5 bg-white border border-slate-100 rounded-3xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Mini Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-2 bg-slate-100/50 rounded-3xl border border-slate-200/50">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden ${
                isActive ? 'text-white shadow-lg' : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSubTab"
                  className={`absolute inset-0 ${cat.accent}`}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <cat.icon size={14} className={`relative z-10 ${isActive ? 'text-white' : cat.color}`} />
              <span className="relative z-10">{cat.label}</span>
              <span className={`relative z-10 text-[9px] font-black px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {NARRATIVES.filter(n => n.category === cat.id).length}
              </span>
            </button>
          );
        })}
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
                className="group relative bg-white rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                {/* Video Player (if exists) */}
                {item.videoUrl && (
                  <div className="relative aspect-[9/16] md:w-[280px] bg-slate-900 overflow-hidden shrink-0">
                    <iframe
                      src={item.videoUrl}
                      className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                      allow="autoplay"
                      title={item.title}
                    ></iframe>
                    <div className="absolute top-6 left-6 pointer-events-none">
                      <div className="bg-black/40 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/20 flex items-center gap-2">
                        <PlayCircle size={14} className="text-white" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Exemplo Visual</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-10 space-y-8 flex-grow bg-gradient-to-br from-white to-slate-50/50">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${categories.find(c => c.id === item.category)?.color} ${categories.find(c => c.id === item.category)?.bg} border border-current opacity-70`}>
                        {categories.find(c => c.id === item.category)?.label}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          const currentlyFavorite = isFavorite(item.id);
                          toggleFavorite(item.id);
                          showToast(!currentlyFavorite ? 'Adicionado aos favoritos' : 'Removido dos favoritos', currentlyFavorite ? 'info' : 'success');
                        }}
                        className={`p-2.5 rounded-xl border transition-all duration-300 active:scale-90 ${
                          isFavorite(item.id)
                            ? 'bg-rose-50 border-rose-100 text-rose-500 shadow-sm'
                            : 'bg-white border-slate-100 text-slate-300 hover:text-rose-400 hover:border-rose-100'
                        }`}
                      >
                        <Heart size={20} fill={isFavorite(item.id) ? "currentColor" : "none"} />
                      </button>
                      <button
                        onClick={() => copyToClipboard(item.description, item.id)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl font-black text-[11px] transition-all duration-500 shadow-sm active:scale-95 uppercase tracking-widest shrink-0 ${
                          copiedId === item.id
                            ? 'bg-emerald-500 text-white shadow-emerald-200'
                            : 'bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-indigo-200'
                        }`}
                      >
                        {copiedId === item.id ? (
                          <><Check size={14} strokeWidth={3} /> Copiado</>
                        ) : (
                          <><Copy size={14} strokeWidth={3} /> Copiar Texto</>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm group-hover:shadow-md transition-all duration-500">
                    <div className={`absolute -left-6 top-1/2 -translate-y-1/2 w-[3px] h-12 ${categories.find(c => c.id === item.category)?.accent} rounded-full opacity-40`} />
                    <p className="text-[15px] text-slate-700 leading-relaxed font-medium whitespace-pre-wrap italic">
                      "{item.description}"
                    </p>
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
