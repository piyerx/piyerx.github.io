import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import DeveloperPage from './components/DeveloperPage';
import EditorPage from './components/EditorPage';
import Grain from './components/Grain';
import type { View } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [exitingView, setExitingView] = useState<View | null>(null);

  const navigateTo = (newView: View) => {
    if (newView === view) return;
    
    setIsExiting(true);
    setExitingView(view);

    setTimeout(() => {
      setView(newView);
      setIsExiting(false);
      setExitingView(null);
    }, 700); // Match animation duration
  };

  const renderView = (currentView: View) => {
    const isVisible = view === currentView && !isExiting;
    const isFadingOut = exitingView === currentView;
    
    let animationClass = '';
    if (isVisible) {
      animationClass = 'animate-fade-in';
    } else if (isFadingOut) {
      animationClass = 'animate-fade-out';
    } else {
      animationClass = 'hidden';
    }

    return (
      <div className={`absolute inset-0 w-full h-full ${animationClass}`}>
        {currentView === 'landing' && <LandingPage setView={navigateTo} />}
        {currentView === 'developer' && <DeveloperPage setView={navigateTo} />}
        {currentView === 'editor' && <EditorPage setView={navigateTo} />}
      </div>
    );
  };

  return (
    <main className="bg-gradient-to-r from-gray-800 via-black to-black bg-[length:200%_200%] animate-background-pan text-gray-200 font-sans min-h-screen w-full relative">
      <Grain />
      <div className="relative w-full h-screen">
        {renderView('landing')}
        {renderView('developer')}
        {renderView('editor')}
      </div>
    </main>
  );
};

export default App;