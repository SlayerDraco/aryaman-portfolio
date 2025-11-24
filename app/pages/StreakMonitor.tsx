"use client";

import { PLATFORM_CONFIG } from '../data/streakData';
import Image from 'next/image';
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
    async function fetchTHMStats() {
      try {
        const response = await fetch('/api/thm-stats');
        const result = await response.json();
        
        if (result.success) {
          setThmStats(result.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Failed to fetch THM stats:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchTHMStats();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden p-6 py-20 md:p-12">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,156,0.06)_0%,_rgba(10,10,10,0)_60%)]" aria-hidden="true"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 pt-16">
        
        {/* Header Section */}
        <div className="mb-12 animate-fadeInUp text-center">
          <h1 className="mb-4 font-mono text-4xl text-neon-green sm:text-5xl md:text-6xl">
            &gt; ./streak_monitor.sh<span className="animate-blink">_</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg text-gray-400 md:text-xl">
            Live stats from my cybersecurity journey - Auto-updated from platform APIs
          </p>
        </div>

        {/* Side by Side Platform Cards */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          
          {/* TryHackMe Card */}
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
          />

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
  error = false
}: PlatformCardProps) {
  return (
    <div 
      className="group animate-fadeInUp"
      style={{ animationDelay: delay }}
    >
      <div className="overflow-hidden rounded-lg border border-neon-green/30 bg-black/40 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-neon-green/70 hover:shadow-[0_0_50px_-5px_theme(colors.neon-green/40)]">
        
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
        <div className="p-6">
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
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <StatCard label="Rank" value={`#${stats.rank.toLocaleString()}`} icon="🏆" />
                  {/* <StatCard label="Level" value={stats.level.toString()} icon="⚡" /> */}
                  <StatCard label="Streak" value={`${stats.streak}d`} icon="🔥" />
                  {/* <StatCard label="Rooms" value={stats.completedRoomsNumber.toString()} icon="📦" /> */}
                  <StatCard label="Top" value={`${stats.topPercentage}%`} icon="📊" />
                  {/* <StatCard label="Badges" value={stats.badgesNumber.toString()} icon="🎖️" /> */}
                </div>
              ) : null}

              {/* TryHackMe Badge Image */}
              <div className="relative overflow-hidden rounded-lg border border-neon-green/20 bg-black/60 p-4">
                <div className="flex justify-center">
                  <Image
                    src={badgeUrl}
                    alt={`${username} TryHackMe Badge`}
                    width={800}
                    height={200}
                    className="w-full max-w-2xl transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-mono text-xs text-gray-500">
                    <span className="text-neon-green">$</span> Auto-updated from TryHackMe API
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // HackTheBox - Profile Card/Widget
            <div className="space-y-4">
              <div className="rounded-lg border border-neon-green/20 bg-black/60 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-sm text-gray-400">Profile Stats</span>
                  <span className="font-mono text-xs text-neon-green">Live</span>
                </div>
                
                {/* HTB Script Widget */}
                <div className="relative aspect-video overflow-hidden rounded border border-neon-green/30 bg-gradient-to-br from-brand-dark to-neon-green/5">
                  <div className="flex h-full flex-col items-center justify-center p-6">
                    <svg className="mb-4 h-16 w-16 text-neon-green/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-center font-mono text-sm text-gray-400">
                      Visit profile to see live stats
                    </p>
                    <p className="mt-2 text-center font-mono text-xs text-gray-600">
                      HTB doesn&apos;t provide public badge API
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="font-mono text-xs text-gray-500">
                    <span className="text-neon-green">$</span> Click profile link above for live stats
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-4 rounded-lg border border-neon-green/20 bg-neon-green/5 p-4">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-mono text-xs text-gray-400">
                {!isHTB 
                  ? 'Stats update automatically from platform'
                  : 'Click the link to view detailed HackTheBox profile'
                }
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  label: string;
  value: string;
  icon: string;
}

function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-neon-green/20 bg-black/60 p-4 transition-all duration-300 hover:scale-105 hover:border-neon-green/50 hover:shadow-[0_0_20px_theme(colors.neon-green/20)]">
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-1 font-mono text-xs uppercase tracking-wider text-gray-600">{label}</div>
          <div className="font-mono text-2xl font-bold text-neon-green">{value}</div>
        </div>
        <div className="text-2xl opacity-50 transition-opacity group-hover:opacity-100">{icon}</div>
      </div>
    </div>
  );
}
