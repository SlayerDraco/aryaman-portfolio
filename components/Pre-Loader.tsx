"use client";
import React, { useState, useEffect } from 'react';
import { Terminal, ChevronRight, CheckCircle, XCircle } from 'lucide-react';

// --- Configuration for the animation ---

// The (harmless, fictional) commands to be typed out
const commands = [
  { text: "Booting security bypass protocol...", time: 600 },
  { text: "Initializing root access... [OK]", time: 400 },
  { text: "Scanning network vulnerabilities... 0 found.", time: 500 },
  { text: "Compiling framework modules... [DONE]", time: 400 },
  { text: "Injecting new interface... [SUCCESS]", time: 600 },
  { text: "Finalizing... System handshake complete.", time: 400 },
];

// --- 1. Typing Effect Component ---
// This component types out a single line of text
interface TypingLineProps {
  text: string;
  onCompleted: () => void;
  typingSpeed?: number;
}

const TypingLine: React.FC<TypingLineProps> = ({ text, onCompleted, typingSpeed = 30 }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (typedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } else {
      // Text finished typing, wait a moment then call onCompleted
      const completeTimeout = setTimeout(() => {
        onCompleted();
      }, 200); // Short delay after line is finished
      return () => clearTimeout(completeTimeout);
    }
  }, [typedText, text, typingSpeed]);

  return (
    <div className="flex items-center">
      <ChevronRight className="mr-2 h-4 w-4 shrink-0 text-neon-green" />
      <p className="text-neon-green">
        {typedText}
        <span className="typing-cursor">|</span>
      </p>
    </div>
  );
};

// --- 2. Hacker Preloader Component ---
// This component manages the different stages of the preloader
interface HackerPreloaderProps {
  onComplete: () => void;
}

const HackerPreloader: React.FC<HackerPreloaderProps> = ({ onComplete }) => {
  // Stages: 'denied' -> 'prompt' -> 'completed'
  const [stage, setStage] = useState<'denied' | 'prompt' | 'completed'>('denied');
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [commandIndex, setCommandIndex] = useState(0);

  // Stage 1: "Access Denied"
  // Switches to the 'prompt' stage after a delay
  useEffect(() => {
    if (stage === 'denied') {
      const timer = setTimeout(() => {
        setStage('prompt');
      }, 1200); // Reduced from 2500ms
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Stage 2: "Prompt"
  // Logic to handle advancing to the next command
  const handleCommandComplete = () => {
    const currentCommand = commands[commandIndex];
    setCompletedLines(prev => [...prev, currentCommand.text]);
    
    // Wait for the specified time for this command
    setTimeout(() => {
      if (commandIndex < commands.length - 1) {
        setCommandIndex(prev => prev + 1);
      } else {
        // All commands are done, move to 'completed' stage
        setStage('completed');
      }
    }, currentCommand.time);
  };

  // Stage 3: "Completed"
  // Calls the onComplete prop after a final delay
  useEffect(() => {
    if (stage === 'completed') {
      const timer = setTimeout(() => {
        onComplete();
      }, 800); // Reduced from 2000ms
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  // --- Render Logic ---

  // Stage 1: ACCESS DENIED
  if (stage === 'denied') {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-black font-mono text-red-500">
        <style>{`
          .glitch {
            font-size: 3rem;
            font-weight: 700;
            animation: glitch 1s linear infinite;
          }
          @keyframes glitch {
            0%, 100% { text-shadow: -2px -2px 0 #0ff, 2px 2px 0 #f00; }
            20% { text-shadow: 2px 2px 0 #0ff, -2px -2px 0 #f00; }
            40% { text-shadow: 2px -2px 0 #0ff, -2px 2px 0 #f00; }
            60% { text-shadow: -2px 2px 0 #0ff, 2px -2px 0 #f00; }
            80% { text-shadow: -2px -2px 0 #0ff, 2px 2px 0 #f00; }
          }
        `}</style>
        <XCircle className="mb-4 h-16 w-16 text-red-500 sm:h-20 sm:w-20" />
        <h1 className="glitch">ACCESS DENIED</h1>
        <p className="mt-4 text-base sm:text-xl">Unauthorized access detected.</p>
      </div>
    );
  }

  // Stage 2: TERMINAL
  if (stage === 'prompt') {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black p-4 font-mono">
        <style>{`
          .typing-cursor {
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
        {/* MacBook Style Terminal Window */}
        <div className="flex h-[600px] max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-900/80 shadow-2xl backdrop-blur-md">
          {/* Window Header */}
          <div className="flex shrink-0 items-center space-x-2 border-b border-gray-700 bg-gray-800 p-3">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <div className="grow text-center text-sm text-gray-400">
              <Terminal className="-mt-1 mr-2 inline-block h-4 w-4" />
              <span>zsh — /bin/attack_vector</span>
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="grow space-y-2 overflow-y-auto p-4">
            <p className="text-gray-400 text-xs sm:text-sm">Last login: {new Date().toLocaleString()}</p>
            {/* Render completed lines */}
            {completedLines.map((line, index) => (
              <div key={index} className="flex items-center">
                <ChevronRight className="mr-2 h-4 w-4 shrink-0 text-neon-green" />
                <p className="text-sm text-neon-green sm:text-base">{line}</p>
              </div>
            ))}
            
            {/* Render the currently typing line */}
            {commandIndex < commands.length && (
              <TypingLine
                key={commandIndex}
                text={commands[commandIndex].text}
                onCompleted={handleCommandComplete}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  // Stage 3: COMPLETED
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black font-mono text-neon-green">
      <style>{`
        .pulse-scale {
          animation: pulse-scale 1.5s ease-in-out infinite;
        }
        @keyframes pulse-scale {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
      `}</style>
      <CheckCircle className="pulse-scale mb-4 h-16 w-16 text-neon-green sm:h-20 sm:w-20" />
      <h1 className="pulse-scale mb-2 text-3xl font-bold sm:text-4xl">ACCESS GRANTED</h1>
      <p className="text-base sm:text-xl">Loading portfolio...</p>
    </div>
  );
};

export default HackerPreloader;
