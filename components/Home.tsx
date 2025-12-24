
import React from 'react';

interface HomeProps {
  onStartQuiz: () => void;
  onViewHistory: () => void;
}

const Home: React.FC<HomeProps> = ({ onStartQuiz, onViewHistory }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex items-center p-6 justify-between">
        <div className="flex size-10 items-center justify-center rounded-full bg-glass backdrop-blur-md border border-glass-border text-white">
          <span className="material-symbols-outlined !text-[20px]">menu</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Cinema Persona</span>
          <div className="h-[2px] w-8 bg-primary rounded-full mt-1"></div>
        </div>
        <div className="flex size-10 items-center justify-center rounded-full bg-glass backdrop-blur-md border border-glass-border text-white">
          <span className="material-symbols-outlined !text-[20px]">settings</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-primary text-[10px] font-bold tracking-widest uppercase">AI Powered Analysis</span>
          </div>
          <h1 className="text-white text-[56px] font-bold leading-none tracking-tighter text-glow">
            WHO ARE<br/>
            <span className="text-primary">YOU?</span>
          </h1>
          <p className="text-gray-300 text-base font-light leading-relaxed max-w-[280px] mx-auto">
            From the golden age of Egyptian cinema to modern classics. Find your star match.
          </p>
        </div>

        <button 
          onClick={onStartQuiz}
          className="relative group flex items-center justify-center h-20 px-10 rounded-full bg-gradient-to-r from-primary to-[#c21f8d] text-white shadow-neon-strong animate-pulse-glow hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined mr-3 !text-[32px]">play_circle</span>
          <span className="text-xl font-bold tracking-wide uppercase">Start Quiz</span>
        </button>
      </main>

      <div className="p-6 pb-12 w-full flex flex-col items-center">
        <div 
          onClick={onViewHistory}
          className="w-full max-w-[340px] rounded-2xl bg-glass backdrop-blur-xl border border-glass-border p-1 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center px-4 py-3">
            <div className="size-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">history</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white text-sm font-bold">Recent History</span>
              <span className="text-gray-400 text-xs">View your last 10 matches</span>
            </div>
          </div>
          <div className="pr-4">
            <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors">arrow_forward_ios</span>
          </div>
        </div>
        <p className="text-white/20 text-[10px] mt-6 font-light uppercase tracking-widest">
          Vibe Coding © 2024
        </p>
      </div>
    </div>
  );
};

export default Home;
