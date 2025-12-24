
import React, { useState, useEffect } from 'react';
import { Screen, QuizResult, AIResponse } from './types';
import { QUESTIONS, CHARACTER_IMAGES } from './constants';
import { analyzeQuizResults } from './geminiService';

// Component Imports (Defined below in the same file for simplicity as per requirements)
import Landing from './components/Landing';
import Home from './components/Home';
import Quiz from './components/Quiz';
import NameEntry from './components/NameEntry';
import Result from './components/Result';
import History from './components/History';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LANDING);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [userName, setUserName] = useState('');
  const [currentResult, setCurrentResult] = useState<QuizResult | null>(null);
  const [history, setHistory] = useState<QuizResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load history from localStorage on mount
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

  const startQuiz = () => {
    setUserAnswers([]);
    setCurrentScreen(Screen.QUIZ);
  };

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
      console.error("Quiz analysis failed", error);
      alert("Something went wrong with the AI analysis. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const viewHistory = () => setCurrentScreen(Screen.HISTORY);
  const goHome = () => setCurrentScreen(Screen.HOME);
  const goBackToLanding = () => setCurrentScreen(Screen.LANDING);

  return (
    <div className="relative w-full h-screen max-w-md mx-auto overflow-hidden bg-background-dark text-white font-display">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-cinema-grain opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full w-full">
        {currentScreen === Screen.LANDING && <Landing onStart={() => setCurrentScreen(Screen.HOME)} />}
        {currentScreen === Screen.HOME && <Home onStartQuiz={startQuiz} onViewHistory={viewHistory} />}
        {currentScreen === Screen.QUIZ && <Quiz onComplete={handleQuizComplete} onCancel={goHome} />}
        {currentScreen === Screen.NAME_ENTRY && (
          <NameEntry 
            onSubmit={handleNameSubmit} 
            isLoading={isLoading} 
            onBack={() => setCurrentScreen(Screen.QUIZ)} 
          />
        )}
        {currentScreen === Screen.RESULT && currentResult && (
          <Result 
            result={currentResult} 
            onRetake={startQuiz} 
            onHome={goHome} 
          />
        )}
        {currentScreen === Screen.HISTORY && (
          <History 
            items={history} 
            onBack={goHome} 
            onSelect={(res) => {
              setCurrentResult(res);
              setCurrentScreen(Screen.RESULT);
            }} 
          />
        )}
      </div>
    </div>
  );
};

export default App;
