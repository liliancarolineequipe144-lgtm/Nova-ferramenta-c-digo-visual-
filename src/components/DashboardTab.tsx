import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Video, 
  MessageSquare, 
  Users, 
  ArrowUpRight, 
  Clock, 
  Sparkles,
  PlayCircle,
  FileText
} from 'lucide-react';
import { VIDEO_PROMPTS, NARRATIVES, LESSONS, GARIMPADOS } from '../data';
import { AUTHORIZED_NUMBERS } from '../auth';

import { Tab } from '../types';

interface DashboardTabProps {
  setActiveTab: (tab: Tab) => void;
}

export default function DashboardTab({ setActiveTab }: DashboardTabProps) {
  const recentUpdates = [
    ...(VIDEO_PROMPTS || []).slice(-3).map(p => ({ ...p, updateType: 'Prompt' as const })),
    ...(LESSONS || []).slice(-2).map(l => ({ ...l, updateType: 'Aula' as const })),
    ...(GARIMPADOS || []).slice(-2).map(p => ({ ...p, updateType: 'Produto' as const })),
  ].sort((a, b) => (b.id || '').localeCompare(a.id || '')).slice(0, 3);

  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[2px] bg-indigo-600 rounded-full" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600/70">
            Feed de Hoje
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">
          Novidades do Dia.
        </h2>
        <p className="text-slate-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
          Os conteúdos mais recentes adicionados hoje para impulsionar seus resultados.
        </p>
      </div>

      {/* Daily Updates Section */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {recentUpdates.map((update, idx) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                boxShadow: ["0 0 0px rgba(79, 70, 229, 0)", "0 0 20px rgba(79, 70, 229, 0.15)", "0 0 0px rgba(79, 70, 229, 0)"]
              }}
              transition={{ 
                delay: idx * 0.1,
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              onClick={() => {
                if (update.updateType === 'Aula') setActiveTab('video-lessons');
                else if (update.updateType === 'Prompt') setActiveTab('prompts');
                else if (update.updateType === 'Produto') setActiveTab('products');
              }}
              className="flex items-center gap-6 p-8 bg-white border border-indigo-100/50 rounded-[32px] hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all group cursor-pointer active:scale-[0.99] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/20 to-transparent opacity-50" />
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${
                update.updateType === 'Aula' ? 'bg-amber-50 text-amber-600' : 
                update.updateType === 'Produto' ? 'bg-emerald-50 text-emerald-600' :
                'bg-indigo-50 text-indigo-600'
              }`}>
                {update.updateType === 'Aula' ? <PlayCircle size={28} /> : 
                 update.updateType === 'Produto' ? <LayoutDashboard size={28} /> :
                 <Sparkles size={28} />}
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${
                    update.updateType === 'Aula' ? 'text-amber-600' : 
                    update.updateType === 'Produto' ? 'text-emerald-600' :
                    'text-indigo-600'
                  }`}>
                    {update.updateType === 'Aula' ? 'Aula Exclusiva' : 
                     update.updateType === 'Produto' ? 'Novo Garimpo' :
                     'Prompt Premium'}
                  </span>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Novo Hoje
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                  {update.title}
                </h4>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-slate-300 group-hover:text-indigo-600 transition-colors">
                <span className="text-[10px] font-black uppercase tracking-widest">Acessar</span>
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Daily Tip Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-10 bg-slate-900 rounded-[40px] text-white relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
          <Sparkles size={80} />
        </div>
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <Clock className="text-white" size={16} />
            </div>
            <h4 className="text-base font-black uppercase tracking-widest text-indigo-400">Dica do Dia</h4>
          </div>
          <p className="text-xl md:text-2xl font-bold leading-relaxed italic text-slate-300">
            "Agora você pode remodelar qualquer prompt diretamente aqui no app! Use a aba de Prompts, selecione um estilo e clique em 'Remodelar' para adaptar para seu produto com IA."
          </p>
        </div>
      </motion.div>
    </div>
  );
}
