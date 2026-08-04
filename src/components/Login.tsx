import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Smartphone, ChevronRight, AlertCircle } from 'lucide-react';
import { AUTHORIZED_NUMBERS } from '../auth';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    // Simulate a small delay for better UX
    setTimeout(() => {
      const cleanPhone = phone.replace(/\D/g, '');
      if (AUTHORIZED_NUMBERS.includes(cleanPhone)) {
        onLogin();
      } else {
        setError(true);
        setIsSubmitting(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100/50 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-2xl border border-slate-100">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mb-6 border border-indigo-100 shadow-inner">
              <Lock className="text-indigo-600" size={32} />
            </div>
            <h1 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Área Restrita</h1>
            <p className="text-slate-500 font-medium">Insira seu número de telefone autorizado para acessar o conteúdo.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Seu WhatsApp</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                  <Smartphone size={20} />
                </div>
                <input 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: 11999999999"
                  className={`w-full pl-14 pr-6 py-5 bg-slate-50 border ${error ? 'border-red-200' : 'border-slate-100'} rounded-2xl text-lg font-bold focus:outline-none focus:ring-4 ${error ? 'focus:ring-red-50' : 'focus:ring-indigo-50'} transition-all placeholder:text-slate-300`}
                  required
                />
              </div>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 px-1 text-red-500 text-xs font-bold"
                >
                  <AlertCircle size={14} />
                  Número não autorizado ou incorreto.
                </motion.div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 hover:bg-indigo-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-slate-200 hover:shadow-indigo-200 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Entrar no App
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-50 flex flex-col items-center gap-4">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Suporte ao Acesso</span>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer border border-slate-100">
                <Smartphone size={18} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
