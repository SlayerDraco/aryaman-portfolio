"use client";
import React, { useState, useEffect } from 'react';
import { Terminal, CheckCircle, Lock } from 'lucide-react';

// --- Configuration for the animation ---
const commands = [
  { text: "$ sudo access --override --user=guest", time: 250, delay: 100 },
  { text: "$ initializing secure connection...", time: 200, delay: 150 },
  { text: "$ verifying credentials... [OK]", time: 180, delay: 120 },
  { text: "$ loading portfolio modules... [DONE]", time: 200, delay: 100 },
  { text: "$ access granted. welcome.", time: 150, delay: 80 },
];

// --- 1. Typing Effect Component ---
interface TypingLineProps {
  text: string;
  onCompleted: () => void;
  typingSpeed?: number;
  delay?: number;
}

const TypingLine: React.FC<TypingLineProps> = ({ 
  text, 
  onCompleted, 
  typingSpeed = 25,
  delay = 0 
}) => {
  const [typedText, setTypedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (typedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } else {
      const completeTimeout = setTimeout(() => {
        onCompleted();
      }, 100);
      return () => clearTimeout(completeTimeout);
    }
  }, [typedText, text, started, typingSpeed]);

  if (!started) return null;

  return (
    <div className="flex items-start gap-2 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
      <span className="text-neon-green font-mono text-sm shrink-0">&gt;</span>
      <p className="text-neon-green font-mono text-sm">
        {typedText}
        {typedText.length < text.length && (
          <span className="inline-block w-2 h-4 ml-1 bg-neon-green animate-pulse"></span>
        )}
      </p>
    </div>
  );
};

// --- 2. Hacker Preloader Component ---
interface HackerPreloaderProps {
  onComplete: () => void;
}

const HackerPreloader: React.FC<HackerPreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'init' | 'typing' | 'complete'>('init');
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [commandIndex, setCommandIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Stage 1: Initial lock screen
  useEffect(() => {
    if (stage === 'init') {
      const timer = setTimeout(() => {
        setStage('typing');
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Update progress bar
  useEffect(() => {
    if (stage === 'typing') {
      const totalCommands = commands.length;
      const currentProgress = ((completedLines.length + 1) / totalCommands) * 100;
      setProgress(currentProgress);
    }
  }, [completedLines, stage]);

  // Handle command completion
  const handleCommandComplete = () => {
    const currentCommand = commands[commandIndex];
    setCompletedLines(prev => [...prev, currentCommand.text]);
    
    setTimeout(() => {
      if (commandIndex < commands.length - 1) {
        setCommandIndex(prev => prev + 1);
      } else {
        setProgress(100);
        setTimeout(() => {
          setStage('complete');
        }, 200);
      }
    }, currentCommand.time);
  };

  // Stage 3: Complete
  useEffect(() => {
    if (stage === 'complete') {
      const timer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  // Stage 1: LOCK SCREEN
  if (stage === 'init') {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-black font-mono">
        <div className="animate-[fadeIn_0.4s_ease-out]">
          <Lock className="mb-6 h-20 w-20 text-neon-green/30 animate-pulse" />
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-neon-green animate-pulse"></div>
            <p className="text-neon-green/70 text-sm">Initializing secure session...</p>
          </div>
        </div>
      </div>
    );
  }

  // Stage 2: TERMINAL TYPING
  if (stage === 'typing') {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black p-4 font-mono">
        <div className="flex h-[500px] max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-neon-green/20 bg-gradient-to-b from-gray-900/95 to-black/95 shadow-2xl backdrop-blur-md">
          {/* Terminal Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-neon-green/20 bg-black/40 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex items-center gap-2 text-xs text-neon-green/50">
              <Terminal className="h-3.5 w-3.5" />
              <span>root@aryaman:~#</span>
            </div>
            <div className="w-16"></div>
          </div>
          
          {/* Terminal Body */}
          <div className="grow space-y-3 overflow-y-auto p-6">
            <p className="font-mono text-xs text-gray-600 mb-4">
              Last login: {new Date().toLocaleString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            
            {/* Completed lines */}
            {completedLines.map((line, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-neon-green font-mono text-sm shrink-0">&gt;</span>
                <p className="text-neon-green/80 font-mono text-sm">{line}</p>
              </div>
            ))}
            
            {/* Currently typing line */}
            {commandIndex < commands.length && (
              <TypingLine
                key={commandIndex}
                text={commands[commandIndex].text}
                onCompleted={handleCommandComplete}
                delay={commands[commandIndex].delay}
              />
            )}
          </div>

          {/* Progress Bar */}
          <div className="shrink-0 border-t border-neon-green/20 bg-black/40 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-xs text-neon-green/60">Loading...</span>
              <span className="font-mono text-xs text-neon-green/60">{Math.round(progress)}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-gray-800">
              <div 
                className="h-full bg-gradient-to-r from-neon-green to-emerald-400 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full animate-pulse bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Stage 3: COMPLETE
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black font-mono animate-[fadeIn_0.4s_ease-out]">
      <CheckCircle className="mb-6 h-20 w-20 text-neon-green animate-[pulse_1s_ease-in-out]" />
      <h1 className="mb-2 text-3xl font-bold text-neon-green sm:text-4xl">ACCESS GRANTED</h1>
      <p className="text-base text-neon-green/60 sm:text-lg">Welcome to the portfolio...</p>
    </div>
  );
};

export default HackerPreloader;
