import { PlayCircle, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const LESSONS = [
  {
    id: 'lesson-master',
    title: 'Seja bem vindos',
    duration: '05:30',
    category: 'Estratégia',
    thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop',
    description: 'O que você vai aprender aqui',
    videoUrl: 'https://drive.google.com/file/d/1-9DZBJTqbQIGj4sLoTgWrZaRHguWSMd_/preview'
  },
  {
    id: 'lesson-influencer',
    title: 'Como criar a influencer',
    duration: '08:45',
    category: 'Criação',
    thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop',
    description: 'Aprenda o passo a passo para criar sua própria influencer digital usando IA.',
    videoUrl: 'https://drive.google.com/file/d/1Y7BH-Y7dKV69yGoGprthyIJ9IxVYotq4/preview'
  },
  {
    id: 'lesson-utilidades',
    title: 'influencer para utilidades do lar',
    duration: '10:15',
    category: 'Nicho',
    thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
    description: 'Estratégias específicas para criar conteúdos de alta performance no nicho de casa e utilidades.',
    videoUrl: 'https://drive.google.com/file/d/19rVQC_k1iHPjTD0Z-LIWcS9dulM7TA59/preview'
  }
];

export default function VideoLessonsTab() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
            <div 
              className="relative aspect-[9/16] bg-slate-900 overflow-hidden cursor-pointer"
              onClick={() => lesson.videoUrl && setSelectedVideo(lesson.videoUrl)}
            >
              <iframe
                src={lesson.videoUrl}
                className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                title={lesson.title}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-20 h-20 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                  <PlayCircle size={40} className="text-amber-600 ml-1.5" />
                </div>
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
              <button 
                onClick={() => lesson.videoUrl && setSelectedVideo(lesson.videoUrl)}
                disabled={!lesson.videoUrl}
                className={`w-full py-5 rounded-[24px] font-black text-[12px] uppercase tracking-[0.25em] transition-all duration-500 shadow-lg active:scale-[0.98] ${
                  lesson.videoUrl 
                  ? 'bg-slate-900 text-white hover:bg-amber-600 shadow-slate-100 hover:shadow-amber-200' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                }`}
              >
                {lesson.videoUrl ? 'Assistir Agora' : 'Em Breve'}
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
            <p className="text-slate-400 text-base font-medium max-lg leading-relaxed">
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
