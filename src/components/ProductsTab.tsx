import { GARIMPADOS } from '../data';
import { ShoppingBag, ExternalLink, Tag, Copy, Check, Trash2, Lock, X, Share2, Search, Filter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';
import { useToast } from '../hooks/useToast';

export default function ProductsTab() {
  const [products, setProducts] = useState(GARIMPADOS);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedAllIndex, setCopiedAllIndex] = useState<number | null>(null);
  const [copiedHookKey, setCopiedHookKey] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [sharedIndex, setSharedIndex] = useState<number | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { showToast } = useToast();

  const categories = useMemo(() => {
    const cats = [...new Set(products.map(p => p.category))];
    return ['Todos', ...cats.sort((a, b) => a.localeCompare(b))];
  }, [products]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = selectedCategory === 'Todos' ? true : p.category === selectedCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const handleShare = async (product: any, index: number) => {
    const hooksText = product.hooks && product.hooks.length > 0 
      ? `\n\n*Ganchos Sugeridos:*\n${product.hooks.map((h: string, i: number) => `${i + 1}. ${h}`).join('\n')}`
      : '';

    const statsText = product.stats 
      ? `\n📊 *Métricas:*\n- Pedidos: ${product.stats.orders}\n- CTR: ${product.stats.ctr}%\n- Criadores: ${product.stats.creators}\n- No Carrinho: ${product.stats.cart}`
      : '';

    const extraInfo = `\n🏷️ Ticket: ${product.ticket || 'N/A'}\n🎬 Estilo: ${product.style || 'N/A'}`;
    const hashtagsText = product.hashtags ? `\n\n#️⃣ *Hashtags:*\n${product.hashtags.join(' ')}` : '';

    const shareText = `🛍️ *${product.title}*\n` +
      `${product.status ? `📈 ${product.status}\n` : ''}` +
      `💰 Comissão : ${product.price}` +
      statsText +
      extraInfo +
      hooksText +
      hashtagsText +
      `\n\n🔗 Link para se afiliar: ${product.link}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: product.title,
          text: shareText,
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        setSharedIndex(index);
        showToast('Link de afiliado copiado para compartilhamento!');
        setTimeout(() => setSharedIndex(null), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const handleCopyHooks = (hooks: string[] | undefined, index: number) => {
    if (!hooks) return;
    const text = hooks.map((h, i) => `${i + 1}. ${h}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedAllIndex(index);
    showToast('Todos os ganchos foram copiados!');
    setTimeout(() => setCopiedAllIndex(null), 2000);
  };

  const handleCopySingleHook = (hook: string, productIndex: number, hookIndex: number) => {
    navigator.clipboard.writeText(hook);
    setCopiedHookKey(`${productIndex}-${hookIndex}`);
    showToast('Gancho copiado!');
    setTimeout(() => setCopiedHookKey(null), 2000);
  };

  const handleDelete = (id: string) => {
    const correctPassword = (import.meta as any).env.VITE_DELETE_PASSWORD || 'código3426';
    if (password === correctPassword) {
      setProducts(prev => prev.filter(p => p.id !== id));
      setDeletingId(null);
      setPassword('');
      setError(false);
      showToast('Produto excluído com sucesso', 'info');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Header Section */}
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-emerald-500 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600/70">
                Premium Selection
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">
              Produtos <br className="hidden md:block" /> <span className="text-emerald-500">em Alta</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
              Produtos selecionados com métricas validadas e alto potencial de viralização.
            </p>
          </div>
          <div className="px-4 md:px-6 py-3 md:py-4 bg-white/40 backdrop-blur-md border border-slate-200/40 rounded-2xl md:rounded-3xl shadow-sm flex items-center gap-3 md:gap-4">
            <div className="p-2 md:p-2.5 bg-emerald-50 rounded-xl">
              <ShoppingBag size={18} className="text-emerald-600 md:w-5 md:h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Garimpados</span>
              <span className="text-xl md:text-2xl font-black text-slate-900 leading-none">{GARIMPADOS.length}</span>
            </div>
          </div>
        </div>

        {/* Filters and Search Container */}
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-grow group">
              <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
              <input
                type="text"
                placeholder="Qual produto você está procurando?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-8 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-50/50 focus:border-emerald-600/20 transition-all shadow-sm placeholder:text-slate-300"
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
                className="flex items-center justify-between gap-3 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-900 shadow-sm hover:border-emerald-200 transition-all min-w-[220px]"
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
                        {categories.map((cat) => {
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
                                ? 'bg-emerald-50 text-emerald-600' 
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

      <div className="grid grid-cols-1 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="group relative bg-white rounded-[40px] overflow-hidden border border-slate-100/60 flex flex-col xl:flex-row card-shadow hover:card-shadow-hover transition-all duration-700"
              >
                {/* Action Buttons (Top Right) */}
                <div className="absolute top-8 right-8 z-20 flex gap-3">
                  <button 
                    onClick={() => handleShare(product, index)}
                    className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-2xl border border-white/20 text-white transition-all duration-300 shadow-xl"
                    title="Compartilhar"
                  >
                    {sharedIndex === index ? <Check size={18} className="text-emerald-400" /> : <Share2 size={18} />}
                  </button>
                  <button 
                    onClick={() => setDeletingId(product.id)}
                    className="p-3 bg-red-500/10 hover:bg-red-500/20 backdrop-blur-md rounded-2xl border border-red-500/20 text-red-500/40 hover:text-red-500 transition-all duration-300"
                    title="Remover"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Delete Overlay */}
                <AnimatePresence>
                  {deletingId === product.id && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-8"
                    >
                      <div className="max-w-sm w-full space-y-8 text-center">
                        <div className="mx-auto w-20 h-20 bg-red-500/10 rounded-[28px] flex items-center justify-center border border-red-500/20 shadow-2xl shadow-red-500/10">
                          <Lock size={36} className="text-red-500" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-2xl font-black text-white tracking-tight">Confirmar Exclusão</h4>
                          <p className="text-slate-400 text-sm font-medium">Insira a senha de acesso para confirmar esta ação.</p>
                        </div>
                        <div className="space-y-4">
                          <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleDelete(product.id)}
                            placeholder="Digite a senha..."
                            className={`w-full px-6 py-4 bg-white/5 border rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 transition-all ${
                              error ? 'border-red-500/50 focus:ring-red-500/10' : 'border-white/10 focus:ring-emerald-500/10'
                            }`}
                            autoFocus
                          />
                          <div className="flex gap-4">
                            <button 
                              onClick={() => { setDeletingId(null); setPassword(''); setError(false); }}
                              className="flex-1 px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all"
                            >
                              Cancelar
                            </button>
                            <button 
                              onClick={() => handleDelete(product.id)}
                              className="flex-1 px-6 py-4 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all shadow-xl shadow-red-600/20"
                            >
                              Excluir
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Media Section */}
                <div className="relative w-full xl:w-[440px] h-[440px] xl:h-auto overflow-hidden shrink-0 bg-slate-900">
                  {product.video ? (
                    <div className="absolute inset-0 w-full h-full">
                      <iframe 
                        src={product.video}
                        className="absolute inset-0 w-full h-full scale-[1.02] opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                        allow="autoplay"
                        title={product.title}
                      />
                    </div>
                  ) : (
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-8 left-8">
                    <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-white shadow-lg flex items-center gap-2">
                      <Tag size={12} className="text-emerald-600" />
                      <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{product.category}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="space-y-3">
                      {product.status && (
                        <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-lg shadow-xl shadow-emerald-500/20">
                          {product.status}
                        </span>
                      )}
                      <h3 className="text-3xl font-black text-white leading-tight tracking-tight drop-shadow-xl">{product.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col flex-grow bg-gradient-to-br from-white to-slate-50/30 space-y-12">
                  {/* Stats Grid */}
                  {product.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: 'Pedidos', value: product.stats.orders, color: 'indigo' },
                        { label: 'CTR', value: `${product.stats.ctr}%`, color: 'emerald' },
                        { label: 'Criadores', value: product.stats.creators, color: 'amber' },
                        { label: 'Carrinho', value: product.stats.cart, color: 'rose' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100/60 shadow-sm hover:shadow-md transition-all duration-500">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                          <p className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-10">
                      <div className="flex flex-wrap gap-10">
                        <div className="space-y-1.5">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Comissão</p>
                          <p className="text-xl font-black text-emerald-600 bg-emerald-50/50 px-4 py-1.5 rounded-xl border border-emerald-100 inline-block">R$ {product.commission}</p>
                        </div>
                        <div className="space-y-1.5">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ticket</p>
                          <p className="text-xl font-black text-slate-900 capitalize tracking-tight">{product.ticket}</p>
                        </div>
                        <div className="space-y-1.5">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estilo</p>
                          <p className="text-xl font-black text-indigo-600 uppercase tracking-tight">{product.style}</p>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <div className="flex items-center justify-between">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hooks de Alta Conversão</p>
                          <button
                            onClick={() => handleCopyHooks(product.hooks, index)}
                            className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-lg text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 group/copyall"
                          >
                            {copiedAllIndex === index ? <Check size={12} /> : <Copy size={12} />}
                            {copiedAllIndex === index ? 'Copiados' : 'Copiar Todos'}
                          </button>
                        </div>
                        <div className="space-y-3">
                          {product.hooks?.map((hook, i) => (
                            <div key={i} className="flex gap-4 items-start group/hook bg-slate-50/40 p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white transition-all">
                              <span className="flex-shrink-0 w-7 h-7 bg-slate-900 text-white text-[10px] font-black rounded-lg flex items-center justify-center mt-0.5 group-hover/hook:bg-indigo-600 transition-colors shadow-sm">
                                {i + 1}
                              </span>
                              <div className="flex-grow">
                                <p className="text-sm font-medium text-slate-600 leading-relaxed italic">"{hook}"</p>
                              </div>
                              <button 
                                onClick={() => handleCopySingleHook(hook, index, i)}
                                className="shrink-0 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                              >
                                {copiedHookKey === `${index}-${i}` ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} className="text-slate-400" />}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between space-y-10">
                      <div className="space-y-5">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hashtags Estratégicas</p>
                        <div className="flex flex-wrap gap-2.5">
                          {product.hashtags?.map((tag, i) => (
                            <span key={i} className="px-4 py-2 bg-white border border-slate-100 text-[11px] font-black text-slate-500 rounded-xl hover:border-indigo-200 hover:text-indigo-600 transition-colors shadow-sm cursor-default">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-8">
                        <a 
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center justify-center gap-4 w-full px-8 py-5 bg-slate-900 text-white rounded-[24px] font-black text-[12px] uppercase tracking-[0.2em] hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-200 transition-all duration-500 active:scale-95"
                        >
                          <ShoppingBag size={20} strokeWidth={2.5} />
                          Afiliar-se ao Produto
                          <ExternalLink size={16} className="opacity-30 group-hover/btn:opacity-60 transition-opacity" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="py-32 flex flex-col items-center text-center space-y-5 bg-slate-50/40 rounded-[40px] border border-dashed border-slate-200">
              <ShoppingBag size={40} className="text-slate-200" />
              <div className="space-y-2">
                <h3 className="text-xl font-black text-slate-900">Em Breve</h3>
                <p className="text-slate-500 max-w-xs font-medium text-sm">
                  Estamos selecionando as melhores peças para você. Volte logo para conferir!
                </p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Quality Badge Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-slate-900 rounded-[40px]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="w-20 h-20 bg-white/5 backdrop-blur-xl rounded-[28px] flex items-center justify-center border border-white/10 shrink-0 shadow-2xl">
            <ShoppingBag size={36} className="text-emerald-400" />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-2xl font-black text-white tracking-tight">Qualidade Curada</h4>
            <p className="text-slate-400 text-base font-medium leading-relaxed max-w-2xl">
              Cada item desta lista passou por uma triagem rigorosa. Priorizamos <span className="text-white font-bold">fornecedores premium</span>, tecidos de alta durabilidade e acabamentos que garantem o visual de luxo.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
