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
import { VIDEO_PROMPTS, NARRATIVES, LESSONS } from '../data';
import { AUTHORIZED_NUMBERS } from '../auth';

import { Tab } from '../types';

interface DashboardTabProps {
  setActiveTab: (tab: Tab) => void;
  userName: string;
}

export default function DashboardTab({ setActiveTab, userName }: DashboardTabProps) {
  const stats = [
    {
      label: 'Prompts Ativos',
      value: VIDEO_PROMPTS.length,
      icon: MessageSquare,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      trend: '+12% este mês'
    },
    {
      label: 'Narrativas',
      value: NARRATIVES.length,
      icon: FileText,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      trend: 'Atualizado hoje'
    },
    {
      label: 'Vídeo Aulas',
      value: LESSONS.length,
      icon: Video,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      trend: 'Novas aulas em breve'
    },
    {
      label: 'Membros Ativos',
      value: AUTHORIZED_NUMBERS.length,
      icon: Users,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      trend: 'Acesso Premium'
    }
  ];

  const recentUpdates = [
    ...VIDEO_PROMPTS.slice(-3).map(p => ({ ...p, updateType: 'Prompt' })),
    ...LESSONS.slice(-2).map(l => ({ ...l, updateType: 'Aula' })),
  ].sort(() => Math.random() - 0.5); // Randomize just for a "feed" look

  return (
    <div className="space-y-12 pb-20">
      {/* Welcome Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[2px] bg-indigo-600 rounded-full" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600/70">
            Painel de Controle
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">
          Olá, <span className="text-indigo-600">{userName || 'Criativo'}</span> <br />
          Veja o que há de novo.
        </h2>
        <p className="text-slate-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
          Acompanhe o crescimento da sua biblioteca de conteúdo e as últimas atualizações da plataforma.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-white border border-slate-100 rounded-[32px] card-shadow hover:card-shadow-hover transition-all duration-500 group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`p-4 ${stat.bg} rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 bg-slate-50 rounded-full border border-slate-100">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">{stat.trend}</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-black text-slate-900">{stat.value}</span>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Activity Feed */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="text-indigo-600" size={20} />
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Últimas Atualizações</h3>
            </div>
            <button 
              onClick={() => setActiveTab('prompts')}
              className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-2"
            >
              Ver tudo <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="space-y-4">
            {recentUpdates.map((update, idx) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => {
                  if ('updateType' in update) {
                    setActiveTab(update.updateType === 'Aula' ? 'video-lessons' : 'prompts');
                  }
                }}
                className="flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-3xl hover:border-indigo-100 transition-colors group cursor-pointer active:scale-[0.98]"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-2xl ${
                  'updateType' in update && update.updateType === 'Aula' ? 'bg-amber-50 text-amber-600' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  {'updateType' in update && update.updateType === 'Aula' ? <PlayCircle size={20} /> : <Sparkles size={20} />}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[9px] font-black uppercase tracking-widest ${
                      'updateType' in update && update.updateType === 'Aula' ? 'text-amber-600' : 'text-indigo-600'
                    }`}>
                      {'updateType' in update && update.updateType === 'Aula' ? 'Nova Aula' : 'Novo Prompt'}
                    </span>
                    <span className="text-[9px] font-bold text-slate-300">•</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Recente</span>
                  </div>
                  <h4 className="font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                    {update.title}
                  </h4>
                </div>
                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="p-8 bg-indigo-600 rounded-[32px] text-white shadow-xl shadow-indigo-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:rotate-12 transition-transform duration-700">
              <Sparkles size={64} />
            </div>
            <div className="relative z-10 space-y-6">
              <h4 className="text-xl font-black leading-tight">Dica do Dia</h4>
              <p className="text-indigo-100 text-sm font-medium leading-relaxed italic">
                "os prompts sao para esses produtos você precisa remodelar para seu produto , coloque a imagem do seu produto no chat gbt e o prompt e escreva : remodele esse prompt para esse produto"
              </p>
              <button 
                onClick={() => setActiveTab('prompts')}
                className="w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300"
              >
                Ver Prompts
              </button>
            </div>
          </div>

          <div className="p-8 bg-slate-900 rounded-[32px] text-white shadow-xl shadow-slate-200 relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="text-indigo-400" size={20} />
                <h4 className="text-base font-black uppercase tracking-widest">Acesso Rápido</h4>
              </div>
              <div className="space-y-2">
                <a 
                  href="https://wa.me/24999432601" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors text-xs font-bold group"
                >
                  Suporte VIP
                  <ArrowUpRight size={14} className="text-slate-500 group-hover:text-indigo-400" />
                </a>
                <a 
                  href="https://chat.whatsapp.com/JMaroxDVL9D4Nvu1JWTxuo?s=cl&p=a&ilr=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors text-xs font-bold group"
                >
                  Comunidade Gratuita
                  <ArrowUpRight size={14} className="text-slate-500 group-hover:text-indigo-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
