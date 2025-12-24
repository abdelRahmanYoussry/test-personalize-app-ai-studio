
import React from 'react';
import { motion } from 'framer-motion';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col h-full w-full p-8 justify-between bg-m3-background overflow-hidden">
      {/* Top Graphic */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="relative"
        >
          {/* Decorative Rings */}
          <div className="absolute inset-0 -m-8 border border-m3-primary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute inset-0 -m-16 border border-m3-primary/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
          
          <div className="relative w-56 h-56 rounded-m3-xl overflow-hidden shadow-m3-3 border-2 border-m3-outline/20">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6_zDifemRdiVUkSfNKHT46AD0mtxzkmzChnELA5LQciisR-xA_9siO9bC3Afx9cFUx-QSiWvhFmWZtq2kauTsgGFa5pUGosVd59aRYFgQ-0Eq92y4iNhto23t8i2o38h9aGoFMCA5ZYSQDcd0wjPktg60HfbHHSRws0RSZMLCTTpOkDYEZDUTuJnCWSMCf7IdAuParrB543Ucnx4qQWSSGp-pUu_Mqi17HjbcJo7egPziwZsK8Esk2_eEbSuyQlgr2ML5rhTB4pk" 
              className="w-full h-full object-cover grayscale brightness-110"
              alt="Cinematic Icon"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-m3-primary-container/40 to-transparent"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <h1 className="m3-display-large text-white mb-2 tracking-tighter">
            Cinema<br/>
            <span className="text-m3-primary">Persona</span>
          </h1>
          <p className="m3-body-medium text-m3-on-surface-variant max-w-[240px] mx-auto opacity-70">
            A journey into the golden age of Egyptian cinema legends.
          </p>
        </motion.div>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-6 items-center">
        <div className="flex p-1 bg-m3-surface-variant/30 rounded-m3-full border border-m3-outline/20">
          <button className="px-6 py-2 rounded-m3-full m3-label-large bg-m3-primary text-m3-on-primary shadow-m3-1">English</button>
          <button className="px-6 py-2 rounded-m3-full m3-label-large text-m3-on-surface-variant">العربية</button>
        </div>

        <motion.button 
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="w-full h-16 rounded-m3-xl bg-m3-primary text-m3-on-primary m3-title-large shadow-m3-2 flex items-center justify-center gap-3 active:shadow-none transition-shadow m3-state-layer"
        >
          <span>Get Started</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </motion.button>
        
        <p className="m3-label-large text-m3-on-surface-variant/40 tracking-[0.2em] uppercase">Built with Flutter Web</p>
      </div>
    </div>
  );
};

export default Landing;
