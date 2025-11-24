import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add your custom fonts, colors, keyframes, and animations
      fontFamily: {
        // Setup to use CSS variables (see layout.tsx below)
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        'neon-green': '#00ff9c',
        'brand-dark': '#0a0a0a',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(-3px, -3px)' },
          '60%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' },
          'to': { transform: 'translate(0)' },
        },
        glitch_2: {
          '0%': { clipPath: 'inset(33% 0 54% 0)' },
          '5%': { clipPath: 'inset(84% 0 1% 0)' },
          '10%': { clipPath: 'inset(37% 0 18% 0)' },
          '15%': { clipPath: 'inset(99% 0 1% 0)' },
          '20%': { clipPath: 'inset(71% 0 2% 0)' },
          '25%': { clipPath: 'inset(34% 0 63% 0)' },
          '30%': { clipPath: 'inset(8% 0 71% 0)' },
          '35%': { clipPath: 'inset(82% 0 2% 0)' },
          '40%': { clipPath: 'inset(18% 0 65% 0)' },
          '45%': { clipPath: 'inset(77% 0 1% 0)' },
          '50%': { clipPath: 'inset(2% 0 85% 0)' },
          '55%': { clipPath: 'inset(64% 0 16% 0)' },
          '60%': { clipPath: 'inset(62% 0 32% 0)' },
          '65%': { clipPath: 'inset(36% 0 51% 0)' },
          '70%': { clipPath: 'inset(90% 0 8% 0)' },
          '75%': { clipPath: 'inset(43% 0 40% 0)' },
          '80%': { clipPath: 'inset(13% 0 62% 0)' },
          '85%': { clipPath: 'inset(4% 0 78% 0)' },
          '90%': { clipPath: 'inset(72% 0 9% 0)' },
          '95%': { clipPath: 'inset(69% 0 12% 0)' },
          '100%': { clipPath: 'inset(32% 0 51% 0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 156, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 255, 156, 0.6), 0 0 60px rgba(0, 255, 156, 0.3)',
          },
        },
      },
      animation: {
        glitch: 'glitch 0.25s linear infinite',
        glitch_2: 'glitch_2 1.5s linear infinite',
        blink: 'blink 1s step-end infinite',
        shimmer: 'shimmer 2s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;