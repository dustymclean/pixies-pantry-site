import { User, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Account() {
  return (
    <div className="bg-[#FAFAFA] text-stone-800 selection:bg-rose-100 selection:text-rose-900 min-h-screen">
      <header className="pt-48 pb-24 px-6 relative overflow-hidden bg-white border-b border-stone-100">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-50/30 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-stone-50 border border-stone-200 rounded-full mb-8 shadow-sm"
          >
            <User className="w-3 h-3 text-stone-400" />
            <span className="text-[10px] font-black text-stone-500 uppercase tracking-[0.4em]">User Portal</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif tracking-tighter text-stone-900 mb-8 leading-tight"
          >
            Patient <span className="italic text-stone-400 font-light">Account.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 text-xl font-serif italic max-w-2xl mx-auto leading-relaxed antialiased"
          >
            Secure access to your hardware registry, order tracking, and clinical documentation.
          </motion.p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        <section className="bg-white border border-stone-200 rounded-[3rem] p-10 md:p-20 overflow-hidden relative shadow-sm text-center">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-50/40 rounded-full -mr-20 -mb-20 blur-3xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h3 className="text-3xl font-bold tracking-tight text-stone-900 leading-tight">System Migration</h3>
            <p className="text-stone-500 leading-relaxed font-serif italic text-lg antialiased">
              The account portal is undergoing maintenance to implement secure FSA/HSA payment rails. If you need to track a current order or update your coordinates, please route your inquiry through the support desk.
            </p>
            <a href="/support" className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl shadow-stone-200">
              Contact Support <ArrowRight className="w-3 h-3 ml-2" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}