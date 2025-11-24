"use client";
import LandingPage from "./pages/LandingPage";
import { useState } from "react";
import WhoAmIPage from "./pages/whoAmI";
import HackerPreloader from "@/components/Pre-Loader";
import ProjectsPage from "./pages/projects";
import StreakMonitorPage from "./pages/StreakMonitor";
import ExperiencePage from "./pages/Experience";
import Footer from "./components/Footer";
export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

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
      </>
    );
  // }
}
