"use client";

import { PLATFORM_CONFIG } from '../data/streakData';
import { useState, useEffect } from 'react';

interface THMStats {
  username: string;
  level: number;
  rank: number;
  streak: number;
  completedRoomsNumber: number;
  badgesNumber: number;
  topPercentage: number;
  avatar: string;
  country: string;
}

export default function StreakMonitorPage() {
  const [thmStats, setThmStats] = useState<THMStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/thm-stats');
        const result = await response.json();
        
        if (result.success && result.thm) {
          setThmStats(result.thm);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Failed to fetch stats:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-dark p-6 py-20 md:p-12">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,156,0.06)_0%,_rgba(10,10,10,0)_60%)]" aria-hidden="true"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 pt-16">
        
        {/* Header Section */}
        <div className="mb-12 animate-fadeInUp text-center">
          <h1 className="mb-4 font-mono text-2xl text-neon-green sm:text-4xl md:text-5xl lg:text-6xl break-words">
            &gt; ./streak_monitor.sh<span className="animate-blink">_</span>
          </h1>
        </div>

        {/* Platform Cards Layout - THM on left, HTB and CTF stacked on right */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          
          {/* Left Column - TryHackMe Card */}
          <div className="flex h-full flex-col">
            <PlatformCard
              title="TryHackMe"
              username={PLATFORM_CONFIG.tryHackMe.username}
              profileUrl={PLATFORM_CONFIG.tryHackMe.profileUrl}
              badgeUrl={PLATFORM_CONFIG.tryHackMe.badgeUrl}
              platformColor="#00ff9c"
              icon="🔥"
              delay="200ms"
              stats={thmStats}
              loading={loading}
              error={error}
              fullHeight
            />
          </div>

          {/* Right Column - HackTheBox and CTF Card Stacked */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* HackTheBox Card */}
            <PlatformCard
              title="HackTheBox"
              username={PLATFORM_CONFIG.hackTheBox.username}
              profileUrl={PLATFORM_CONFIG.hackTheBox.profileUrl}
              platformColor="#9fef00"
              icon="📦"
              delay="400ms"
              isHTB
            />

            {/* CTF Card */}
            <div className="animate-fadeInUp" style={{ animationDelay: '600ms' }}>
              <div className="overflow-hidden rounded-lg border border-neon-green/30 bg-gradient-to-r from-neon-green/10 via-black/60 to-neon-green/10 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-neon-green/70 hover:shadow-[0_0_50px_-5px_theme(colors.neon-green/40)]">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-neon-green/40 bg-transparent p-3">
                        <img src="/image.png" alt="CTF Flag" className="h-full w-full object-contain mix-blend-lighten" />
                      </div>
                      <div>
                        <h3 className="font-mono text-xs uppercase tracking-wider text-gray-500 sm:text-sm">Total CTFs Played</h3>
                        <div className="mt-1 font-mono text-4xl font-bold text-neon-green sm:text-5xl">5</div>
                        <div className="mt-1 font-mono text-xs text-gray-600">across all platforms</div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-neon-green/20 bg-black/40 px-6 py-3">
                      <div className="text-center font-mono text-xs text-gray-600">CHALLENGES</div>
                      <div className="text-center font-mono text-xl font-bold text-neon-green sm:text-2xl">COMPLETED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// Platform Card Component
interface PlatformCardProps {
  title: string;
  username: string;
  profileUrl: string;
  badgeUrl?: string;
  platformColor: string;
  icon: string;
  delay: string;
  isHTB?: boolean;
  stats?: THMStats | null;
  loading?: boolean;
  error?: boolean;
  fullHeight?: boolean;
}

function PlatformCard({ 
  title, 
  username, 
  profileUrl, 
  badgeUrl, 
  platformColor, 
  icon, 
  delay,
  isHTB = false,
  stats = null,
  loading = false,
  error = false,
  fullHeight = false
}: PlatformCardProps) {
  return (
    <div 
      className="group animate-fadeInUp h-full"
      style={{ animationDelay: delay }}
    >
      <div className={`overflow-hidden rounded-lg border border-neon-green/30 bg-black/40 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-neon-green/70 hover:shadow-[0_0_50px_-5px_theme(colors.neon-green/40)] ${fullHeight ? 'h-full flex flex-col' : ''}`}>
        
        {/* Header */}
        <div className="border-b border-neon-green/20 bg-gradient-to-r from-neon-green/10 to-transparent p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{icon}</span>
              <div>
                <h2 className="font-mono text-2xl text-neon-green">{title}</h2>
                <p className="font-mono text-sm text-gray-500">@{username}</p>
              </div>
            </div>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-neon-green/40 bg-neon-green/10 p-2 transition-all hover:bg-neon-green hover:text-brand-dark"
              title="View Profile"
            >
              <svg className="h-5 w-5 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Badge/Graph Container */}
        <div className={`p-6 ${fullHeight ? 'flex-1 flex flex-col' : ''}`}>
          {!isHTB && badgeUrl ? (
            <div className="space-y-4">
              {/* Live Stats Grid */}
              {loading ? (
                <div className="rounded-lg border border-neon-green/20 bg-black/60 p-6">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-neon-green border-t-transparent"></div>
                    <p className="font-mono text-sm text-gray-400">Loading stats...</p>
                  </div>
                </div>
              ) : error ? (
                <div className="rounded-lg border border-red-500/20 bg-black/60 p-6">
                  <p className="text-center font-mono text-sm text-red-400">Failed to load stats</p>
                </div>
              ) : stats ? (
                <>
                  {/* Main Stats Grid - Large Cards */}
                  <div className="space-y-4">
                    {/* First Row - Global Rank and Top Percentile */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Global Rank */}
                      <div className="group relative overflow-hidden rounded-lg border border-neon-green/30 bg-gradient-to-br from-neon-green/10 to-transparent p-6 transition-all duration-300 hover:scale-105 hover:border-neon-green/60 hover:shadow-[0_0_30px_theme(colors.neon-green/30)]">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="text-3xl">🏆</span>
                          <span className="font-mono text-sm uppercase tracking-wider text-gray-500">Global Rank</span>
                        </div>
                        <div className="font-mono text-2xl font-bold text-neon-green break-all sm:text-3xl lg:text-4xl">#{stats.rank.toLocaleString()}</div>
                        <div className="mt-2 font-mono text-xs text-gray-600">worldwide</div>
                      </div>

                      {/* Top Percentage */}
                      <div className="group relative overflow-hidden rounded-lg border border-neon-green/30 bg-gradient-to-br from-neon-green/10 to-transparent p-6 transition-all duration-300 hover:scale-105 hover:border-neon-green/60 hover:shadow-[0_0_30px_theme(colors.neon-green/30)]">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="text-3xl">📊</span>
                          <span className="font-mono text-sm uppercase tracking-wider text-gray-500">Top Percentile</span>
                        </div>
                        <div className="font-mono text-4xl font-bold text-neon-green">{stats.topPercentage}%</div>
                        <div className="mt-2 font-mono text-xs text-gray-600">of all users</div>
                      </div>
                    </div>

                    {/* Second Row - Current Streak (Full Width) */}
                    <div className="group relative overflow-hidden rounded-lg border border-neon-green/30 bg-gradient-to-br from-neon-green/10 to-transparent p-6 mt-8 md:p-10 md:mt-12 transition-all duration-300 hover:scale-105 hover:border-neon-green/60 hover:shadow-[0_0_30px_theme(colors.neon-green/30)]">
                      <div className="mb-4 flex items-center gap-2 md:mb-6">
                        <span className="text-3xl md:text-4xl">🔥</span>
                        <span className="font-mono text-sm uppercase tracking-wider text-gray-500 md:text-base">Current Streak</span>
                      </div>
                      <div className="font-mono text-4xl font-bold text-neon-green md:text-5xl lg:text-6xl">{stats.streak}</div>
                      <div className="mt-3 font-mono text-xs text-gray-600 md:mt-4 md:text-sm">days active</div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          ) : (
            // HackTheBox - Visit Profile
            <div className="space-y-4">
              <div className="rounded-lg border border-neon-green/20 bg-black/60 p-8">
                <div className="flex flex-col items-center justify-center space-y-6">
                  {/* HTB Logo/Icon */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-neon-green/30 bg-neon-green/5">
                    <svg className="h-10 w-10 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>

                  {/* Message */}
                  <div className="text-center">
                    <h3 className="mb-2 font-mono text-xl text-neon-green">Live Stats on Profile</h3>
                    <p className="font-mono text-sm text-gray-400">
                      Visit my HackTheBox profile for real-time stats,<br />
                      achievements, and pwned machines
                    </p>
                  </div>

                  {/* Visit Profile Button */}
                  <a
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative overflow-hidden rounded-lg border border-neon-green/50 bg-neon-green/10 px-8 py-3 font-mono text-sm text-neon-green transition-all duration-300 hover:scale-105 hover:border-neon-green hover:bg-neon-green hover:text-brand-dark hover:shadow-[0_0_30px_theme(colors.neon-green/50)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Visit HackTheBox Profile</span>
                      <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}


