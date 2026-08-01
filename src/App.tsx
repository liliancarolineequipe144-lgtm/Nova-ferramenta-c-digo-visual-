import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tab } from './types';
import BottomNav from './components/BottomNav';
import NarrativesTab from './components/NarrativesTab';
import PromptsTab from './components/PromptsTab';
import ProductsTab from './components/ProductsTab';
import FavoritesTab from './components/FavoritesTab';
import { useFavorites } from './hooks/useFavorites';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('narratives');
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans pb-32 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-3xl border-b border-slate-100/50 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="https://drive.google.com/uc?export=view&id=1xLuuT1QNNCrvjlb3-01w8ImpIdIQvN3X" 
            alt="Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-100/30 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-rose-100/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-emerald-50/40 rounded-full blur-[100px]" />
      </div>

      {/* Main Content Area */}
      <main className="relative max-w-3xl mx-auto px-6 pt-8 pb-44">
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
          </motion.div>
        </AnimatePresence>

        {/* Footer Instruction */}
        <div className="max-w-2xl mx-auto mt-16 mb-12 p-8 bg-white/40 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-sm space-y-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-indigo-50 rounded-xl border border-indigo-100 shadow-sm">
              <span className="text-xl">💡</span>
            </div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">Dicas de Especialista</h4>
          </div>
          <div className="space-y-4">
            <p className="text-[13px] font-medium text-slate-600 leading-relaxed italic">
              Nos prompts em inglês, basta alterar a fala onde estiver em português. App recomendável: <span className="text-indigo-600 font-bold not-italic underline decoration-indigo-200">flow</span>
            </p>
            <div className="h-[1px] w-full bg-slate-100/80" />
            <p className="text-[13px] font-medium text-slate-600 leading-relaxed italic">
              Só trocar o nome do produto no prompt na hora de criar o seu conteúdo para manter a consistência estratégica.
            </p>
            <div className="h-[1px] w-full bg-slate-100/80" />
            <p className="text-[13px] font-medium text-slate-600 leading-relaxed italic">
              <span className="text-indigo-600 font-bold not-italic">Dica:</span> pegue esse prompt, coloque na inteligência artificial de sua preferência com as fotos do seu produto e peça para remodelar especificamente para ele.
            </p>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
