import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tab } from './types';
import BottomNav from './components/BottomNav';
import NarrativesTab from './components/NarrativesTab';
import PromptsTab from './components/PromptsTab';
import ProductsTab from './components/ProductsTab';
import FavoritesTab from './components/FavoritesTab';
import VideoLessonsTab from './components/VideoLessonsTab';
import { useFavorites } from './hooks/useFavorites';
import { ToastProvider } from './hooks/useToast';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('narratives');
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#FDFDFF] text-slate-900 pb-32 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/40 backdrop-blur-3xl border-b border-slate-100/50 px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://drive.google.com/uc?export=view&id=1xLuuT1QNNCrvjlb3-01w8ImpIdIQvN3X" 
              alt="Logo" 
              className="h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-500 cursor-pointer" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Live Updates</span>
            </div>
          </div>
        </header>

        {/* Subtle Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-indigo-100/20 rounded-full blur-[140px] opacity-60" />
          <div className="absolute top-[20%] -right-[10%] w-[50%] h-[70%] bg-rose-100/15 rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-emerald-50/30 rounded-full blur-[100px] opacity-50" />
        </div>

        {/* Main Content Area */}
        <main className="relative max-w-4xl mx-auto px-6 pt-12 pb-44">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'narratives' && <NarrativesTab toggleFavorite={toggleFavorite} isFavorite={isFavorite} />}
              {activeTab === 'prompts' && <PromptsTab toggleFavorite={toggleFavorite} isFavorite={isFavorite} />}
              {activeTab === 'products' && <ProductsTab />}
              {activeTab === 'favorites' && <FavoritesTab toggleFavorite={toggleFavorite} isFavorite={isFavorite} />}
              {activeTab === 'video-lessons' && <VideoLessonsTab />}
            </motion.div>
          </AnimatePresence>

          {/* Footer Instruction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-24 mb-12 p-10 bg-white/40 backdrop-blur-xl rounded-[40px] border border-white/60 shadow-sm space-y-6 group"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl">💡</span>
              </div>
              <div className="flex flex-col">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.25em]">Dicas de Especialista</h4>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Aumente sua conversão</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-3">
                <div className="w-6 h-[1px] bg-indigo-200" />
                <p className="text-[13px] font-medium text-slate-600 leading-relaxed italic">
                  Nos prompts em inglês, basta alterar a fala onde estiver em português. App recomendável: <span className="text-indigo-600 font-bold not-italic underline decoration-indigo-200 underline-offset-4">flow</span>
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-6 h-[1px] bg-indigo-200" />
                <p className="text-[13px] font-medium text-slate-600 leading-relaxed italic">
                  Só trocar o nome do produto no prompt na hora de criar o seu conteúdo para manter a consistência estratégica.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-6 h-[1px] bg-indigo-200" />
                <p className="text-[13px] font-medium text-slate-600 leading-relaxed italic">
                  <span className="text-indigo-600 font-bold not-italic">Dica:</span> pegue esse prompt, coloque na IA com fotos do seu produto e peça para remodelar especificamente para ele.
                </p>
              </div>
            </div>
          </motion.div>
        </main>

        {/* Fixed Bottom Navigation */}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </ToastProvider>
  );
}
