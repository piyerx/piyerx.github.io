
import React from 'react';
import type { View } from '../types';

interface LandingPageProps {
  setView: (view: View) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setView }) => {
  const navLinkStyle = "font-mono text-2xl md:text-3xl text-gray-500 hover:text-white transition-all duration-300 tracking-widest p-2 rounded-lg";

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen text-center p-4">
      
      <div style={{ animationDelay: '100ms' }} className="opacity-0 animate-fade-in-up">
        <h1 className="font-display text-7xl md:text-9xl font-normal text-white tracking-wide">
          Piyush Verma
        </h1>
      </div>

      <div style={{ animationDelay: '300ms' }} className="opacity-0 animate-fade-in-up">
        <p className="text-gray-500 text-lg md:text-xl mt-3 tracking-[0.3em]">
          CRAFTING EXPERIENCES IN CODE & PIXELS
        </p>
      </div>

      <div style={{ animationDelay: '600ms' }} className="opacity-0 animate-fade-in-up">
        <nav className="mt-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <button onClick={() => setView('developer')} className={`${navLinkStyle} hover:shadow-glow-subtle`}>
            DEVELOPER
          </button>
          <span className="w-px h-8 bg-gray-700 hidden md:block"></span>
          <button onClick={() => setView('editor')} className={`${navLinkStyle} hover:shadow-glow-subtle`}>
            EDITOR
          </button>
        </nav>
      </div>

    </div>
  );
};

export default LandingPage;