import { PlayCircle, BookOpen, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const LESSONS = [
  {
    id: 'lesson-1',
    title: 'Como usar o Veo 3.1 para Criativos',
    duration: '12:45',
    category: 'Inteligência Artificial',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    description: 'Aprenda as melhores técnicas de prompt para extrair o máximo do novo modelo de vídeo do Google.'
  },
  {
    id: 'lesson-2',
    title: 'Estratégias de Viralização no TikTok',
    duration: '08:20',
    category: 'Marketing',
    thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop',
    description: 'O segredo dos ganchos visuais e como manter a retenção do público nos primeiros segundos.'
  },
  {
    id: 'lesson-3',
    title: 'Edição de Vídeos UGC Profissionais',
    duration: '15:10',
    category: 'Produção',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop',
    description: 'Dominando o CapCut para criar vídeos que não parecem anúncios, mas vendem como um.'
  }
];

export default function VideoLessonsTab() {
  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[2px] bg-amber-600 rounded-full" />
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-amber-500/80">
              Academy
            </span>
          </div>
          <div className="flex items-end gap-4">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-none">Vídeo Aulas</h2>
            <div className="mb-1 px-4 py-1.5 bg-amber-50 text-amber-600 rounded-2xl text-[13px] font-black border border-amber-100/50 shadow-sm">
              {LESSONS.length}
            </div>
          </div>
          <p className="text-slate-500 text-base max-w-lg font-medium leading-relaxed">
            Tutoriais exclusivos para dominar a criação de conteúdo com inteligência artificial e alta performance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {LESSONS.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group bg-white rounded-[48px] overflow-hidden border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.1)] transition-all duration-700"
          >
            <div className="relative aspect-video bg-slate-100 overflow-hidden">
              <img 
                src={lesson.thumbnail} 
                alt={lesson.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-20 h-20 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                  <PlayCircle size={40} className="text-amber-600 ml-1.5" />
                </div>
              </div>
              <div className="absolute bottom-6 right-6 glass px-4 py-2 rounded-2xl border border-white/40 shadow-xl">
                <span className="text-[11px] font-black text-slate-900 flex items-center gap-2">
                  <Clock size={12} className="text-amber-600" /> {lesson.duration}
                </span>
              </div>
            </div>
            <div className="p-10 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-100/50">
                  {lesson.category}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-amber-600 transition-colors duration-500">
                  {lesson.title}
                </h3>
                <p className="text-slate-500 text-base font-medium leading-relaxed">
                  {lesson.description}
                </p>
              </div>
              <button className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-black text-[12px] uppercase tracking-[0.25em] hover:bg-amber-600 transition-all duration-500 shadow-lg shadow-slate-100 hover:shadow-amber-200 active:scale-[0.98]">
                Assistir Agora
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subscription Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-12 rounded-[48px] bg-slate-900 text-white relative overflow-hidden group"
      >
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-600/20 rounded-full blur-[100px] group-hover:bg-amber-500/30 transition-colors duration-1000" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[24px] flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-700">
            <Sparkles size={40} className="text-amber-400" />
          </div>
          <div className="space-y-3">
            <h3 className="text-3xl font-black italic tracking-tight leading-none">Novos conteúdos semanais</h3>
            <p className="text-slate-400 text-base font-medium max-w-lg leading-relaxed">
              Mantenha-se atualizado com as últimas tendências e técnicas. Nossa biblioteca cresce junto com o mercado.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
