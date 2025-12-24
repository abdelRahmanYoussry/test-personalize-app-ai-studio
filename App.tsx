
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Screen, QuizResult } from './types';
import { CHARACTER_IMAGES } from './constants';
import { analyzeQuizResults } from './geminiService';

import Landing from './components/Landing';
import Home from './components/Home';
import Quiz from './components/Quiz';
import NameEntry from './components/NameEntry';
import Result from './components/Result';
import History from './components/History';

const screenVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LANDING);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [userName, setUserName] = useState('');
  const [currentResult, setCurrentResult] = useState<QuizResult | null>(null);
  const [history, setHistory] = useState<QuizResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem('cinema_persona_history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Failed to parse history", e);
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
        timestamp: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
      };

      setCurrentResult(result);
      const newHistory = [result, ...history].slice(0, 10);
      setHistory(newHistory);
      localStorage.setItem('cinema_persona_history', JSON.stringify(newHistory));
      setCurrentScreen(Screen.RESULT);
    } catch (error) {
      console.error("Analysis failed", error);
      alert("AI engine busy. Retrying...");
    } finally {
      setIsLoading(false);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.LANDING: return <Landing onStart={() => setCurrentScreen(Screen.HOME)} />;
      case Screen.HOME: return <Home onStartQuiz={() => setCurrentScreen(Screen.QUIZ)} onViewHistory={() => setCurrentScreen(Screen.HISTORY)} />;
      case Screen.QUIZ: return <Quiz onComplete={handleQuizComplete} onCancel={() => setCurrentScreen(Screen.HOME)} />;
      case Screen.NAME_ENTRY: return <NameEntry onSubmit={handleNameSubmit} isLoading={isLoading} onBack={() => setCurrentScreen(Screen.QUIZ)} />;
      case Screen.RESULT: return currentResult ? <Result result={currentResult} onRetake={() => setCurrentScreen(Screen.QUIZ)} onHome={() => setCurrentScreen(Screen.HOME)} /> : null;
      case Screen.HISTORY: return <History items={history} onBack={() => setCurrentScreen(Screen.HOME)} onSelect={(res) => { setCurrentResult(res); setCurrentScreen(Screen.RESULT); }} />;
      default: return <Landing onStart={() => setCurrentScreen(Screen.HOME)} />;
    }
  };

  return (
    <div className="relative w-full h-screen max-w-md mx-auto overflow-hidden bg-background-dark text-[#e6e1e5]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[150px]"></div>
      </div>

      <main className="relative z-10 h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={screenVariants}
            transition={springTransition}
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
