"use client";

import { useState } from 'react';
import { tryHackMeStats, hackTheBoxStats, type PlatformStats } from '../data/streakData';

export default function StreakMonitorPage() {
  const [activePlatform, setActivePlatform] = useState<'TryHackMe' | 'HackTheBox'>('TryHackMe');
  
  const stats = activePlatform === 'TryHackMe' ? tryHackMeStats : hackTheBoxStats;

  return (
    <section className="relative min-h-screen overflow-hidden p-6 py-20 md:p-12">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,156,0.06)_0%,_rgba(10,10,10,0)_60%)]" aria-hidden="true"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-12 animate-fadeInUp text-center">
          <h1 className="mb-4 font-mono text-4xl text-neon-green sm:text-5xl md:text-6xl">
            &gt; ./streak_monitor.sh<span className="animate-blink">_</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg text-gray-400 md:text-xl">
            Tracking my journey through capture-the-flag challenges and penetration testing labs
          </p>
        </div>

        {/* Platform Toggle */}
        <div className="mb-12 flex justify-center animate-fadeInUp [animation-delay:200ms]">
          <div className="inline-flex rounded-lg border border-neon-green/30 bg-black/40 p-1 backdrop-blur-sm">
            <button
              onClick={() => setActivePlatform('TryHackMe')}
              className={`rounded-md px-6 py-2 font-mono text-sm transition-all duration-300
                ${activePlatform === 'TryHackMe'
                  ? 'bg-neon-green/20 text-neon-green shadow-[0_0_20px_theme(colors.neon-green/30)]'
                  : 'text-gray-400 hover:text-neon-green'
                }`}
            >
              [TryHackMe]
            </button>
            <button
              onClick={() => setActivePlatform('HackTheBox')}
              className={`rounded-md px-6 py-2 font-mono text-sm transition-all duration-300
                ${activePlatform === 'HackTheBox'
                  ? 'bg-neon-green/20 text-neon-green shadow-[0_0_20px_theme(colors.neon-green/30)]'
                  : 'text-gray-400 hover:text-neon-green'
                }`}
            >
              [HackTheBox]
            </button>
          </div>
        </div>

        {/* Stats Overview Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-fadeInUp [animation-delay:300ms]">
          <StatCard
            label="Current Streak"
            value={`${stats.currentStreak} days`}
            icon="🔥"
            highlight
          />
          <StatCard
            label="Longest Streak"
            value={`${stats.longestStreak} days`}
            icon="⭐"
          />
          <StatCard
            label={stats.platform === 'TryHackMe' ? 'Total Rooms' : 'Total Machines'}
            value={stats.platform === 'TryHackMe' ? stats.totalRooms : stats.totalMachines || 0}
            icon="🎯"
          />
          <StatCard
            label="Rank"
            value={stats.rank}
            icon="🏆"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Activity Heatmap */}
          <div className="animate-fadeInUp [animation-delay:400ms]">
            <ActivityHeatmap stats={stats} />
          </div>

          {/* Weekly Progress Chart */}
          <div className="animate-fadeInUp [animation-delay:500ms]">
            <WeeklyProgressChart stats={stats} />
          </div>

          {/* Category Breakdown */}
          <div className="animate-fadeInUp lg:col-span-2 [animation-delay:600ms]">
            <CategoryBreakdown stats={stats} />
          </div>

        </div>

        {/* Profile Link */}
        <div className="mt-12 text-center animate-fadeInUp [animation-delay:700ms]">
          <a
            href={stats.platform === 'TryHackMe' 
              ? `https://tryhackme.com/p/${stats.username}`
              : `https://app.hackthebox.com/profile/${stats.username}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neon-green bg-neon-green/10 px-6 py-3 
                     font-mono text-sm text-neon-green transition-all duration-300
                     hover:bg-neon-green hover:text-brand-dark hover:shadow-[0_0_30px_theme(colors.neon-green/50)]"
          >
            View {stats.platform} Profile
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

// Stat Card Component
interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
  highlight?: boolean;
}

function StatCard({ label, value, icon, highlight = false }: StatCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-lg border bg-black/40 p-6 backdrop-blur-sm transition-all duration-300
      ${highlight 
        ? 'border-neon-green/60 shadow-[0_0_30px_theme(colors.neon-green/20)] hover:border-neon-green hover:shadow-[0_0_40px_theme(colors.neon-green/30)]' 
        : 'border-neon-green/30 shadow-lg shadow-neon-green/10 hover:border-neon-green/60'
      }`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="mb-2 font-mono text-sm text-gray-500">{label}</p>
          <p className="font-mono text-3xl font-bold text-white">{value}</p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
      {highlight && (
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-50"></div>
      )}
    </div>
  );
}

// Activity Heatmap Component
function ActivityHeatmap({ stats }: { stats: PlatformStats }) {
  const maxCount = Math.max(...stats.monthlyActivity.map(d => d.count), 1);
  
  return (
    <div className="rounded-lg border border-neon-green/30 bg-black/40 p-6 backdrop-blur-sm">
      <h2 className="mb-6 font-mono text-xl text-neon-green">
        <span className="text-gray-500">//</span> Activity Heatmap
      </h2>
      
      <div className="grid grid-cols-7 gap-2">
        {stats.monthlyActivity.map((day, index) => {
          const intensity = day.count / maxCount;
          const date = new Date(day.date);
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
          
          return (
            <div
              key={index}
              className="group relative"
              title={`${day.date}: ${day.count} completions`}
            >
              <div
                className={`aspect-square rounded border transition-all duration-300 hover:scale-110 hover:border-neon-green
                  ${day.count === 0 
                    ? 'border-gray-800 bg-gray-900/50' 
                    : 'border-neon-green/30'
                  }`}
                style={{
                  backgroundColor: day.count > 0 
                    ? `rgba(0, 255, 156, ${0.2 + intensity * 0.6})` 
                    : undefined
                }}
              >
                <div className="flex h-full items-center justify-center font-mono text-xs text-gray-600">
                  {day.count || ''}
                </div>
              </div>
              {/* Tooltip */}
              <div className="pointer-events-none absolute -top-12 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap 
                            rounded border border-neon-green/50 bg-black px-2 py-1 font-mono text-xs text-neon-green 
                            opacity-0 transition-opacity group-hover:opacity-100">
                {dayName} {day.date.split('-')[2]}: {day.count}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-between border-t border-neon-green/20 pt-4">
        <span className="font-mono text-xs text-gray-500">Less</span>
        <div className="flex gap-1">
          {[0, 0.25, 0.5, 0.75, 1].map((intensity, i) => (
            <div
              key={i}
              className="h-4 w-4 rounded border border-neon-green/30"
              style={{
                backgroundColor: intensity === 0 
                  ? 'rgba(17, 17, 17, 0.5)' 
                  : `rgba(0, 255, 156, ${0.2 + intensity * 0.6})`
              }}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-gray-500">More</span>
      </div>
    </div>
  );
}

// Weekly Progress Chart
function WeeklyProgressChart({ stats }: { stats: PlatformStats }) {
  const maxCompletions = Math.max(...stats.weeklyStats.map(w => w.completions));
  
  return (
    <div className="rounded-lg border border-neon-green/30 bg-black/40 p-6 backdrop-blur-sm">
      <h2 className="mb-6 font-mono text-xl text-neon-green">
        <span className="text-gray-500">//</span> Weekly Progress
      </h2>
      
      <div className="space-y-4">
        {stats.weeklyStats.map((week, index) => {
          const percentage = (week.completions / maxCompletions) * 100;
          
          return (
            <div key={index} className="group">
              <div className="mb-2 flex justify-between font-mono text-sm">
                <span className="text-gray-400">{week.week}</span>
                <span className="text-neon-green">{week.completions} completions</span>
              </div>
              <div className="relative h-8 overflow-hidden rounded border border-neon-green/30 bg-gray-900/50">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-green/40 to-neon-green/60 transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${percentage}%`,
                    animation: `slideIn 1s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-neon-green/30 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative z-10 font-mono text-xs text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
                    {percentage.toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Category Breakdown Component
function CategoryBreakdown({ stats }: { stats: PlatformStats }) {
  const total = stats.categoryBreakdown.reduce((sum, cat) => sum + cat.count, 0);
  
  return (
    <div className="rounded-lg border border-neon-green/30 bg-black/40 p-6 backdrop-blur-sm">
      <h2 className="mb-6 font-mono text-xl text-neon-green">
        <span className="text-gray-500">//</span> Category Breakdown
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        
        {/* Circular Progress */}
        <div className="flex items-center justify-center">
          <div className="relative h-64 w-64">
            <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
              {stats.categoryBreakdown.reduce((acc, category, index) => {
                const prevPercentage = acc.offset;
                const percentage = (category.count / total) * 100;
                const circumference = 2 * Math.PI * 40;
                const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                const strokeDashoffset = -prevPercentage * circumference / 100;
                
                acc.offset += percentage;
                acc.elements.push(
                  <circle
                    key={index}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={category.color}
                    strokeWidth="8"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-1000 ease-out hover:stroke-[10] hover:drop-shadow-[0_0_8px_currentColor]"
                    style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` }}
                  />
                );
                
                return acc;
              }, { offset: 0, elements: [] as JSX.Element[] }).elements}
            </svg>
            
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-4xl font-bold text-white">{total}</span>
              <span className="font-mono text-sm text-gray-500">Total</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col justify-center space-y-3">
          {stats.categoryBreakdown.map((category, index) => {
            const percentage = ((category.count / total) * 100).toFixed(1);
            
            return (
              <div
                key={index}
                className="group flex items-center justify-between rounded border border-transparent p-2 transition-all hover:border-neon-green/30 hover:bg-neon-green/5"
                style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-3 w-3 rounded-full transition-all group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_currentColor]"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="font-mono text-sm text-gray-300">{category.category}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-gray-500">{percentage}%</span>
                  <span className="font-mono text-sm font-bold text-neon-green">{category.count}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
