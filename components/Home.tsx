
import React from 'react';
import { motion } from 'framer-motion';

interface HomeProps {
  onStartQuiz: () => void;
  onViewHistory: () => void;
}

const Home: React.FC<HomeProps> = ({ onStartQuiz, onViewHistory }) => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Material 3 Top App Bar */}
      <header className="flex items-center h-16 px-4 justify-between shrink-0">
        <button className="flex size-12 items-center justify-center rounded-full active:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>
        <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">Cinema Persona</span>
        <button className="flex size-12 items-center justify-center rounded-full active:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px]">account_circle</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary-container text-on-primary-container border border-primary/20">
            <span className="text-[11px] font-bold tracking-widest uppercase">Version 2.0 • M3</span>
          </div>
          
          <h1 className="text-white text-6xl font-bold leading-[0.9] tracking-tighter text-glow">
            WHO IS<br/>
            YOUR<br/>
            <span className="text-primary">SOUL?</span>
          </h1>
          
          <p className="text-[#cac4d0] text-base font-light leading-relaxed max-w-[260px] mx-auto">
            Discover the Egyptian star that lives inside your intuition.
          </p>
        </motion.div>

        <div className="mt-12 w-full flex flex-col gap-4 max-w-[280px]">
          <motion.button 
            whileTap={{ scale: 0.96 }}
            onClick={onStartQuiz}
            className="h-16 rounded-m3 bg-primary text-white font-bold text-lg shadow-m3-2 flex items-center justify-center gap-3 relative overflow-hidden group"
          >
            <span className="material-symbols-outlined !text-[28px]">play_arrow</span>
            <span>START QUIZ</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-active:opacity-100 transition-opacity"></div>
          </motion.button>

          <motion.button 
            whileTap={{ scale: 0.96 }}
            onClick={onViewHistory}
            className="h-14 rounded-m3 border border-surface-variant bg-glass text-[#e6e1e5] font-medium text-sm flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined !text-[20px]">history</span>
            <span>View Recent Personas</span>
          </motion.button>
        </div>
      </main>

      <footer className="p-8 text-center">
        <div className="flex justify-center gap-1 opacity-20">
          <div className="size-1 rounded-full bg-white"></div>
          <div className="size-1 rounded-full bg-white"></div>
          <div className="size-1 rounded-full bg-white"></div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
