
import React from 'react';
import { QuizResult } from '../types';

interface ResultProps {
  result: QuizResult;
  onRetake: () => void;
  onHome: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onRetake, onHome }) => {
  const { persona, userName } = result;

  return (
    <div className="flex flex-col h-full w-full overflow-y-auto no-scrollbar animate-fade-in">
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background-dark/80 backdrop-blur-xl border-b border-white/5">
        <button onClick={onHome} className="flex size-10 items-center justify-center rounded-full active:bg-white/10 text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-white text-sm font-bold tracking-widest uppercase opacity-80">The Reveal</h2>
        <button onClick={onRetake} className="flex items-center justify-center rounded-full px-3 py-1 text-primary active:bg-primary/10">
          <span className="text-sm font-bold">Retake</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col p-4 pb-32">
        <div className="text-center mb-6 pt-4 animate-slide-up">
          <p className="text-white/70 text-lg font-medium leading-tight">
            <span className="text-primary font-bold">{userName}</span>, your movie soulmate is...
          </p>
        </div>

        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-neon-strong mb-8 group animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80 z-10"></div>
          <div 
            className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-1000 group-hover:scale-105" 
            style={{ backgroundImage: `url("${persona.imageUrl}")` }}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-center">
            <h1 className="text-4xl font-bold leading-none tracking-tighter text-white mb-2 text-glow">{persona.name}</h1>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40">
              <span className="text-primary text-xs font-bold tracking-[0.15em] uppercase">{persona.title}</span>
            </div>
          </div>
        </div>

        <div className="mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-wrap justify-center gap-3">
            {persona.traits.map((trait, idx) => (
              <div key={idx} className="flex h-9 items-center justify-center px-5 rounded-full border border-primary/40 bg-primary/5 shadow-neon">
                <span className="text-primary text-sm font-bold">{trait}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center gap-2 mb-3 px-2 opacity-80">
            <span className="material-symbols-outlined text-primary text-xl">play_circle</span>
            <h3 className="text-sm font-bold uppercase tracking-wider">Iconic Moment</h3>
          </div>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-neon bg-black">
            <iframe 
              className="w-full h-full opacity-90"
              src={`https://www.youtube.com/embed/${persona.youtubeId}?controls=0&modestbranding=1&rel=0`}
              title="Movie Scene Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-glass backdrop-blur-md border border-glass-border animate-slide-up" style={{ animationDelay: '600ms' }}>
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-3xl text-primary/80 shrink-0">auto_awesome</span>
            <div>
              <h4 className="text-lg font-bold mb-2">Why this match?</h4>
              <p className="text-gray-300 text-sm leading-relaxed font-body">
                {persona.description}
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 z-50 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <button className="w-full h-14 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg shadow-neon active:scale-[0.98] transition-all flex items-center justify-center gap-3">
            <span>Share your Vibe</span>
            <span className="material-symbols-outlined">ios_share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
