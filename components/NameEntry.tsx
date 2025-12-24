
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <div className="flex flex-col h-full w-full bg-m3-background">
      <header className="h-16 flex items-center px-4">
        <button 
          onClick={onBack}
          className="size-12 flex items-center justify-center rounded-m3-full active:bg-m3-on-surface/10 text-m3-on-surface"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col p-8 justify-center items-center text-center">
        <div className="bg-m3-surface p-8 rounded-m3-xl shadow-m3-1 border border-m3-outline/10 w-full max-w-sm">
          <div className="size-16 rounded-m3-full bg-m3-primary-container text-m3-on-primary-container flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-3xl">badge</span>
          </div>
          
          <h2 className="m3-headline-medium text-m3-on-surface mb-2">Identify Yourself</h2>
          <p className="m3-body-medium text-m3-on-surface-variant mb-8">
            The script is ready, but we need the leading star's name.
          </p>

          <div className="space-y-6 w-full">
            {/* M3 Outlined Text Field Simulation */}
            <div className="relative group w-full">
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                disabled={isLoading}
                className="w-full h-14 bg-transparent border-2 border-m3-outline rounded-m3-sm px-4 text-m3-on-surface focus:border-m3-primary focus:outline-none transition-all placeholder:text-m3-on-surface-variant/50"
                autoFocus
              />
              <label className="absolute -top-3 left-3 px-1 bg-m3-surface text-m3-primary text-xs font-medium">Full Name</label>
            </div>

            <button 
              onClick={handleSubmit}
              disabled={!name.trim() || isLoading}
              className={`w-full h-14 rounded-m3-full flex items-center justify-center gap-2 m3-title-large shadow-m3-2 transition-all ${
                !name.trim() || isLoading 
                  ? 'bg-m3-surface-variant/30 text-m3-on-surface/20' 
                  : 'bg-m3-primary text-m3-on-primary'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <div className="size-5 border-2 border-m3-on-primary border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm">Analyzing Profile...</span>
                </div>
              ) : (
                <>
                  <span>Reveal Destiny</span>
                  <span className="material-symbols-outlined">auto_awesome</span>
                </>
              )}
            </button>
          </div>
        </div>
      </main>

      <footer className="h-20 flex items-center justify-center">
        <div className="flex gap-1.5 opacity-10">
          {[...Array(5)].map((_, i) => <div key={i} className="size-1 bg-white rounded-full"></div>)}
        </div>
      </footer>
    </div>
  );
};

export default NameEntry;
