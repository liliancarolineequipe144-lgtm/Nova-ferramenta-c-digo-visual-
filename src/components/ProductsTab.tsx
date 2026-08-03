import { GARIMPADOS } from '../data';
import { ShoppingBag, ExternalLink, Tag, Copy, Check, Trash2, Lock, X, Share2, Search } from 'lucide-react';
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

  const categories = useMemo(() => ['Todos', ...new Set(products.map(p => p.category))], [products]);

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
      {/* Header */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[2px] bg-emerald-600 rounded-full" />
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-emerald-500/80">
              Achados Selecionados
            </span>
          </div>
          <div className="flex items-end gap-4">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-none">Produtos Garimpados</h2>
            <div className="mb-1 px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-2xl text-[13px] font-black border border-emerald-100 shadow-sm">
              {filteredProducts.length}
            </div>
          </div>
          <p className="text-slate-500 text-base max-w-lg font-medium leading-relaxed">
            Curadoria exclusiva de itens de alta conversão para elevar o nível das suas produções.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search size={20} className="text-slate-400 group-focus-within:text-emerald-600 transition-colors duration-300" />
          </div>
          <input
            type="text"
            placeholder="Qual produto você está procurando?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-16 pr-8 py-6 bg-white border border-slate-100 rounded-[32px] text-base font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-50 focus:border-emerald-600 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.02)] placeholder:text-slate-300"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5 p-2.5 bg-slate-100/40 backdrop-blur-md rounded-[32px] border border-slate-200/40">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3.5 rounded-[22px] text-[11px] font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-2 relative overflow-hidden group/tab ${
              selectedCategory === cat
                ? 'text-white shadow-xl shadow-emerald-100'
                : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
            }`}
          >
            {selectedCategory === cat && (
              <motion.div
                layoutId="activeProductTab"
                className="absolute inset-0 bg-emerald-600"
                transition={{ type: 'spring', bounce: 0.15, duration: 0.7 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
            <span className={`relative z-10 px-2 py-0.5 rounded-lg text-[9px] font-black transition-colors ${selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-400'}`}>
              {cat === 'Todos' ? products.length : products.filter(p => p.category === cat).length}
            </span>
          </button>
        ))}
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
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="group relative bg-white rounded-[48px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col xl:flex-row hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)] transition-all duration-700"
              >
                {/* Action Buttons (Top Right) */}
                <div className="absolute top-8 right-8 z-20 flex gap-3">
                  <button 
                    onClick={() => handleShare(product, index)}
                    className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 text-white transition-all duration-300 group/share"
                    title="Compartilhar Produto"
                  >
                    {sharedIndex === index ? (
                      <Check size={18} className="text-emerald-400" />
                    ) : (
                      <Share2 size={18} className="group-hover/share:scale-110 transition-transform" />
                    )}
                  </button>
                  <button 
                    onClick={() => setDeletingId(product.id)}
                    className="p-3 bg-red-500/5 hover:bg-red-500/20 backdrop-blur-md rounded-2xl border border-red-500/10 hover:border-red-500/30 text-red-500/20 hover:text-red-500 transition-all duration-300 group/del"
                    title="Excluir Produto"
                  >
                    <Trash2 size={18} className="group-hover/del:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Delete Overlay */}
                <AnimatePresence>
                  {deletingId === product.id && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-50 bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-8"
                    >
                      <div className="max-w-sm w-full space-y-6 text-center">
                        <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-3xl flex items-center justify-center border border-red-500/20">
                          <Lock size={32} className="text-red-500" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-2xl font-black text-white">Confirmar Exclusão</h4>
                          <p className="text-slate-400 text-sm font-medium">Insira a senha de acesso para confirmar esta ação.</p>
                        </div>
                        <div className="space-y-3">
                          <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleDelete(product.id)}
                            placeholder="Digite a senha..."
                            className={`w-full px-6 py-4 bg-white/5 border rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ${
                              error ? 'border-red-500 focus:ring-red-500 ring-2' : 'border-white/10 focus:ring-emerald-500'
                            }`}
                            autoFocus
                          />
                          {error && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-[10px] font-black uppercase tracking-widest"
                            >
                              Senha Incorreta
                            </motion.p>
                          )}
                          <div className="flex gap-3 pt-2">
                            <button 
                              onClick={() => {
                                setDeletingId(null);
                                setPassword('');
                                setError(false);
                              }}
                              className="flex-1 px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all"
                            >
                              Cancelar
                            </button>
                            <button 
                              onClick={() => handleDelete(product.id)}
                              className="flex-1 px-6 py-4 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-red-600/20"
                            >
                              Excluir
                            </button>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          setDeletingId(null);
                          setPassword('');
                          setError(false);
                        }}
                        className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Media Section (Image or Video) */}
              <div className="relative w-full xl:w-[400px] h-[400px] xl:h-auto overflow-hidden shrink-0 bg-slate-900">
                {product.video ? (
                  <div className="absolute inset-0 w-full h-full">
                    {product.video.includes('drive.google.com') ? (
                      <iframe 
                        src={product.video}
                        className="absolute inset-0 w-full h-full scale-[1.02]"
                        allow="autoplay"
                        title={product.title}
                      />
                    ) : (
                      <video 
                        src={product.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    )}
                  </div>
                ) : (
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                )}
                {/* Overlay to catch clicks and maintain styling, but slightly transparent over video */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-8 left-8">
                  <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white shadow-xl flex items-center gap-2">
                    <Tag size={14} className="text-emerald-600" />
                    <span className="text-[11px] font-black text-slate-900 tracking-[0.1em]">{product.category}</span>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-3xl font-black leading-tight">{product.title}</h3>
                    {product.status && (
                      <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-emerald-400">
                        {product.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col flex-grow bg-gradient-to-br from-white to-slate-50/30">
                {/* Stats Grid */}
                {product.stats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 group-hover:border-indigo-100/50 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)]">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Pedidos</p>
                      <p className="text-3xl font-black text-slate-900 tracking-tight">{product.stats.orders}</p>
                    </div>
                    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 group-hover:border-emerald-100/50 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)]">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">CTR</p>
                      <p className="text-3xl font-black text-emerald-600 tracking-tight">{product.stats.ctr}%</p>
                    </div>
                    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 group-hover:border-amber-100/50 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)]">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Criadores</p>
                      <p className="text-3xl font-black text-slate-900 tracking-tight">{product.stats.creators}</p>
                    </div>
                    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 group-hover:border-rose-100/50 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)]">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Carrinho</p>
                      <p className="text-3xl font-black text-slate-900 tracking-tight">{product.stats.cart}</p>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-10">
                  {/* Left Column: Details */}
                  <div className="space-y-8">
                    <div className="flex flex-wrap gap-8">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Comissão</p>
                        <p className="text-xl font-black text-emerald-600 bg-emerald-50 px-4 py-1 rounded-full border border-emerald-100 inline-block">R$ {product.commission}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Ticket</p>
                        <p className="text-xl font-black text-slate-900 capitalize">{product.ticket}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Estilo</p>
                        <p className="text-xl font-black text-indigo-600 uppercase">{product.style}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ganchos Sugeridos</p>
                        <button
                          onClick={() => handleCopyHooks(product.hooks, index)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all active:scale-95 group/copy"
                        >
                          {copiedAllIndex === index ? (
                            <>
                              <Check size={12} className="text-emerald-600" />
                              <span className="text-emerald-600">Copiado</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} className="group-hover/copy:scale-110 transition-transform" />
                              <span>Copiar Tudo</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="space-y-3">
                        {product.hooks?.map((hook, i) => (
                          <div key={i} className="flex gap-3 items-start group/hook bg-slate-50/50 p-3 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white transition-all duration-300">
                            <span className="flex-shrink-0 w-6 h-6 bg-slate-900 text-white text-[10px] font-black rounded-lg flex items-center justify-center mt-0.5 group-hover/hook:bg-emerald-600 transition-colors">
                              {i + 1}
                            </span>
                            <div className="flex-grow">
                              <p className="text-[13px] font-medium text-slate-600 leading-relaxed italic">"{hook}"</p>
                            </div>
                            <button 
                              onClick={() => handleCopySingleHook(hook, index, i)}
                              className="shrink-0 p-2 hover:bg-slate-100 rounded-lg transition-colors group/singlecopy"
                            >
                              {copiedHookKey === `${index}-${i}` ? (
                                <Check size={14} className="text-emerald-600" />
                              ) : (
                                <Copy size={14} className="text-slate-400 group-hover/singlecopy:text-slate-600 transition-colors" />
                              )}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Actions & Tags */}
                  <div className="space-y-8 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Hashtags Estratégicas</p>
                      <div className="flex flex-wrap gap-2">
                        {product.hashtags?.map((tag, i) => (
                          <span key={i} className="px-3 py-1.5 bg-white border border-slate-100 text-[11px] font-bold text-slate-500 rounded-xl hover:border-indigo-200 hover:text-indigo-600 transition-colors cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center gap-3 w-full px-8 py-5 bg-slate-900 text-white rounded-3xl font-black text-[13px] uppercase tracking-widest hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-200 transition-all duration-500 active:scale-[0.98]"
                      >
                        <ShoppingBag size={18} strokeWidth={2.5} className="group-hover/btn:scale-110 transition-transform" />
                        Acessar Link para se Afiliar
                        <ExternalLink size={16} className="opacity-40" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="py-20 flex flex-col items-center text-center space-y-4 bg-white/50 rounded-[40px] border border-dashed border-slate-200">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-2">
              <ShoppingBag size={32} />
            </div>
            <h3 className="text-xl font-black text-slate-900">Em Breve</h3>
            <p className="text-slate-500 max-w-xs font-medium">
              Estamos selecionando as melhores peças para você. Volte logo para conferir as novidades!
            </p>
          </div>
        )}
        </AnimatePresence>
      </div>

      {/* Trust Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-slate-900 rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 blur-[80px] -mr-32 -mt-32 rounded-full group-hover:bg-emerald-500/30 transition-colors duration-700" />
        <div className="relative flex flex-col md:flex-row items-center gap-10">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500">
            <ShoppingBag size={40} className="text-emerald-400" />
          </div>
          <div className="text-center md:text-left space-y-3">
            <h4 className="font-black text-3xl tracking-tight">Qualidade Curada</h4>
            <p className="text-slate-400 text-base leading-relaxed max-w-xl font-medium">
              Cada item desta lista passou por uma triagem rigorosa. Priorizamos <span className="text-white font-bold">fornecedores premium</span>, tecidos de alta durabilidade e acabamentos que garantem o visual de luxo que sua audiência busca.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
