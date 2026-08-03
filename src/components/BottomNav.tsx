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
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-[440px] z-50">
      <div className="glass rounded-[40px] p-1.5 flex items-center justify-around ring-1 ring-black/[0.02] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as Tab)}
              className={`relative flex flex-col items-center py-3.5 rounded-3xl transition-all duration-500 active:scale-95 flex-1 outline-none group ${
                isActive ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabNav"
                  className="absolute inset-0 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-[28px] border border-slate-100/50"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center">
                <Icon 
                  size={18} 
                  strokeWidth={isActive ? 2.5 : 2} 
                  className={`transition-all duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-110 group-hover:text-slate-500'}`} 
                />
                <span className={`text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${isActive ? 'opacity-100 mt-1.5 translate-y-0' : 'opacity-0 h-0 translate-y-2'}`}>
                  {tab.label}
                </span>
                {tab.id === 'favorites' && favorites.length > 0 && (
                  <span className="absolute -top-1 -right-2 w-4 h-4 bg-rose-500 text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-[0_2px_8px_rgba(244,63,94,0.3)]">
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
