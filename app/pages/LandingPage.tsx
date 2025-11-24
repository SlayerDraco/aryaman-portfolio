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
      {/* Premium BG: Central glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,156,0.1)_0%,_rgba(10,10,10,0)_60%)]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* "Hello World" with typing effect */}
        {/* Added h-6 to prevent layout shift as text appears */}
        <p className="mb-4 h-6 font-mono text-lg text-neon-green md:text-xl">
          {typedContent}
        </p>

        {/* Main Headline */}
        <h1 className="px-4 text-3xl font-light text-gray-300 sm:text-5xl md:text-6xl lg:text-8xl">
          I am
          {/* The Glitch Effect Container */}
          <div className="glitch-container mt-2 md:mt-3">
            {/* data-text attribute is used by the CSS pseudo-elements */}
            <span className="glitch block font-mono font-bold text-white" data-text="Aryaman Malik ">
              Aryaman Malik
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl px-4 text-lg font-light text-gray-400 sm:text-xl md:text-2xl">
          Cybersecurity Analyst & Hardware Junke
        </p>

        {/* Download CV Button */}
        {/* Note: Place "Aryaman_Malik_CV.pdf" in your /public folder */}
        <a 
          href="/Aryaman_Malik_CV.pdf" 
          download
          className="group mt-12 inline-block animate-fadeInUp rounded-md border-2 border-neon-green px-6 py-3 font-mono text-base font-bold text-neon-green
                     transition-all duration-300 ease-in-out [animation-delay:1500ms]
                     hover:scale-105 hover:bg-neon-green hover:text-brand-dark 
                     hover:shadow-[0_0_20px_theme(colors.neon-green),_0_0_40px_theme(colors.neon-green)]
                     focus:outline-none focus:ring-2 focus:ring-neon-green focus:ring-offset-2 focus:ring-offset-brand-dark
                     sm:px-8 sm:text-lg"
        >
          Download CV
          <svg className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
    </section>
  );
}