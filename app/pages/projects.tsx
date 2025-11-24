"use client";

import { useState, useMemo } from 'react';
import { projects, categories, type Project } from '../data/projectsData';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Filter projects based on category and search
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="relative min-h-screen overflow-hidden p-6 py-20 md:p-12">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,255,156,0.08)_0%,_rgba(10,10,10,0)_50%)]" aria-hidden="true"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-12 animate-fadeInUp text-center">
          <h1 className="mb-4 font-mono text-4xl text-neon-green sm:text-5xl md:text-6xl">
            &gt; projects<span className="animate-blink">_</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg text-gray-400 md:text-xl">
            A collection of security research, hardware projects, and explorations at the intersection of silicon and software
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 animate-fadeInUp [animation-delay:200ms]">
          <div className="mx-auto max-w-2xl">
            <div className="group relative">
              <input
                type="text"
                placeholder="$ search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-neon-green/30 bg-black/40 px-4 py-3 pl-10 
                         font-mono text-sm text-gray-300 placeholder-gray-600 backdrop-blur-sm
                         transition-all duration-300 md:text-base
                         focus:scale-[1.01] focus:border-neon-green/80 focus:shadow-[0_0_20px_theme(colors.neon-green/20)] focus:outline-none focus:ring-2 focus:ring-neon-green/50
                         group-hover:border-neon-green/50"
              />
              <svg 
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neon-green/50 transition-colors group-hover:text-neon-green"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 animate-fadeInUp [animation-delay:300ms]">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-md border px-4 py-2 font-mono text-sm transition-all duration-300
                  ${activeCategory === category
                    ? 'border-neon-green bg-neon-green/20 text-neon-green shadow-[0_0_20px_theme(colors.neon-green/30)]'
                    : 'border-neon-green/30 bg-black/40 text-gray-400 hover:border-neon-green/60 hover:text-neon-green'
                  }`}
              >
                [{category}]
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 animate-fadeInUp text-center font-mono text-sm text-gray-500 [animation-delay:400ms]">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="animate-fadeInUp py-20 text-center">
            <p className="font-mono text-xl text-gray-500">
              <span className="text-neon-green">$</span> No projects found
            </p>
            <p className="mt-2 font-mono text-sm text-gray-600">
              Try adjusting your filters or search query
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// Project Card Component
interface ProjectCardProps {
  project: Project;
  index: number;
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
}

function ProjectCard({ project, index, hoveredId, setHoveredId }: ProjectCardProps) {
  const isHovered = hoveredId === project.id;

  return (
    <div
      className="group relative animate-fadeInUp"
      style={{ animationDelay: `${(index + 5) * 100}ms` }}
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
    >

      {/* Card */}
      <div
        className={`relative h-full overflow-hidden rounded-lg border bg-black/40 backdrop-blur-sm
          transition-all duration-500 ease-out
          ${isHovered 
            ? 'border-neon-green/80 shadow-[0_0_50px_-5px_theme(colors.neon-green/50)] scale-[1.03] -translate-y-2' 
            : 'border-neon-green/30 shadow-lg shadow-neon-green/10'
          }`}
      >
        {/* Image Container with Overlay */}
        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-neon-green/10 to-transparent">
          {/* Placeholder image - replace with actual images */}
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-dark to-neon-green/5">
            <svg className="h-16 w-16 text-neon-green/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500
            ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-4 left-4 right-4 flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-neon-green bg-neon-green/20 px-3 py-1.5 
                           font-mono text-xs text-neon-green transition-all hover:bg-neon-green hover:text-brand-dark"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-neon-green bg-neon-green/20 px-3 py-1.5 
                           font-mono text-xs text-neon-green transition-all hover:bg-neon-green hover:text-brand-dark"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-3 flex items-start justify-between">
            <h3 className="font-mono text-xl text-white transition-colors group-hover:text-neon-green">
              {project.title}
            </h3>
            <span className="ml-2 flex-shrink-0 font-mono text-xs text-gray-600">
              {project.year}
            </span>
          </div>

          {/* Description */}
          <p className="mb-4 line-clamp-3 font-sans text-sm leading-relaxed text-gray-400">
            {project.description}
          </p>

          {/* Category badge */}
          <div className="mb-4">
            <span className="inline-block rounded-md border border-neon-green/40 bg-neon-green/10 px-2 py-1 
                           font-mono text-xs text-neon-green">
              {project.category}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-gray-700 bg-gray-900/50 px-2 py-0.5 
                         font-mono text-xs text-gray-500 transition-all
                         hover:border-neon-green/30 hover:text-neon-green/70"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Animated border effect on hover */}
        <div className={`absolute inset-0 rounded-lg transition-opacity duration-500 pointer-events-none
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-green/0 via-neon-green/20 to-neon-green/0 
                        animate-[shimmer_2s_linear_infinite]"
               style={{
                 backgroundSize: '200% 100%',
                 animation: 'shimmer 2s linear infinite'
               }}>
          </div>
        </div>
      </div>
    </div>
  );
}
