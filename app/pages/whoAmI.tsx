// "use client"; // No longer needed
import React from 'react';
// import Tilt from 'react-parallax-tilt'; // Removed to use CSS-only hover

// This is a Server Component again.
export default function WhoAmIPage() {
  const skills = [
    "Cybersecurity",
    "VLSI Design",
    "Hardware Security",
    "Penetration Testing"
  ];

  return (
    <>
      {/* Main container: Full screen, flex layout, centered, with padding */}
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 md:p-12">

        {/* Central content container */}
        <div className="relative z-10 flex w-full max-w-3xl flex-col">
          
          {/* 1. Heading: Centered, neon-green, with animation */}
          {/* This class 'text-neon-green' is correct for your hacker green. */}
          <h1 
            className="mb-6 animate-fadeInUp text-center font-mono text-3xl text-neon-green sm:text-4xl md:text-5xl"
          >
            &gt; whoami<span className="animate-blink">_</span>
          </h1>

          {/* 2. Designer Content Box: Now a standard div with enhanced hover */}
          <div 
            className="w-full animate-fadeInUp rounded-lg border border-neon-green/30 bg-black/40 p-6
                       shadow-lg shadow-neon-green/10 backdrop-blur-sm
                       transition-all duration-300 ease-in-out
                       [animation-delay:300ms]
                       
                       /* --- NEW HOVER EFFECTS --- */
                       hover:scale-[1.02] 
                       hover:border-neon-green/80
                       hover:shadow-[0_0_30px_-5px_theme(colors.neon-green)]
                       
                       md:p-8"
          >
            {/* 3. Content */}
            <p className="font-sans text-base leading-relaxed text-gray-300 md:text-lg">
              {/* Using I&apos;m for the apostrophe in JSX */}
              I&apos;m an 18-year-old cybersecurity enthusiast and electronics engineer 
              who thrives at the intersection of hardware and software security. 
              My passion lies in understanding how systems work at the deepest 
              level - from silicon to software - and finding creative ways to 
              break and build them.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-300 md:text-lg">
              With expertise spanning from VLSI design to penetration testing, 
              I approach problems with both the precision of an engineer and 
              the curiosity of a hacker. Whether I&apos;m designing circuits or 
              exploiting vulnerabilities, I believe that true security comes 
              from understanding every layer of the stack.
            </p>

            {/* 4. Skills Tags Section (MOVED INSIDE) */}
            <div 
              className="mt-6 flex flex-wrap justify-center gap-2 border-t border-neon-green/20 pt-6"
            >
              {skills.map((skill, index) => (
                <span 
                  key={skill}
                  className="animate-fadeInUp rounded-md border border-neon-green/30 bg-neon-green/10 px-3 py-1 
                             font-mono text-xs text-neon-green
                             
                             /* --- NEW HOVER EFFECTS --- */
                             transition-all duration-200
                             hover:scale-110
                             hover:bg-neon-green/20 
                             hover:border-neon-green/70
                             hover:shadow-[0_0_15px_theme(colors.neon-green)]"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Skills Tags Section has been moved from here */}

        </div>
        
        {/* Background glow effect for consistency */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,156,0.05)_0%,_rgba(10,10,10,0)_70%)]" aria-hidden="true"></div>
      </main>
    </>
  );
}

