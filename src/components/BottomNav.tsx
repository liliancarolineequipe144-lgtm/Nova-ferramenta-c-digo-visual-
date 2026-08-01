import { Anchor, MessageSquare, ShoppingBag, Brain, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Tab } from '../types';
import { useFavorites } from '../hooks/useFavorites';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const { favorites } = useFavorites();
  
  const tabs = [
    { id: 'narratives', label: 'Narrativas', icon: Brain },
    { id: 'prompts', label: 'Prompts', icon: MessageSquare },
    { id: 'products', label: 'Produtos', icon: ShoppingBag },
    { id: 'favorites', label: 'Favoritos', icon: Heart },
  ] as const;

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[94%] max-w-[460px] z-50">
      <div className="bg-white/80 backdrop-blur-3xl border border-white/60 rounded-[32px] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] p-2 flex items-center justify-around ring-1 ring-black/[0.03]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as Tab)}
              className={`relative flex flex-col items-center gap-1.5 py-3.5 px-2 rounded-[24px] transition-all duration-500 active:scale-95 flex-1 outline-none group ${
                isActive ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabNav"
                  className="absolute inset-0 bg-indigo-50/90 rounded-[24px] border border-indigo-100/50 shadow-sm"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center">
                <Icon 
                  size={20} 
                  strokeWidth={isActive ? 2.5 : 2} 
                  className={`transition-all duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} 
                />
                {tab.id === 'favorites' && favorites.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-rose-500 text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    {favorites.length}
                  </span>
                )}
                <span className={`text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden ${isActive ? 'opacity-100 mt-1.5 h-auto' : 'opacity-0 h-0 mt-0'}`}>
                  {tab.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
