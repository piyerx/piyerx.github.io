
import type React from 'react';

export type View = 'landing' | 'developer' | 'editor';

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface FilmWork {
  title: string;
  description: string;
  role: string;
  thumbnailUrl: string;
  wip?: boolean;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}