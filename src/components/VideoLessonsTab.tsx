import { PlayCircle, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { LESSONS } from '../data';

export default function VideoLessonsTab() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="space-y-12 pb-20">
      {/* Header Section */}
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-600/70">
                Academy Content
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">
              Masterclass <br className="hidden md:block" /> <span className="text-amber-500">Vídeo Aulas</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
              Domine as ferramentas de IA e técnicas de produção que estão dominando o mercado digital.
            </p>
          </div>
          <div className="px-4 md:px-6 py-3 md:py-4 bg-white/40 backdrop-blur-md border border-slate-200/40 rounded-2xl md:rounded-3xl shadow-sm flex items-center gap-3 md:gap-4">
            <div className="p-2 md:p-2.5 bg-amber-50 rounded-xl">
              <PlayCircle size={18} className="text-amber-600 md:w-5 md:h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Aulas</span>
              <span className="text-xl md:text-2xl font-black text-slate-900 leading-none">{LESSONS.length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {LESSONS.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-slate-100/60 card-shadow hover:card-shadow-hover transition-all duration-700 h-full"
          >
            <div 
              className="relative aspect-[9/16] bg-slate-950 overflow-hidden cursor-pointer"
              onClick={() => lesson.videoUrl && setSelectedVideo(lesson.videoUrl)}
            >
              <iframe
                src={lesson.videoUrl}
                className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-[1.02] pointer-events-none"
                title={lesson.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-14 h-14 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                  <PlayCircle size={24} className="text-amber-600 ml-0.5" />
                </div>
              </div>
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-lg text-[9px] font-black uppercase tracking-widest">
                  {lesson.category}
                </span>
              </div>
              <div className="absolute bottom-5 right-5">
                <span className="px-2.5 py-1.5 bg-white/90 backdrop-blur-sm text-slate-900 rounded-lg text-[9px] font-black tracking-wider shadow-sm">
                  {lesson.duration}
                </span>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow space-y-5">
              <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-amber-600 transition-colors duration-500 line-clamp-2 min-h-[3rem]">
                {lesson.title}
              </h3>
              <p className="text-slate-500 text-[13px] font-medium leading-relaxed line-clamp-3">
                {lesson.description}
              </p>
              
              <div className="pt-4 mt-auto">
                <button 
                  onClick={() => lesson.videoUrl && setSelectedVideo(lesson.videoUrl)}
                  disabled={!lesson.videoUrl}
                  className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-500 shadow-sm active:scale-95 ${
                    lesson.videoUrl 
                    ? 'bg-slate-900 text-white hover:bg-amber-600 shadow-slate-100 hover:shadow-xl hover:shadow-amber-100' 
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {lesson.videoUrl ? 'Assistir Agora' : 'Em Breve'}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subscription Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-slate-900 rounded-[40px]" />
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-colors duration-1000" />
        
        <div className="relative p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="w-20 h-20 bg-white/5 backdrop-blur-xl rounded-[28px] flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-700 shadow-2xl">
            <Sparkles size={36} className="text-amber-400" />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-tight leading-none">Novos conteúdos semanais</h3>
            <p className="text-slate-400 text-base font-medium max-w-xl leading-relaxed">
              Mantenha-se atualizado com as últimas tendências e técnicas. Nossa biblioteca cresce junto com o mercado.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-[32px] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <iframe
                src={selectedVideo}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
