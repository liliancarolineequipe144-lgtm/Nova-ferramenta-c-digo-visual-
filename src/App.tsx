import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tab } from './types';
import BottomNav from './components/BottomNav';
import DashboardTab from './components/DashboardTab';
import NarrativesTab from './components/NarrativesTab';
import PromptsTab from './components/PromptsTab';
import ProductsTab from './components/ProductsTab';
import FavoritesTab from './components/FavoritesTab';
import VideoLessonsTab from './components/VideoLessonsTab';
import Login from './components/Login';
import { useFavorites } from './hooks/useFavorites';
import { ToastProvider } from './hooks/useToast';
import { AUTHORIZED_NUMBERS, AUTHORIZED_USERS } from './auth';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const savedAuth = localStorage.getItem('auth_user');
    if (savedAuth && AUTHORIZED_NUMBERS.includes(savedAuth)) {
      setIsAuthenticated(true);
      setUserName(AUTHORIZED_USERS[savedAuth] || 'Criativo');
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login onLogin={(phone) => {
      localStorage.setItem('auth_user', phone);
      setIsAuthenticated(true);
      setUserName(AUTHORIZED_USERS[phone] || 'Criativo');
    }} />;
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#FAFAFC] text-slate-900 pb-32 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/40 backdrop-blur-2xl border-b border-slate-200/20 px-6 md:px-12 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <img 
                src="https://drive.google.com/uc?export=view&id=1xLuuT1QNNCrvjlb3-01w8ImpIdIQvN3X" 
                alt="Logo" 
                className="relative h-8 md:h-10 w-auto object-contain hover:scale-[1.02] transition-all duration-500 cursor-pointer active:scale-95" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2.5 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-slate-200/40 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Acesso Premium</span>
            </div>
            <button 
              onClick={() => {
                setIsAuthenticated(false);
                localStorage.removeItem('auth_user');
              }}
              className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-red-500 transition-colors"
            >
              Sair
            </button>
          </div>
        </header>

        {/* Subtle Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-50/30 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-rose-50/20 rounded-full blur-[100px] opacity-30 animate-pulse" style={{ animationDuration: '12s' }} />
        </div>

        {/* Main Content Area */}
        <main className="relative max-w-6xl mx-auto px-6 pt-12 pb-44">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              {activeTab === 'dashboard' && <DashboardTab setActiveTab={setActiveTab} userName={userName} />}
              {activeTab === 'narratives' && <NarrativesTab toggleFavorite={toggleFavorite} isFavorite={isFavorite} />}
              {activeTab === 'prompts' && <PromptsTab toggleFavorite={toggleFavorite} isFavorite={isFavorite} />}
              {activeTab === 'products' && <ProductsTab />}
              {activeTab === 'favorites' && <FavoritesTab toggleFavorite={toggleFavorite} isFavorite={isFavorite} />}
              {activeTab === 'video-lessons' && <VideoLessonsTab />}
            </motion.div>
          </AnimatePresence>

          {/* Footer Instruction (Bento Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 space-y-8"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] flex-grow bg-slate-200/50" />
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] px-4 whitespace-nowrap">Guia Estratégico</h4>
              <div className="h-[1px] flex-grow bg-slate-200/50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Workflow", 
                  text: "Nos prompts em inglês, ajuste apenas as partes em português para manter a estrutura técnica intacta.",
                  icon: "✨",
                  color: "bg-indigo-50 text-indigo-600"
                },
                { 
                  title: "Consistência", 
                  text: "Substitua o nome do produto no prompt para replicar o estilo visual em diferentes itens da sua loja.",
                  icon: "🎯",
                  color: "bg-emerald-50 text-emerald-600"
                },
                { 
                  title: "Escalabilidade", 
                  text: "Use a IA para remodelar prompts baseados em fotos reais, gerando infinitas variações criativas.",
                  icon: "🚀",
                  color: "bg-amber-50 text-amber-600"
                }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 bg-white border border-slate-100/60 rounded-[32px] card-shadow hover:card-shadow-hover transition-all duration-500">
                  <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                  <h5 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3">{item.title}</h5>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </main>

        {/* Fixed Bottom Navigation */}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </ToastProvider>
  );
}
