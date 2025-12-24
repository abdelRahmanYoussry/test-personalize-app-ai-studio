
import React from 'react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col h-full w-full p-6 justify-between animate-fade-in">
      <div className="flex-1 flex flex-col items-center justify-center mt-8">
        <div className="relative group animate-float">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-90"></div>
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white/20 shadow-neon bg-black/40">
            <div 
              className="w-full h-full bg-center bg-cover" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6_zDifemRdiVUkSfNKHT46AD0mtxzkmzChnELA5LQciisR-xA_9siO9bC3Afx9cFUx-QSiWvhFmWZtq2kauTsgGFa5pUGosVd59aRYFgQ-0Eq92y4iNhto23t8i2o38h9aGoFMCA5ZYSQDcd0wjPktg60HfbHHSRws0RSZMLCTTpOkDYEZDUTuJnCWSMCf7IdAuParrB543Ucnx4qQWSSGp-pUu_Mqi17HjbcJo7egPziwZsK8Esk2_eEbSuyQlgr2ML5rhTB4pk")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-overlay"></div>
          </div>
        </div>

        <div className="mt-10 text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Discover Your <br/>
            <span className="text-primary text-glow">Inner Star.</span>
          </h1>
          <p className="text-white/60 text-lg font-light max-w-[280px] mx-auto">
            The ultimate Egyptian cinema personality quiz.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 mb-8 w-full">
        <div className="flex justify-center">
          <div className="bg-glass backdrop-blur-md p-1.5 rounded-full flex items-center border border-glass-border">
            <button className="px-6 py-2 rounded-full text-sm font-bold bg-primary shadow-neon text-white">EN</button>
            <button className="px-6 py-2 rounded-full text-sm font-bold text-white/50 hover:text-white transition-colors">AR</button>
          </div>
        </div>

        <button 
          onClick={onStart}
          className="group relative w-full h-16 rounded-full bg-primary overflow-hidden shadow-neon active:scale-[0.98] transition-all"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
          <span className="relative z-10 flex items-center justify-center gap-3 text-white text-lg font-bold tracking-wide uppercase">
            Start Quiz
            <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </span>
        </button>
        <p className="text-center text-[10px] text-white/30 uppercase tracking-[0.2em]">v2.0 • Vibe Coding Edition</p>
      </div>
    </div>
  );
};

export default Landing;
