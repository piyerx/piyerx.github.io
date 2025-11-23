import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-24 py-12 text-center border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-lg text-gray-300">Piyush Verma <b>PiyerX</b> | 2025</p>
        <div className="flex justify-center items-center gap-6 mt-4">
          <a
            href="https://linkedin.com/in/piyerx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-500 hover:text-white transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/piyerx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-500 hover:text-white transition-colors duration-300"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
