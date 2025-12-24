
import React from 'react';
import { motion } from 'framer-motion';
import { QuizResult } from '../types';

interface HistoryProps {
  items: QuizResult[];
  onBack: () => void;
  onSelect: (result: QuizResult) => void;
}

const History: React.FC<HistoryProps> = ({ items, onBack, onSelect }) => {
  return (
    <div className="flex flex-col h-full w-full bg-surface">
      <header className="flex items-center h-16 px-4 shrink-0 bg-surface/80 backdrop-blur-md sticky top-0 z-20 border-b border-white/5">
        <button onClick={onBack} className="size-12 flex items-center justify-center rounded-full active:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold tracking-tight">Recent Destinies</h1>
        <div className="size-12"></div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-[#938f99] text-center px-8">
            <span className="material-symbols-outlined text-6xl mb-4 opacity-20">history_edu</span>
            <p className="font-bold text-lg">No history yet</p>
            <p className="text-sm">Your cinematic soul matches will appear here once revealed.</p>
          </div>
        ) : (
          items.map((res, i) => (
            <motion.button 
              key={i}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(res)}
              className="w-full flex items-center gap-4 p-3 bg-glass border border-white/5 rounded-m3 transition-all hover:bg-white/5"
            >
              <div className="size-16 rounded-full border-2 border-primary/30 p-0.5 shrink-0">
                <img src={res.persona.imageUrl} className="w-full h-full object-cover rounded-full" alt="" />
              </div>
              <div className="flex-1 text-left">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{res.persona.title}</span>
                  <span className="text-[10px] text-white/30 uppercase">{res.timestamp.split(',')[0]}</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">{res.persona.name}</h3>
                <p className="text-xs text-white/40 truncate max-w-[180px]">Matched for: {res.userName}</p>
              </div>
              <span className="material-symbols-outlined text-white/20 px-2">chevron_right</span>
            </motion.button>
          ))
        )}
      </main>

      {/* Floating Action Button (M3) */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onBack}
        className="fixed bottom-6 right-6 size-16 rounded-[16px] bg-primary text-white shadow-m3-2 flex items-center justify-center transition-transform"
      >
        <span className="material-symbols-outlined text-3xl">play_arrow</span>
      </motion.button>
    </div>
  );
};

export default History;
