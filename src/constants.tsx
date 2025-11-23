
import React from 'react';
import type { Project, FilmWork, Skill } from './types';
import { Smartphone, Cloud, Bot, Code } from 'lucide-react';

export const TECH_STACK: Skill[] = [
  { name: 'Flutter', icon: <Smartphone className="w-8 h-8 mx-auto" /> },
  { name: 'GCP/Firebase', icon: <Cloud className="w-8 h-8 mx-auto" /> },
  { name: 'Web3/Solidity', icon: <Code className="w-8 h-8 mx-auto" /> },
  { name: 'Python', icon: <Bot className="w-8 h-8 mx-auto" /> },
];

export const DEVELOPER_PROJECTS: Project[] = [
  {
    title: 'AI-Powered Field Agent',
    description: 'A mobile application for field agents with AI-driven task management and reporting, built on Flutter and Google Cloud.',
    tags: ['Flutter', 'GCP', 'Firebase', 'AI/ML'],
  },
  {
    title: 'Decentralized Ticketing',
    description: 'A Web3-based event ticketing platform on the Ethereum blockchain to prevent fraud and scalping using smart contracts.',
    tags: ['Web3', 'Solidity', 'React', 'Hardhat'],
  },
  {
    title: 'Cloud Data Pipeline',
    description: 'An automated data ingestion and processing pipeline using GCP services like Cloud Functions, Pub/Sub, and BigQuery.',
    tags: ['GCP', 'Python', 'BigQuery', 'ETL'],
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'A web-based dashboard for visualizing real-time data streams using React, Websockets, and GCP for backend processing.',
    tags: ['React', 'GCP', 'Websockets', 'Data Viz'],
  },
];

export const HACKATHONS: Project[] = [
  {
    title: 'ArthSaathi - Fintech Solution',
    description: 'Winner at XYZ Hackathon. A financial literacy app for rural populations, providing micro-investment guidance.',
    tags: ['Flutter', 'Firebase', 'Fintech'],
  },
  {
    title: 'HealthChain - Web3 Hack',
    description: 'A decentralized health record system ensuring patient data privacy and interoperability using blockchain technology.',
    tags: ['React', 'Solidity', 'IPFS'],
  },
  {
    title: 'EcoRoute - Green Pathfinding',
    description: 'Hackathon finalist. A mobile app that calculates the most eco-friendly routes for travel, considering carbon emissions.',
    tags: ['Flutter', 'Google Maps API', 'Sustainability'],
  },
];

export const FEATURED_FILM: FilmWork = {
  title: 'Feature Film (In Production)',
  description: 'Currently in post-production. A sci-fi narrative exploring the boundaries of artificial consciousness. Anticipated release in 2025.',
  role: 'Lead Editor',
  thumbnailUrl: 'https://picsum.photos/seed/featurefilm/1200/675',
  wip: true,
};

export const COMMERCIAL_WORK: FilmWork[] = [
  {
    title: 'Echoes of Silence',
    description: 'A 110-minute psychological thriller exploring memory and loss. Commercially released.',
    role: 'Lead Editor',
    thumbnailUrl: 'https://picsum.photos/seed/film1/800/450',
  },
  {
    title: 'Brand Anthem',
    description: 'High-energy commercial spot for a leading tech brand, featuring fast-paced cuts and motion graphics.',
    role: 'Editor',
    thumbnailUrl: 'https://picsum.photos/seed/film4/800/450',
  },
  {
    title: 'Automotive Launch Film',
    description: 'Dynamic and sleek commercial for a new luxury vehicle, focused on cinematic shots and precise sound design.',
    role: 'Editor',
    thumbnailUrl: 'https://picsum.photos/seed/film5/800/450',
  },
];

export const PERSONAL_PROJECTS: FilmWork[] = [
    {
    title: 'The Last Commute',
    description: 'Award-winning short film about a mundane train ride that takes a surreal turn. Official selection at multiple festivals.',
    role: 'Editor & Colorist',
    thumbnailUrl: 'https://picsum.photos/seed/film2/800/450',
  },
  {
    title: 'Crimson Hue',
    description: 'A music video with a distinct, stylized color palette to match the song\'s emotional arc.',
    role: 'Colorist',
    thumbnailUrl: 'https://picsum.photos/seed/film3/800/450',
  },
  {
    title: 'City in Motion',
    description: 'A time-lapse short film capturing the kinetic energy of a metropolis over 24 hours. Edited and graded for maximum impact.',
    role: 'Director & Editor',
    thumbnailUrl: 'https://picsum.photos/seed/film6/800/450',
  },
];

export const FREELANCE_REELS: FilmWork[] = [
  {
    title: '2024 Sizzle Reel',
    description: 'A compilation of my best editing work from the past year, showcasing a range of styles from narrative to commercial.',
    role: 'Editor',
    thumbnailUrl: 'https://picsum.photos/seed/reel1/800/450',
  },
  {
    title: 'VFX & Motion Graphics Reel',
    description: 'A focused reel demonstrating capabilities in After Effects for visual effects, compositing, and motion graphics.',
    role: 'Motion Designer & Editor',
    thumbnailUrl: 'https://picsum.photos/seed/reel2/800/450',
  },
  {
    title: 'Documentary Editing Reel',
    description: 'A collection of scenes from various documentary projects, highlighting storytelling and pacing.',
    role: 'Editor',
    thumbnailUrl: 'https://picsum.photos/seed/reel3/800/450',
  },
];