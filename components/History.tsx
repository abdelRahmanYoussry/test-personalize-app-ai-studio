
import React from 'react';
import { QuizResult } from '../types';

interface HistoryProps {
  items: QuizResult[];
  onBack: () => void;
  onSelect: (result: QuizResult) => void;
}

const History: React.FC<HistoryProps> = ({ items, onBack, onSelect }) => {
  return (
    <div className="flex flex-col h-full w-full overflow-y-auto no-scrollbar animate-fade-in">
      <header className="sticky top-0 z-50 px-4 pt-10 pb-4 bg-background-dark/80 backdrop-blur-xl border-b border-glass-border">
        <div className="flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold tracking-wide text-white">Past Personas</h1>
          <div className="size-10"></div>
        </div>
      </header>

      <div className="relative z-10 flex flex-col gap-4 p-4 pb-24">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center opacity-30">
            <span className="material-symbols-outlined text-6xl mb-4">history_toggle_off</span>
            <p className="text-lg">No history yet.</p>
            <p className="text-sm">Complete a quiz to see your personas here!</p>
          </div>
        ) : (
          items.map((res, i) => (
            <button 
              key={i}
              onClick={() => onSelect(res)}
              className="group bg-glass border border-glass-border w-full p-4 rounded-xl flex items-center justify-between transition-all hover:bg-white/5 hover:border-primary/50 hover:shadow-neon active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary blur opacity-20 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative size-16 rounded-full border-2 border-primary/50 p-0.5 bg-black/40 overflow-hidden">
                    <img 
                      alt={res.persona.name} 
                      className="h-full w-full rounded-full object-cover" 
                      src={res.persona.imageUrl}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-0.5">{res.persona.title}</span>
                  <h3 className="text-lg font-bold text-white leading-tight">{res.persona.name}</h3>
                  <div className="mt-1 flex items-center gap-1.5 opacity-60">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    <p className="text-sm font-light">{res.timestamp}</p>
                  </div>
                </div>
              </div>
              <div className="flex size-10 items-center justify-center rounded-full bg-white/5 text-primary opacity-60 group-hover:opacity-100 group-hover:bg-primary/20 transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </button>
          ))
        )}

        {items.length > 0 && (
          <div className="mt-4 flex justify-center opacity-30">
            <span className="material-symbols-outlined animate-bounce">keyboard_double_arrow_up</span>
          </div>
        )}
      </div>

      <button 
        onClick={onBack}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-neon hover:scale-105 active:scale-95 transition-transform"
      >
        <span className="material-symbols-outlined text-3xl">play_arrow</span>
      </button>
    </div>
  );
};

export default History;
