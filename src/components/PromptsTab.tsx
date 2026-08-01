import { VIDEO_PROMPTS } from '../data';
import { Sparkles, Copy, Check, Heart, Globe, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
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
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-indigo-600 rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-400">
              Inspiração Visual
            </span>
          </div>
          <div className="flex items-end gap-3">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Galeria de Prompts</h2>
            <span className="mb-1 px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold border border-slate-200 shadow-sm">
              {filteredPrompts.length}
            </span>
          </div>
          <p className="text-slate-500 text-sm max-w-md font-medium leading-relaxed">
            Roteiros estratégicos e referências visuais de alta performance projetados para suas produções.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Buscar por título ou palavra-chave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-5 bg-white border border-slate-100 rounded-3xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3">
        {dynamicCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === cat
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                : 'bg-white text-slate-400 hover:text-slate-600 border border-slate-100 hover:border-slate-200'
            }`}
          >
            <span>{cat}</span>
            <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-black ${selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'}`}>
              {cat === 'Todos' ? VIDEO_PROMPTS.length : VIDEO_PROMPTS.filter(p => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-12">
        {filteredPrompts.length > 0 ? (
          filteredPrompts.map((prompt, index) => {
            const config = categoryConfig[prompt.category as keyof typeof categoryConfig] || categoryConfig['Universal'];
            
            return (
              <motion.div 
                key={prompt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500"
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
                    <div className="absolute top-6 left-6 pointer-events-none">
                      <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Referência Visual</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-10 flex flex-col flex-grow bg-gradient-to-br from-white to-slate-50/50">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10">
                    <div className="space-y-3">
                      <h4 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                        {prompt.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${config.color} ${config.bg} border border-current opacity-70`}>
                          {prompt.category || 'Geral'}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          • {prompt.type}
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
                        className={`p-2.5 rounded-xl border transition-all duration-300 active:scale-90 ${
                          isFavorite(prompt.id)
                            ? 'bg-rose-50 border-rose-100 text-rose-500 shadow-sm'
                            : 'bg-white border-slate-100 text-slate-300 hover:text-rose-400 hover:border-rose-100'
                        }`}
                      >
                        <Heart size={20} fill={isFavorite(prompt.id) ? "currentColor" : "none"} />
                      </button>
                      <button 
                        onClick={() => copyToClipboard(prompt.content, prompt.id)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl font-black text-[11px] transition-all duration-500 shadow-sm active:scale-95 shrink-0 uppercase tracking-widest ${
                          copiedId === prompt.id 
                          ? 'bg-emerald-500 text-white shadow-emerald-200' 
                          : 'bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-indigo-200'
                        }`}
                      >
                        {copiedId === prompt.id ? (
                          <><Check size={14} strokeWidth={3} /> Copiado</>
                        ) : (
                          <><Copy size={14} strokeWidth={3} /> Copiar Prompt</>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="relative flex-grow">
                    <div className="absolute -left-6 top-0 bottom-0 w-[3px] bg-slate-100 rounded-full overflow-hidden">
                      <div className={`absolute top-0 left-0 w-full h-24 ${config.accent} opacity-40`} />
                    </div>
                    <div className="markdown-content prose prose-slate prose-sm max-w-none text-slate-600 leading-relaxed font-medium">
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
          <div className="py-32 text-center space-y-6 bg-slate-50/50 rounded-[40px] border border-dashed border-slate-200">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto text-slate-300 shadow-sm">
              <Search size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-900">Nenhum resultado</h3>
              <p className="text-slate-500 text-sm font-medium max-w-xs mx-auto">Tente ajustar sua busca ou mudar a categoria selecionada.</p>
            </div>
          </div>
        )}
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
