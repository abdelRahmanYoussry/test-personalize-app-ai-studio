
import React, { useState } from 'react';
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
    <div className="flex flex-col h-full w-full px-4 pb-6">
      <header className="flex items-center justify-between pt-6 pb-2">
        <button 
          onClick={() => { if(currentIdx > 0) setCurrentIdx(currentIdx - 1); }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Quiz</span>
        </div>
        <button 
          onClick={onCancel}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </header>

      <div className="flex flex-col gap-2 py-4">
        <div className="flex justify-between items-end mb-1 px-1">
          <span className="text-white/60 text-sm font-medium font-body">Question {currentIdx + 1} of {QUESTIONS.length}</span>
          <span className="text-primary text-xs font-bold tracking-wide">{Math.round(progress)}%</span>
        </div>
        <div className="flex w-full gap-1.5 h-1.5">
          {QUESTIONS.map((_, i) => (
            <div 
              key={i} 
              className={`h-full flex-1 rounded-full transition-all duration-500 ${
                i < currentIdx ? 'bg-primary shadow-neon' : 
                i === currentIdx ? 'bg-white animate-pulse' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>

      <main className="flex-1 flex flex-col justify-center gap-6 py-2 overflow-y-auto no-scrollbar">
        <div className="relative w-full rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden">
          <div 
            className="h-44 w-full bg-cover bg-center relative" 
            style={{ backgroundImage: `linear-gradient(180deg, rgba(34, 16, 28, 0) 0%, rgba(34, 16, 28, 0.8) 100%), url("${question.imageUrl}")` }}
          >
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="text-[10px] font-bold tracking-wider text-white uppercase">{question.scenario}</span>
            </div>
          </div>
          <div className="p-6 pt-2">
            <h2 className="text-2xl font-bold leading-tight text-white mb-2">{question.text}</h2>
            <p className="text-white/60 text-sm font-body">Choose the reaction that best fits your instinct.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {question.options.map((opt) => (
            <label 
              key={opt.id}
              className={`group relative flex items-center gap-4 rounded-xl p-4 cursor-pointer transition-all duration-300 border ${
                selectedOption === opt.id ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5 hover:bg-white/10'
              }`}
            >
              <input 
                type="radio" 
                name="quiz_option" 
                className="sr-only" 
                checked={selectedOption === opt.id}
                onChange={() => setSelectedOption(opt.id)}
              />
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                selectedOption === opt.id ? 'bg-primary text-white' : 'bg-white/10 text-white'
              }`}>
                <span className="material-symbols-outlined text-[20px]">{opt.icon}</span>
              </div>
              <span className={`grow text-white text-base font-bold transition-colors ${selectedOption === opt.id ? 'text-primary' : ''}`}>
                {opt.text}
              </span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedOption === opt.id ? 'border-primary bg-primary' : 'border-white/20'
              }`}>
                {selectedOption === opt.id && <span className="material-symbols-outlined text-[14px] text-black">check</span>}
              </div>
            </label>
          ))}
        </div>
      </main>

      <footer className="mt-auto pt-4">
        <button 
          onClick={handleNext}
          disabled={!selectedOption}
          className={`w-full flex items-center justify-center gap-2 rounded-full h-14 transition-all text-white text-lg font-bold ${
            selectedOption ? 'bg-primary shadow-neon active:scale-[0.98]' : 'bg-white/10 text-white/30 cursor-not-allowed'
          }`}
        >
          <span>{currentIdx === QUESTIONS.length - 1 ? 'See Result' : 'Next Question'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
};

export default Quiz;
