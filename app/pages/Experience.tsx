"use client";

import { useState } from 'react';
import { experiences, workExperiences, educationItems, certifications, type Experience } from '../data/experienceData';

export default function ExperiencePage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education' | 'certification'>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeFilter);

  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2022; // Adjust based on your start year

  return (
    <section className="relative min-h-screen overflow-hidden p-6 py-20 md:p-12">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,156,0.05)_0%,rgba(10,10,10,0)_50%)]" aria-hidden="true"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Enhanced Header with Stats */}
        <div className="mb-16 animate-fadeInUp">
          <div className="mb-8 flex flex-col items-center justify-center text-center">
            <div>
              <h1 className="mb-4 font-mono text-4xl text-neon-green sm:text-5xl md:text-6xl">
                &gt; experience.log<span className="animate-blink">_</span>
              </h1>
            </div>
            
            {/* Inline Stats */}
            <div className="flex gap-8 mt-6">
              <div>
                <div className="font-mono text-3xl text-neon-green">{yearsOfExperience}+</div>
                <div className="font-mono text-xs text-gray-600 uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="font-mono text-3xl text-neon-green">{workExperiences.length}</div>
                <div className="font-mono text-xs text-gray-600 uppercase tracking-wider">Roles</div>
              </div>
              <div>
                <div className="font-mono text-3xl text-neon-green">{certifications.length}</div>
                <div className="font-mono text-xs text-gray-600 uppercase tracking-wider">Certs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs - Minimalist */}
        <div className="mb-16 flex flex-wrap justify-center gap-6 animate-fadeInUp md:justify-start md:gap-8 [animation-delay:200ms]">
          {(['all', 'work', 'education', 'certification'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative pb-4 font-mono text-xs uppercase tracking-wider transition-all duration-300 sm:text-sm
                ${activeFilter === filter ? 'scale-105 text-neon-green' : 'text-gray-500 hover:scale-105 hover:text-gray-300'}`}
            >
              {filter}
              {activeFilter === filter && (
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-neon-green"></div>
              )}
            </button>
          ))}
        </div>

        {/* Experience Grid */}
        <div className="space-y-6 animate-fadeInUp [animation-delay:300ms]">
          {filteredExperiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isHovered={hoveredId === exp.id}
              onHover={() => setHoveredId(exp.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}

          {filteredExperiences.length === 0 && (
            <div className="py-32 text-center">
              <p className="font-mono text-gray-600">No experiences found</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

// Experience Card Component
interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function ExperienceCard({ experience, index, isHovered, onHover, onLeave }: ExperienceCardProps) {
  const typeConfig = {
    work: { label: 'Work', color: 'text-neon-green' },
    education: { label: 'Education', color: 'text-blue-400' },
    certification: { label: 'Certification', color: 'text-amber-400' },
  };

  const config = typeConfig[experience.type];

  const handleClick = () => {
    if (isHovered) {
      onLeave();
    } else {
      onHover();
    }
  };

  return (
    <div
      className="group relative cursor-pointer"
      onClick={handleClick}
      style={{ 
        animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <div className="relative overflow-hidden border-l-2 border-gray-800 pl-8 transition-all duration-500 hover:border-neon-green hover:pl-10">
        
        {/* Type indicator dot with tooltip */}
        <div className="absolute -left-px top-0 group/dot">
          <div className={`h-2 w-2 -translate-x-1/2 rounded-full transition-all duration-300 ${isHovered ? 'scale-150 bg-neon-green shadow-[0_0_12px_theme(colors.neon-green)]' : 'bg-gray-700'}`}></div>
          <div className="pointer-events-none absolute -left-2 top-6 whitespace-nowrap opacity-0 transition-opacity group-hover/dot:opacity-100">
            <span className={`font-mono text-xs ${config.color}`}>{config.label}</span>
          </div>
        </div>

        {/* Content */}
        <div className="pb-12">
          
          {/* Header */}
          <div className="mb-4">
            <div className="mb-2 flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-3">
                  <h3 className={`font-mono text-xl font-bold tracking-tight transition-colors duration-300 ${isHovered ? 'text-neon-green' : 'text-white'}`}>
                    {experience.title}
                  </h3>
                  {experience.current && (
                    <span className="inline-flex h-2 w-2 rounded-full bg-neon-green animate-pulse"></span>
                  )}
                </div>
              </div>

              <span className="font-mono text-sm font-semibold text-neon-green/70 whitespace-nowrap">
                {experience.period}
              </span>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="font-mono font-semibold text-gray-200">{experience.organization}</span>
              <span className="text-gray-600">•</span>
              <span className="font-mono text-gray-400">{experience.location}</span>
              {experience.link && (
                <>
                  <span className="text-gray-700">•</span>
                  <a 
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-gray-600 underline decoration-gray-700 decoration-dotted underline-offset-2 transition-colors hover:text-neon-green hover:decoration-neon-green"
                  >
                    Link
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-gray-300 font-medium">
            {experience.description}
          </p>

          {/* Achievements - Compact */}
          <div className="mb-4 space-y-2">
            {experience.achievements.slice(0, 3).map((achievement, idx) => (
              <div key={idx} className="flex gap-3 text-sm text-gray-300">
                <span className="text-neon-green font-bold">▸</span>
                <span className="font-medium">{achievement}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack - More compact */}
          {experience.technologies && experience.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="rounded-md border border-neon-green/20 bg-neon-green/5 px-3 py-1 font-mono text-xs font-medium text-neon-green/80 transition-all duration-200 hover:border-neon-green/40 hover:bg-neon-green/10 hover:text-neon-green hover:shadow-[0_0_10px_theme(colors.neon-green/20)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Hover indicator */}
          <div 
            className={`absolute left-0 top-0 h-full w-px bg-linear-to-b from-neon-green/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
