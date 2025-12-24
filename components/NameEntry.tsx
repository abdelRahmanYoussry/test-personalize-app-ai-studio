
import React, { useState } from 'react';

interface NameEntryProps {
  onSubmit: (name: string) => void;
  isLoading: boolean;
  onBack: () => void;
}

const NameEntry: React.FC<NameEntryProps> = ({ onSubmit, isLoading, onBack }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="flex flex-col h-full w-full px-5 py-8 justify-between animate-fade-in">
      <header>
        <button 
          onClick={onBack}
          className="flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/5 text-white/80"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      </header>

      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-glass backdrop-blur-xl rounded-[2rem] p-8 shadow-glass border border-glass-border relative overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-primary/50 blur-[2px] rounded-b-full"></div>
          
          <div className="mb-8 pt-4">
            <p className="text-primary/60 text-sm font-medium tracking-widest uppercase mb-3">Almost there...</p>
            <h1 className="text-white text-3xl font-bold leading-tight tracking-tight">Who are you?</h1>
            <p className="text-white/60 text-base font-normal mt-2 leading-relaxed">
              Enter your name to unlock your ancient cinematic soulmate.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-50 blur group-focus-within:opacity-100 group-focus-within:blur-md transition duration-500"></div>
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="relative block w-full bg-[#1a0d16] border-2 border-primary/30 text-white placeholder-primary/30 text-lg font-medium rounded-full py-4 px-6 focus:outline-none focus:border-primary focus:ring-0 transition-all h-16 text-center tracking-wide"
                autoFocus
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/70 pointer-events-none">
                <span className="material-symbols-outlined animate-pulse" style={{ fontSize: '20px' }}>edit</span>
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              disabled={!name.trim() || isLoading}
              className={`w-full relative overflow-hidden rounded-full h-14 flex items-center justify-center text-white text-lg font-bold tracking-wide transition-all ${
                !name.trim() || isLoading ? 'bg-white/10 text-white/20' : 'bg-primary shadow-neon hover:shadow-neon-strong active:scale-[0.98]'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <span className="animate-spin material-symbols-outlined">sync</span>
                  <span>Analyzing Vibe...</span>
                </div>
              ) : (
                <span className="relative z-10 flex items-center gap-2">
                  Reveal My Match
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>auto_awesome</span>
                </span>
              )}
              {!isLoading && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] animate-shimmer"></div>}
            </button>
            <p className="text-center text-xs text-white/30 font-light italic">Your cinematic destiny awaits.</p>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center opacity-20">
          <div className="flex gap-4 items-center">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white"></div>
            <span className="material-symbols-outlined">visibility</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameEntry;
