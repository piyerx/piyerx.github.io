import React from 'react';
import { ArrowLeft, Clapperboard, PlayCircle } from 'lucide-react';
import type { View, FilmWork } from '../types';
import { FEATURED_FILM, COMMERCIAL_WORK, PERSONAL_PROJECTS, FREELANCE_REELS } from '../constants';
import Footer from './Footer';

interface EditorPageProps {
  setView: (view: View) => void;
}

const FilmCard: React.FC<{ work: FilmWork }> = ({ work }) => (
  <div className="group overflow-hidden border border-gray-800 bg-black rounded-sm transition-all duration-300 hover:border-gray-600 hover:shadow-glow-subtle">
    <div className="relative aspect-w-16 aspect-h-9 w-full overflow-hidden">
      <img 
        src={work.thumbnailUrl} 
        alt={work.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <PlayCircle className="w-16 h-16 text-white/80" />
      </div>
    </div>
    <div className="p-5">
      <a href="https://github.com/piyerx" target="_blank" rel="noopener noreferrer" className="hover:underline">
        <h3 className="font-mono text-lg text-white">{work.title}</h3>
      </a>
      <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-1">{work.role}</p>
      <p className="text-gray-400 mt-3 font-sans text-sm">{work.description}</p>
    </div>
  </div>
);

const FeaturedFilmCard: React.FC<{ work: FilmWork }> = ({ work }) => (
  <div className="group relative overflow-hidden border border-gray-800 bg-black rounded-sm mb-16 transition-all duration-300 hover:border-gray-500 hover:shadow-glow-subtle">
    <div className="md:flex">
      <div className="md:w-3/5">
        <div className="relative aspect-w-16 aspect-h-9 w-full overflow-hidden">
          <img 
            src={work.thumbnailUrl} 
            alt={work.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
           <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <PlayCircle className="w-20 h-20 text-white/80" />
          </div>
        </div>
      </div>
      <div className="md:w-2/5 p-8 flex flex-col justify-center">
        {work.wip && (
          <span className="absolute top-4 right-4 bg-yellow-400/10 text-yellow-300 text-xs font-mono px-2 py-1 rounded-sm">IN PRODUCTION</span>
        )}
        <a href="https://github.com/piyerx" target="_blank" rel="noopener noreferrer" className="hover:underline">
          <h3 className="font-mono text-3xl text-white">{work.title}</h3>
        </a>
        <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mt-2">{work.role}</p>
        <p className="text-gray-400 mt-4 font-sans">{work.description}</p>
      </div>
    </div>
  </div>
);

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-mono text-2xl text-white mb-8 border-b border-gray-800 pb-3">{children}</h2>
);

const EditorPage: React.FC<EditorPageProps> = ({ setView }) => {
  return (
    <div className="w-full min-h-screen bg-black p-6 md:p-12 lg:p-16 overflow-y-auto">
      <header className="flex items-center mb-12">
        <button onClick={() => setView('landing')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
          <ArrowLeft size={18} />
          <span className="font-mono text-lg">Back</span>
        </button>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Clapperboard size={32} className="text-gray-300" />
          <h1 className="font-mono text-4xl text-white">Editor Reel</h1>
        </div>

        <FeaturedFilmCard work={FEATURED_FILM} />

        <section id="commercial" className="mb-16">
          <SectionHeader>Commercial Work</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMMERCIAL_WORK.map(work => <FilmCard key={work.title} work={work} />)}
          </div>
        </section>

        <section id="freelance" className="mb-16">
          <SectionHeader>Freelance & Reels</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FREELANCE_REELS.map(work => <FilmCard key={work.title} work={work} />)}
          </div>
        </section>

        <section id="personal">
          <SectionHeader>Personal Projects</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERSONAL_PROJECTS.map(work => <FilmCard key={work.title} work={work} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EditorPage;