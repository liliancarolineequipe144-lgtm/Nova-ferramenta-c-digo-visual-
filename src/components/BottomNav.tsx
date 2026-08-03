import { Anchor, MessageSquare, ShoppingBag, Brain, Heart, PlayCircle } from 'lucide-react';
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
    { id: 'video-lessons', label: 'Aulas', icon: PlayCircle },
    { id: 'favorites', label: 'Favoritos', icon: Heart },
  ] as const;

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-[500px] z-50">
      <div className="glass rounded-[32px] p-2 flex items-center justify-around ring-1 ring-black/[0.03]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as Tab)}
              className={`relative flex flex-col items-center gap-1 py-3 px-1 rounded-2xl transition-all duration-500 active:scale-90 flex-1 outline-none group ${
                isActive ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabNav"
                  className="absolute inset-0 bg-indigo-50/60 rounded-2xl border border-indigo-100/30"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center">
                <Icon 
                  size={19} 
                  strokeWidth={isActive ? 2.5 : 2} 
                  className={`transition-all duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-110 opacity-80'}`} 
                />
                <span className={`text-[9px] font-black uppercase tracking-[0.15em] transition-all duration-500 overflow-hidden ${isActive ? 'opacity-100 mt-1 h-auto max-h-4' : 'opacity-0 h-0 max-h-0'}`}>
                  {tab.label}
                </span>
                {tab.id === 'favorites' && favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-rose-500 text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-in zoom-in duration-300">
                    {favorites.length}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
