
import React from 'react';
import { motion } from 'framer-motion';
import { QuizResult } from '../types';

interface ResultProps {
  result: QuizResult;
  onRetake: () => void;
  onHome: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onRetake, onHome }) => {
  const { persona, userName } = result;

  return (
    <div className="flex flex-col h-full w-full bg-m3-background flutter-scroll">
      {/* Top Bar */}
      <header className="flex items-center h-16 px-4 shrink-0">
        <button onClick={onHome} className="size-12 flex items-center justify-center rounded-m3-full active:bg-m3-on-surface/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="flex-1 text-center m3-title-large">Your Match</span>
        <div className="size-12"></div>
      </header>

      <main className="flex-1 p-6 space-y-8 pb-32">
        <div className="text-center">
          <p className="m3-label-large text-m3-on-surface-variant">Congratulation, {userName}</p>
          <h2 className="m3-headline-medium text-m3-primary mt-1">You are a Cinema Legend!</h2>
        </div>

        {/* Legend Card */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="bg-m3-surface rounded-m3-xl overflow-hidden shadow-m3-elevation-2 border border-m3-outline/10"
        >
          <div className="h-96 w-full relative">
            <img src={persona.imageUrl} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-m3-surface via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="m3-headline-medium text-white mb-1">{persona.name}</h1>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-m3-full bg-m3-primary/20 backdrop-blur-md border border-m3-primary/30">
                <span className="text-[10px] font-bold text-m3-primary uppercase tracking-widest">{persona.title}</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {persona.traits.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-m3-medium bg-m3-secondaryContainer text-m3-on-secondary-container text-xs font-bold">#{t}</span>
              ))}
            </div>
            <p className="m3-label-large text-m3-on-surface-variant italic leading-relaxed">
              "{persona.description}"
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button className="h-14 rounded-m3-full bg-m3-primary text-m3-on-primary font-bold flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">share</span>
            Share Match
          </button>
          <button onClick={onRetake} className="h-14 rounded-m3-full border border-m3-outline text-m3-primary font-bold flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">restart_alt</span>
            Retake Quiz
          </button>
        </div>
      </main>

      {/* Flutter Floating Header-Action (Simulated as Sticky Footer) */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 flex justify-center pointer-events-none">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onHome}
          className="pointer-events-auto size-16 rounded-[24px] bg-m3-primary-container text-m3-on-primary-container shadow-m3-elevation-2 flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-3xl">home</span>
        </motion.button>
      </footer>
    </div>
  );
};

export default Result;
