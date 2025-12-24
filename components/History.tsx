
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
    <div className="flex flex-col h-full w-full bg-m3-background">
      <header className="flex items-center h-16 px-4 shrink-0 bg-m3-surface/50 backdrop-blur-md sticky top-0 z-20 border-b border-m3-outline/10">
        <button onClick={onBack} className="size-12 flex items-center justify-center rounded-m3-full active:bg-m3-on-surface/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center m3-title-large">Recent Personas</h1>
        <div className="size-12"></div>
      </header>

      <main className="flex-1 flutter-scroll p-4 space-y-3">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-m3-on-surface-variant text-center px-12 opacity-40">
            <span className="material-symbols-outlined text-6xl mb-4">history_edu</span>
            <p className="m3-title-large">No matches yet</p>
            <p className="m3-body-medium mt-2">Finish a quiz to see your previous personas here.</p>
          </div>
        ) : (
          items.map((res, i) => (
            <motion.button 
              key={i}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(res)}
              className="w-full flex items-center gap-4 p-4 bg-m3-surface border border-m3-outline/5 rounded-m3-xl transition-all active:bg-m3-on-surface/5 shadow-m3-1"
            >
              <div className="size-14 rounded-m3-full border-2 border-m3-primary/30 p-0.5 shrink-0 overflow-hidden">
                <img src={res.persona.imageUrl} className="w-full h-full object-cover rounded-full" alt="" />
              </div>
              <div className="flex-1 text-left overflow-hidden">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-[10px] font-black text-m3-primary uppercase tracking-widest truncate">{res.persona.title}</span>
                  <span className="text-[10px] text-m3-on-surface-variant font-bold opacity-60 whitespace-nowrap ml-2">
                    {res.timestamp.split(',')[0]}
                  </span>
                </div>
                <h3 className="m3-title-large text-m3-on-surface leading-tight truncate">{res.persona.name}</h3>
                <p className="m3-body-medium text-m3-on-surface-variant opacity-60 truncate">Matched with: {res.userName}</p>
              </div>
              <span className="material-symbols-outlined text-m3-on-surface-variant/40">chevron_right</span>
            </motion.button>
          ))
        )}
      </main>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onBack}
        className="fixed bottom-6 right-6 size-16 rounded-m3-xl bg-m3-primary text-m3-on-primary shadow-m3-2 flex items-center justify-center transition-transform m3-state-layer"
      >
        <span className="material-symbols-outlined text-3xl">play_arrow</span>
      </motion.button>
    </div>
  );
};

export default History;
