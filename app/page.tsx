"use client";
import LandingPage from "./pages/LandingPage";
import { useState, useEffect } from "react";
import WhoAmIPage from "./pages/whoAmI";
import HackerPreloader from "@/components/Pre-Loader";
import ProjectsPage from "./pages/projects";
import StreakMonitorPage from "./pages/StreakMonitor";
import ExperiencePage from "./pages/Experience";
import Footer from "./components/Footer";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // if (isLoading) {
  //   // Added the onComplete prop to update the state
  //   return <HackerPreloader onComplete={() => setIsLoading(false)} />;
  // } else {
    return (
      <>
        <LandingPage />
        <WhoAmIPage />
        <ProjectsPage />
        <StreakMonitorPage />
        <ExperiencePage />
        <Footer />
        
        {/* Scroll to Top Button - Premium Design */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full 
                     border-2 border-neon-green bg-black/80 backdrop-blur-sm
                     transition-all duration-500 hover:scale-110 hover:bg-neon-green hover:shadow-[0_0_30px_theme(colors.neon-green/50)]
                     ${showScrollTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-16 opacity-0'}`}
          aria-label="Scroll to top"
        >
          <svg 
            className="h-6 w-6 text-neon-green transition-colors hover:text-brand-dark" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </>
    );
  // }
}
