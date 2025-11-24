// This directive is required for hooks (useState, useEffect)
"use client";

import { useState, useEffect } from 'react';

export default function LandingPage() {
  // State to hold the text for the typewriter
  const [typedContent, setTypedContent] = useState<React.ReactNode>(
    <span>&nbsp;</span> // Start with a non-breaking space
  );
  
  const textToType = "Hello World_";

  useEffect(() => {
    let index = 0;
    let currentText = "";

    const type = () => {
      if (index < textToType.length) {
        const char = textToType.charAt(index);

        if (char === '_') {
        } else {
          currentText += char;
          setTypedContent(
            <>
              {currentText}
              <span className="animate-blink">_</span>
            </>
          );
        }

        index++;
        setTimeout(type, 150 + Math.random() * 100);

      } else {
        setTimeout(() => {
          setTypedContent(<span>{textToType.slice(0, -1)}</span>); // Final text
        }, 1000);
      }
    };

    // Start typing after a 500ms delay
    const startTimeout = setTimeout(type, 500);

    // Cleanup timeout if the component unmounts
    return () => clearTimeout(startTimeout);

  }, []); // Empty array ensures this effect runs only once

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden p-6">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      
      {/* Premium BG: Central glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,156,0.15)_0%,_rgba(10,10,10,0)_50%)]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-neon-green/30 blur-sm" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute right-[15%] top-[40%] h-3 w-3 animate-pulse rounded-full bg-neon-green/20 blur-sm" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute left-[20%] bottom-[30%] h-2 w-2 animate-pulse rounded-full bg-neon-green/25 blur-sm" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute right-[25%] bottom-[20%] h-4 w-4 animate-pulse rounded-full bg-neon-green/15 blur-md" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>
        <div className="absolute left-[60%] top-[15%] h-2 w-2 animate-pulse rounded-full bg-neon-green/30 blur-sm" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}></div>
        <div className="absolute right-[40%] bottom-[40%] h-3 w-3 animate-pulse rounded-full bg-neon-green/20 blur-sm" style={{animationDelay: '2.5s', animationDuration: '3s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* "Hello World" with typing effect */}
        {/* Added h-6 to prevent layout shift as text appears */}
        <p className="mb-4 h-6 font-mono text-lg text-neon-green md:text-xl">
          {typedContent}
        </p>

        {/* Decorative brackets */}
        <div className="mb-8 flex items-center gap-4 text-neon-green/40">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-green/50"></div>
          <span className="font-mono text-sm">&lt;developer /&gt;</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-green/50"></div>
        </div>

        {/* Main Headline */}
        <h1 className="group px-4 text-3xl font-light text-gray-300 sm:text-5xl md:text-6xl lg:text-8xl">
          <span className="inline-block transition-all duration-300 hover:text-neon-green/50">I</span>{' '}
          <span className="inline-block transition-all duration-300 hover:text-neon-green/50">am</span>
          {/* The Glitch Effect Container */}
          <div className="glitch-container mt-2 md:mt-3">
            {/* data-text attribute is used by the CSS pseudo-elements */}
            <span className="glitch block font-mono font-bold text-white transition-all duration-500 group-hover:text-neon-green" data-text="Aryaman Malik ">
              Aryaman Malik
            </span>
          </div>
        </h1>

        {/* Subtitle with terminal-style box */}
        <div className="mt-8 max-w-2xl px-4">
          <div className="rounded-lg border border-neon-green/20 bg-black/40 p-6 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/70"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/70"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/70"></div>
              <span className="ml-auto font-mono text-xs text-gray-600">~$ whoami</span>
            </div>
            <p className="font-mono text-base text-gray-300 sm:text-lg md:text-xl">
              <span className="text-neon-green">&gt;</span> Cybersecurity Analyst
            </p>
            <p className="mt-2 font-mono text-base text-gray-300 sm:text-lg md:text-xl">
              <span className="text-neon-green">&gt;</span> Hardware Junkie
            </p>
            <p className="mt-2 font-mono text-base text-gray-300 sm:text-lg md:text-xl">
              <span className="text-neon-green">&gt;</span> Ethical Hacker
            </p>
          </div>
        </div>

        {/* Download CV Button with enhanced design */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a 
            href="/Resume_New.pdf" 
            download
            className="group relative animate-fadeInUp overflow-hidden rounded-lg border-2 border-neon-green bg-neon-green/5 px-8 py-4 font-mono text-base font-bold text-neon-green
                       transition-all duration-300 ease-in-out [animation-delay:1500ms]
                       hover:scale-105 hover:border-neon-green/70 hover:bg-neon-green hover:text-brand-dark 
                       hover:shadow-[0_0_20px_theme(colors.neon-green),_0_0_40px_theme(colors.neon-green/50)]
                       focus:outline-none focus:ring-2 focus:ring-neon-green focus:ring-offset-2 focus:ring-offset-brand-dark
                       sm:text-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neon-green/0 via-neon-green/10 to-neon-green/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>
          
          <a 
            href="#contact"
            className="group animate-fadeInUp rounded-lg border border-neon-green/30 bg-black/40 px-8 py-4 font-mono text-base text-gray-300 backdrop-blur-sm
                       transition-all duration-300 [animation-delay:1700ms]
                       hover:scale-105 hover:border-neon-green/60 hover:bg-neon-green/10 hover:text-neon-green
                       hover:shadow-[0_0_15px_theme(colors.neon-green/30)]
                       sm:text-lg"
          >
            <span className="flex items-center gap-2">
              Let&apos;s Connect
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="h-6 w-6 text-neon-green/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}