
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Screen, QuizResult } from './types';
import { CHARACTER_IMAGES } from './constants';
import { analyzeQuizResults } from './geminiService';

// Widget Components
import Landing from './components/Landing';
import Home from './components/Home';
import Quiz from './components/Quiz';
import NameEntry from './components/NameEntry';
import Result from './components/Result';
import History from './components/History';

const fadeThrough = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
};

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LANDING);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [userName, setUserName] = useState('');
  const [currentResult, setCurrentResult] = useState<QuizResult | null>(null);
  const [history, setHistory] = useState<QuizResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cinema_persona_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("History parse error", e);
      }
    }
  }, []);

  const handleQuizComplete = (answers: string[]) => {
    setUserAnswers(answers);
    setCurrentScreen(Screen.NAME_ENTRY);
  };

  const handleNameSubmit = async (name: string) => {
    setUserName(name);
    setIsLoading(true);
    try {
      const aiResponse = await analyzeQuizResults(userAnswers);
      const persona = {
        name: aiResponse.personaName,
        title: aiResponse.title,
        traits: aiResponse.traits,
        description: aiResponse.reasoning,
        imageUrl: CHARACTER_IMAGES[aiResponse.personaName] || CHARACTER_IMAGES["Ahmed Helmy"],
        youtubeId: aiResponse.youtubeId
      };
      const result: QuizResult = {
        userName: name,
        persona,
        timestamp: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
      setCurrentResult(result);
      const newHistory = [result, ...history].slice(0, 10);
      setHistory(newHistory);
      localStorage.setItem('cinema_persona_history', JSON.stringify(newHistory));
      setCurrentScreen(Screen.RESULT);
    } catch (e) {
      alert("AI Sync Failed. Retrying connection...");
    } finally {
      setIsLoading(false);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.LANDING: return <Landing onStart={() => setCurrentScreen(Screen.HOME)} />;
      case Screen.HOME: return <Home onStartQuiz={() => setCurrentScreen(Screen.QUIZ)} onViewHistory={() => setCurrentScreen(Screen.HISTORY)} onOpenDrawer={() => setIsDrawerOpen(true)} />;
      case Screen.QUIZ: return <Quiz onComplete={handleQuizComplete} onCancel={() => setCurrentScreen(Screen.HOME)} />;
      case Screen.NAME_ENTRY: return <NameEntry onSubmit={handleNameSubmit} isLoading={isLoading} onBack={() => setCurrentScreen(Screen.QUIZ)} />;
      case Screen.RESULT: return currentResult ? <Result result={currentResult} onRetake={() => setCurrentScreen(Screen.QUIZ)} onHome={() => setCurrentScreen(Screen.HOME)} /> : null;
      case Screen.HISTORY: return <History items={history} onBack={() => setCurrentScreen(Screen.HOME)} onSelect={(res) => { setCurrentResult(res); setCurrentScreen(Screen.RESULT); }} />;
      default: return <Landing onStart={() => setCurrentScreen(Screen.HOME)} />;
    }
  };

  return (
    <div className="flutter-container shadow-2xl">
      {/* Drawer Overlay (Flutter Drawer Simulation) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="absolute inset-0 z-40 bg-black/70 backdrop-blur-[2px]"
            />
            <motion.div 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="absolute inset-y-0 left-0 w-[280px] z-50 bg-m3-surface rounded-r-m3-xl shadow-m3-3 p-4 flex flex-col"
            >
              <div className="p-4 mb-8">
                <div className="size-16 rounded-m3-full bg-m3-primary-container text-m3-on-primary-container flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl">movie</span>
                </div>
                <h2 className="m3-title-large text-m3-on-surface">Cinema Persona</h2>
                <p className="m3-label-large text-m3-on-surface-variant opacity-60">Version 2.0.4</p>
              </div>
              <div className="space-y-1">
                {[
                  { icon: 'history', label: 'Match History' },
                  { icon: 'language', label: 'App Language' },
                  { icon: 'settings', label: 'Preferences' },
                  { icon: 'help', label: 'How it works' },
                ].map((item, i) => (
                  <button key={i} className="w-full flex items-center gap-3 p-4 rounded-m3-full m3-label-large text-m3-on-surface hover:bg-m3-on-surface/5 active:bg-m3-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-m3-on-surface-variant">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="relative flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeThrough}
            transition={{ duration: 0.35, ease: [0.4, 0.0, 0.2, 1] }}
            className="h-full w-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
