"use client";

import { useEffect, useRef } from 'react';
import { resources, type Resource } from '../data/resourcesData';
import { Download, FileText, Calendar, HardDrive } from 'lucide-react';

export default function ResourcesPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate resources for seamless infinite scroll
  const infiniteResources = [...resources, ...resources, ...resources, ...resources];

  // Continuous auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      scrollContainer.scrollLeft = scrollPosition;

      // Reset seamlessly when halfway through
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-dark py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,156,0.05)_0%,rgba(10,10,10,0)_50%)]" aria-hidden="true"></div>
      
      <div className="relative z-10 w-full">
        
        {/* Header */}
        <div className="mb-16 text-center animate-fadeInUp px-6">
          <h1 className="mb-4 font-mono text-4xl text-neon-green sm:text-5xl md:text-6xl">
            &gt; resources.db<span className="animate-blink">_</span>
          </h1>
        </div>

        {/* Full-width Continuous Carousel */}
        <div 
          ref={scrollRef}
          className="overflow-x-hidden animate-fadeInUp py-8 [animation-delay:200ms]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 px-6">
            {infiniteResources.map((resource, index) => (
              <ResourceCard key={`${resource.id}-${index}`} resource={resource} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Simplified Resource Card Component
interface ResourceCardProps {
  resource: Resource;
}

function ResourceCard({ resource }: ResourceCardProps) {
  const handleDownload = () => {
    window.open(resource.fileUrl, '_blank');
  };

  return (
    <div
      className="group relative flex-shrink-0 w-[320px] rounded-xl border border-neon-green/20 bg-gradient-to-b from-gray-900/80 to-black/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neon-green/50 hover:shadow-[0_0_30px_rgba(0,255,156,0.15)]"
    >
      {/* Icon */}
      <div className="mb-4 flex h-20 items-center justify-center rounded-lg bg-black/40 border border-neon-green/10">
        <FileText className="h-12 w-12 text-neon-green/40 group-hover:text-neon-green/60 transition-colors" />
      </div>

      {/* Title */}
      <h3 className="mb-4 font-mono text-lg font-bold text-neon-green line-clamp-2 min-h-[3.5rem]">
        {resource.title}
      </h3>

      {/* Meta Info */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center justify-between font-mono text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(resource.uploadDate).toLocaleDateString('en-US', { 
              month: 'short', 
              year: 'numeric' 
            })}
          </div>
          <div className="flex items-center gap-1">
            <HardDrive className="h-3.5 w-3.5" />
            <span>{resource.size}</span>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-neon-green/30 bg-black/40 text-neon-green/70 font-mono text-sm font-semibold transition-all duration-300 hover:border-neon-green hover:bg-neon-green/10 hover:text-neon-green hover:shadow-[0_0_20px_rgba(0,255,156,0.2)]"
      >
        <Download className="h-4 w-4" />
        Download
      </button>
    </div>
  );
}
