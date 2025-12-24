
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS } from '../constants';

interface QuizProps {
  onComplete: (answers: string[]) => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onCancel }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const question = QUESTIONS[currentIdx];
  const progress = ((currentIdx + 1) / QUESTIONS.length) * 100;

  const handleNext = () => {
    if (!selectedOption) return;
    const newAnswers = [...answers, selectedOption];
    if (currentIdx < QUESTIONS.length - 1) {
      setAnswers(newAnswers);
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-surface">
      <header className="flex items-center h-16 px-4 shrink-0 bg-surface/80 backdrop-blur-md sticky top-0 z-20">
        <button onClick={onCancel} className="size-12 flex items-center justify-center rounded-full active:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex-1 px-4">
          <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
        <span className="text-xs font-bold text-primary tabular-nums ml-2">
          {currentIdx + 1}/{QUESTIONS.length}
        </span>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar p-5 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#2b2930] rounded-m3 overflow-hidden shadow-m3-1 mb-8">
              <div 
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url("${question.imageUrl}")` }}
              />
              <div className="p-6">
                <span className="text-primary text-[10px] font-black tracking-widest uppercase mb-2 block">{question.scenario}</span>
                <h2 className="text-2xl font-bold text-white leading-tight">{question.text}</h2>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {question.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedOption(opt.id)}
                  className={`flex items-center gap-4 p-4 rounded-m3 transition-all border-2 text-left relative overflow-hidden group active:scale-[0.98] ${
                    selectedOption === opt.id 
                      ? 'bg-primary/10 border-primary' 
                      : 'bg-glass border-white/5'
                  }`}
                >
                  <div className={`size-10 rounded-full flex items-center justify-center shrink-0 ${
                    selectedOption === opt.id ? 'bg-primary text-white' : 'bg-surface-variant text-white/70'
                  }`}>
                    <span className="material-symbols-outlined text-[20px]">{opt.icon}</span>
                  </div>
                  <span className={`text-base font-bold ${selectedOption === opt.id ? 'text-primary' : 'text-[#e6e1e5]'}`}>
                    {opt.text}
                  </span>
                  <div className="absolute right-6 opacity-40">
                    <div className={`size-6 rounded-full border-2 flex items-center justify-center ${
                      selectedOption === opt.id ? 'border-primary bg-primary' : 'border-white/20'
                    }`}>
                      {selectedOption === opt.id && <span className="material-symbols-outlined text-[14px] text-white">check</span>}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-surface via-surface to-transparent pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <motion.button
            whileTap={{ scale: 0.96 }}
            disabled={!selectedOption}
            onClick={handleNext}
            className={`w-full h-16 rounded-m3 flex items-center justify-center gap-2 font-bold text-lg shadow-m3-2 transition-all ${
              selectedOption ? 'bg-primary text-white' : 'bg-white/5 text-white/20 cursor-not-allowed'
            }`}
          >
            <span>{currentIdx === QUESTIONS.length - 1 ? 'Reveal Persona' : 'Next Step'}</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </motion.button>
        </div>
      </footer>
    </div>
  );
};

export default Quiz;
