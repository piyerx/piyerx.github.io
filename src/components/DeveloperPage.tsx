import React from 'react';
import { ArrowLeft } from 'lucide-react';
import type { View, Project } from '../types';
import { TECH_STACK, DEVELOPER_PROJECTS, HACKATHONS } from '../constants';
import Footer from './Footer';

interface DeveloperPageProps {
  setView: (view: View) => void;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="border border-gray-800 p-6 rounded-sm bg-gray-900/20 hover:border-gray-600 transition-all duration-300 hover:shadow-glow-subtle">
    <a href="https://github.com/piyerx" target="_blank" rel="noopener noreferrer" className="hover:underline">
      <h3 className="font-mono text-xl text-white">{project.title}</h3>
    </a>
    <p className="text-gray-400 mt-2 font-sans text-sm">{project.description}</p>
    <div className="flex flex-wrap gap-2 mt-4">
      {project.tags.map(tag => (
        <span key={tag} className="bg-gray-800 text-gray-300 text-xs font-mono px-2 py-1 rounded-sm">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const DeveloperPage: React.FC<DeveloperPageProps> = ({ setView }) => {
  return (
    <div className="w-full min-h-screen bg-black p-6 md:p-12 lg:p-16 overflow-y-auto">
      <header className="flex items-center mb-12">
        <button onClick={() => setView('landing')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
          <ArrowLeft size={18} />
          <span className="font-mono text-lg">Back</span>
        </button>
      </header>
      
      <main className="max-w-5xl mx-auto">
        <section id="stack" className="mb-16">
          <h2 className="font-mono text-3xl text-white mb-6 border-b border-gray-800 pb-2">
            <span className="text-green-400">$</span> Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {TECH_STACK.map(skill => (
              <div key={skill.name} className="p-6 border border-gray-800 bg-gray-900/20 rounded-sm transition-all duration-300 hover:shadow-glow-subtle hover:border-gray-600">
                <div className="text-gray-300">{skill.icon}</div>
                <p className="font-mono text-gray-300 mt-3">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16">
           <h2 className="font-mono text-3xl text-white mb-6 border-b border-gray-800 pb-2">
            <span className="text-green-400">$</span> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {DEVELOPER_PROJECTS.map(proj => <ProjectCard key={proj.title} project={proj} />)}
          </div>
        </section>

        <section id="hackathons">
           <h2 className="font-mono text-3xl text-white mb-6 border-b border-gray-800 pb-2">
            <span className="text-green-400">$</span> Hackathons
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {HACKATHONS.map(proj => <ProjectCard key={proj.title} project={proj} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DeveloperPage;