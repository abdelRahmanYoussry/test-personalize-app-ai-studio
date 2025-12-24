
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS } from '../constants';

interface QuizProps {
  onComplete: (answers: string[]) => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onCancel }) => {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const question = QUESTIONS[idx];
  const progress = ((idx + 1) / QUESTIONS.length) * 100;

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    if (idx < QUESTIONS.length - 1) {
      setAnswers(newAnswers);
      setIdx(idx + 1);
      setSelected(null);
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-m3-background">
      {/* Quiz Top Bar */}
      <header className="flex flex-col shrink-0">
        <div className="flex items-center h-16 px-4">
          <button onClick={onCancel} className="size-12 flex items-center justify-center rounded-m3-full active:bg-m3-on-surface/10 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
          <span className="flex-1 text-center m3-title-large">Step {idx + 1} of {QUESTIONS.length}</span>
          <div className="size-12"></div>
        </div>
        {/* Flutter-style LinearProgressIndicator */}
        <div className="h-1 w-full bg-m3-surface-variant overflow-hidden">
          <motion.div 
            className="h-full bg-m3-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
          />
        </div>
      </header>

      <main className="flex-1 flutter-scroll p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Question Card */}
            <div className="bg-m3-surface p-6 rounded-m3-xl shadow-m3-elevation-1 border border-m3-outline/10">
              <span className="m3-label-large text-m3-primary uppercase tracking-widest block mb-2">{question.scenario}</span>
              <h2 className="text-2xl font-medium text-m3-on-surface leading-snug">{question.text}</h2>
            </div>

            {/* Options List */}
            <div className="flex flex-col gap-3">
              {question.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className={`flex items-center gap-4 p-4 rounded-m3-xl border-2 transition-all text-left ${
                    selected === opt.id 
                      ? 'bg-m3-primary-container border-m3-primary' 
                      : 'bg-m3-surface border-transparent hover:border-m3-outline/20'
                  }`}
                >
                  <div className={`size-12 rounded-m3-full flex items-center justify-center shrink-0 ${
                    selected === opt.id ? 'bg-m3-on-primary-container text-m3-primary-container' : 'bg-m3-surface-variant text-m3-on-surface-variant'
                  }`}>
                    <span className="material-symbols-outlined text-[24px]">{opt.icon}</span>
                  </div>
                  <span className={`text-base font-medium flex-1 ${selected === opt.id ? 'text-m3-on-primary-container' : 'text-m3-on-surface'}`}>
                    {opt.text}
                  </span>
                  {selected === opt.id && (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="material-symbols-outlined text-m3-primary">check_circle</motion.span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="p-6 bg-m3-background border-t border-m3-surface-variant/20">
        <motion.button
          whileTap={{ scale: 0.98 }}
          disabled={!selected}
          onClick={handleNext}
          className={`w-full h-14 rounded-m3-full flex items-center justify-center gap-2 m3-title-large transition-all ${
            selected ? 'bg-m3-primary text-m3-on-primary shadow-m3-elevation-2' : 'bg-m3-surface-variant/30 text-m3-on-surface/20 cursor-not-allowed'
          }`}
        >
          <span>{idx === QUESTIONS.length - 1 ? 'Reveal Persona' : 'Next Question'}</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </motion.button>
      </footer>
    </div>
  );
};

export default Quiz;
