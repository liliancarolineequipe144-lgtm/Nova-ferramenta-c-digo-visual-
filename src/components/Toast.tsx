import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

export type ToastType = 'success' | 'info' | 'error';

interface ToastProps {
  message: string;
  type?: ToastType;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type = 'success', isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const icons = {
    success: <Check size={18} className="text-emerald-500" />,
    info: <Info size={18} className="text-indigo-500" />,
    error: <AlertCircle size={18} className="text-rose-500" />,
  };

  const backgrounds = {
    success: 'bg-white border-emerald-100',
    info: 'bg-white border-indigo-100',
    error: 'bg-white border-rose-100',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed bottom-32 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-48px)] max-w-sm"
        >
          <div className={`flex items-center gap-4 p-4 rounded-2xl border shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] ${backgrounds[type]}`}>
            <div className={`p-2 rounded-xl ${type === 'success' ? 'bg-emerald-50' : type === 'info' ? 'bg-indigo-50' : 'bg-rose-50'}`}>
              {icons[type]}
            </div>
            <p className="text-[13px] font-bold text-slate-900 flex-grow">{message}</p>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-slate-100 rounded-lg transition-colors text-slate-400"
            >
              <Check size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
