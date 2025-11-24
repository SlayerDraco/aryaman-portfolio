// Streak data for cybersecurity platforms

export interface DailyActivity {
  date: string; // YYYY-MM-DD format
  count: number;
}

export interface PlatformStats {
  platform: 'TryHackMe' | 'HackTheBox';
  username: string;
  currentStreak: number;
  longestStreak: number;
  totalRooms: number;
  totalMachines?: number;
  rank: string;
  level: number;
  monthlyActivity: DailyActivity[];
  weeklyStats: {
    week: string;
    completions: number;
  }[];
  categoryBreakdown: {
    category: string;
    count: number;
    color: string;
  }[];
}

// Sample data - Replace with your actual stats
export const tryHackMeStats: PlatformStats = {
  platform: 'TryHackMe',
  username: 'AryamanMalik',
  currentStreak: 45,
  longestStreak: 67,
  totalRooms: 234,
  rank: 'Top 1%',
  level: 12,
  monthlyActivity: [
    { date: '2024-11-01', count: 2 },
    { date: '2024-11-02', count: 3 },
    { date: '2024-11-03', count: 1 },
    { date: '2024-11-04', count: 0 },
    { date: '2024-11-05', count: 4 },
    { date: '2024-11-06', count: 2 },
    { date: '2024-11-07', count: 3 },
    { date: '2024-11-08', count: 5 },
    { date: '2024-11-09', count: 2 },
    { date: '2024-11-10', count: 1 },
    { date: '2024-11-11', count: 3 },
    { date: '2024-11-12', count: 4 },
    { date: '2024-11-13', count: 2 },
    { date: '2024-11-14', count: 0 },
    { date: '2024-11-15', count: 3 },
    { date: '2024-11-16', count: 5 },
    { date: '2024-11-17', count: 2 },
    { date: '2024-11-18', count: 4 },
    { date: '2024-11-19', count: 1 },
    { date: '2024-11-20', count: 3 },
    { date: '2024-11-21', count: 2 },
    { date: '2024-11-22', count: 4 },
    { date: '2024-11-23', count: 3 },
    { date: '2024-11-24', count: 5 },
  ],
  weeklyStats: [
    { week: 'Week 1', completions: 12 },
    { week: 'Week 2', completions: 18 },
    { week: 'Week 3', completions: 15 },
    { week: 'Week 4', completions: 22 },
  ],
  categoryBreakdown: [
    { category: 'Web Exploitation', count: 45, color: '#00ff9c' },
    { category: 'Privilege Escalation', count: 38, color: '#00d4ff' },
    { category: 'Network Security', count: 32, color: '#ff00c1' },
    { category: 'Cryptography', count: 28, color: '#ffaa00' },
    { category: 'Reverse Engineering', count: 25, color: '#ff0066' },
    { category: 'Forensics', count: 20, color: '#00ffaa' },
  ],
};

export const hackTheBoxStats: PlatformStats = {
  platform: 'HackTheBox',
  username: 'AryamanMalik',
  currentStreak: 32,
  longestStreak: 58,
  totalRooms: 0,
  totalMachines: 87,
  rank: 'Hacker',
  level: 9,
  monthlyActivity: [
    { date: '2024-11-01', count: 1 },
    { date: '2024-11-02', count: 2 },
    { date: '2024-11-03', count: 1 },
    { date: '2024-11-04', count: 0 },
    { date: '2024-11-05', count: 3 },
    { date: '2024-11-06', count: 1 },
    { date: '2024-11-07', count: 2 },
    { date: '2024-11-08', count: 4 },
    { date: '2024-11-09', count: 1 },
    { date: '2024-11-10', count: 2 },
    { date: '2024-11-11', count: 1 },
    { date: '2024-11-12', count: 3 },
    { date: '2024-11-13', count: 2 },
    { date: '2024-11-14', count: 0 },
    { date: '2024-11-15', count: 2 },
    { date: '2024-11-16', count: 4 },
    { date: '2024-11-17', count: 1 },
    { date: '2024-11-18', count: 3 },
    { date: '2024-11-19', count: 2 },
    { date: '2024-11-20', count: 1 },
    { date: '2024-11-21', count: 3 },
    { date: '2024-11-22', count: 2 },
    { date: '2024-11-23', count: 4 },
    { date: '2024-11-24', count: 3 },
  ],
  weeklyStats: [
    { week: 'Week 1', completions: 8 },
    { week: 'Week 2', completions: 12 },
    { week: 'Week 3', completions: 10 },
    { week: 'Week 4', completions: 16 },
  ],
  categoryBreakdown: [
    { category: 'Linux Machines', count: 42, color: '#00ff9c' },
    { category: 'Windows Machines', count: 28, color: '#00d4ff' },
    { category: 'Active Directory', count: 15, color: '#ff00c1' },
    { category: 'Web Challenges', count: 22, color: '#ffaa00' },
    { category: 'Pwn Challenges', count: 18, color: '#ff0066' },
    { category: 'Crypto Challenges', count: 12, color: '#00ffaa' },
  ],
};
