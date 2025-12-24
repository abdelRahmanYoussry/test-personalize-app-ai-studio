
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HomeProps {
  onStartQuiz: () => void;
  onViewHistory: () => void;
  onOpenDrawer: () => void;
}

const Home: React.FC<HomeProps> = ({ onStartQuiz, onViewHistory, onOpenDrawer }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="flex flex-col h-full w-full relative">
      {/* Flutter AppBar */}
      <header className="flex items-center h-16 px-4 shrink-0 bg-m3-background z-10">
        <button onClick={onOpenDrawer} className="size-12 flex items-center justify-center rounded-m3-full active:bg-m3-on-surface/10 transition-colors">
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>
        <span className="flex-1 text-center m3-title-large">Cinema Persona</span>
        <button onClick={() => setShowCode(true)} className="size-12 flex items-center justify-center rounded-m3-full active:bg-m3-on-surface/10 transition-colors text-m3-primary">
          <span className="material-symbols-outlined text-[24px]">code</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-12">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-m3-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <h1 className="m3-display-large text-[#e6e1e5]">
            FIND<br/>
            YOUR<br/>
            <span className="text-m3-primary">INNER STAR</span>
          </h1>
        </motion.div>

        <p className="m3-label-large text-m3-on-surface-variant max-w-[280px] leading-relaxed">
          Unlock your cinematic archetype based on intuition and the legacy of Egyptian film history.
        </p>

        {/* Flutter-style Buttons */}
        <div className="w-full flex flex-col gap-4 max-w-xs">
          <motion.button 
            whileTap={{ scale: 0.96 }}
            onClick={onStartQuiz}
            className="h-16 rounded-m3-xl bg-m3-primary-container text-m3-on-primary-container m3-title-large flex items-center justify-center gap-3 shadow-m3-elevation-1 active:shadow-none transition-shadow"
          >
            <span className="material-symbols-outlined text-[32px]">auto_awesome</span>
            <span>Take the Quiz</span>
          </motion.button>

          <button 
            onClick={onViewHistory}
            className="h-12 rounded-m3-xl border border-m3-outline text-m3-primary flex items-center justify-center gap-2 font-medium"
          >
            <span className="material-symbols-outlined">history</span>
            <span>View Recent</span>
          </button>
        </div>
      </main>

      <footer className="h-20 flex items-center justify-center px-4">
        <div className="bg-m3-surface-variant/30 px-4 py-2 rounded-m3-full flex items-center gap-2 border border-white/5">
          <span className="size-2 rounded-full bg-m3-primary animate-ping"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-m3-on-surface-variant uppercase">Flutter Mobile Ready</span>
        </div>
      </footer>

      {/* Flutter Source Modal Overlay */}
      <AnimatePresence>
        {showCode && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-0 z-50 bg-m3-background p-6 flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="m3-title-large">Flutter Source Code</h2>
              <button onClick={() => setShowCode(false)} className="size-12 rounded-full bg-white/5 flex items-center justify-center">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-black/40 rounded-m3-lg p-4 font-mono text-[10px] leading-tight text-m3-primary/80 selection:bg-m3-primary selection:text-black">
              <p className="text-white/40 mb-2">// Copy into your Flutter project</p>
              <pre className="whitespace-pre-wrap">
{`// 1. pubspec.yaml
// Add: google_generative_ai, shared_preferences, google_fonts

// 2. main.dart
// Contains the full Material 3 Scaffold and screen widgets.

// 3. gemini_service.dart
// Handles the AI analysis logic with JSON parsing.`}
              </pre>
            </div>
            <p className="m3-label-large text-m3-on-surface-variant mt-4 text-center">
              The full files have been generated in your workspace.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
