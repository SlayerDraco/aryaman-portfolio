# 🔐 Aryaman Malik — Cybersecurity Portfolio

A premium, hacker-themed portfolio website showcasing cybersecurity expertise, projects, and achievements. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## 🚀 Live Demo

Visit the live site: [aryaman-malik.in](https://aryaman-malik.in)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration Guide](#-configuration-guide)
- [Adding Content](#-adding-content)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Troubleshooting](#-troubleshooting)

---

## ✨ Features

### 🎨 Design & UX
- **Hacker-themed design** — cyberpunk aesthetic with neon-green accents
- **Smooth animations** — GSAP-powered scrolling and transitions, plus Motion and React Parallax Tilt effects
- **Terminal-style preloader** — shown once per session via `sessionStorage`
- **Fully responsive** — optimized for mobile, tablet, and desktop
- **Dark theme** throughout

### 🛠️ Functional Features
- **Projects showcase** with categories and tags (`app/data/projectsData.ts`)
- **Live platform stats** — TryHackMe stats fetched server-side via a Next.js API route; HackTheBox profile linked (HTB has no public stats API)
- **Resources carousel** for downloadable PDFs (`app/data/resourcesData.ts`)
- **Experience timeline** — education, work, and certifications (`app/data/experienceData.ts`)
- **Contact data** module for footer/contact links (`app/data/contactData.ts`)
- **SEO** — metadata and Open Graph tags in `app/layout.tsx`

### ⚡ Performance
- Preloader shown once per session (session storage)
- TryHackMe API responses cached for 1 hour (`next: { revalidate: 3600 }`)
- Automatic code splitting via Next.js App Router

---

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation**: [GSAP](https://greensock.com/gsap/), [Motion](https://motion.dev/), [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`

---

## 📁 Project Structure

```
aryaman-portfolio/
├── app/
│   ├── api/
│   │   ├── thm-stats/route.ts     # TryHackMe stats endpoint
│   │   └── htb-stats/route.ts     # HackTheBox profile link endpoint
│   ├── components/
│   │   └── Footer.tsx             # Site footer
│   ├── data/
│   │   ├── contactData.ts         # Contact/social info
│   │   ├── experienceData.ts      # Education, work, certifications
│   │   ├── projectsData.ts        # Projects showcase
│   │   ├── resourcesData.ts       # PDF resources metadata
│   │   └── streakData.ts          # Platform streak/stats data
│   ├── pages/
│   │   ├── LandingPage.tsx        # Hero section
│   │   ├── whoAmI.tsx             # About section
│   │   ├── projects.tsx           # Projects grid
│   │   ├── Resources.tsx          # Resources carousel
│   │   ├── StreakMonitor.tsx      # Platform stats
│   │   └── Experience.tsx         # Timeline
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout + metadata
│   └── page.tsx                   # Main page composition
├── components/
│   ├── Pre-Loader.tsx             # Terminal preloader
│   └── SmoothScroll.tsx           # GSAP smooth-scroll wrapper
├── lib/
│   └── utils.ts                   # Utility functions (cn helper, etc.)
├── public/
│   ├── images/                    # Project screenshots
│   └── Resume_New.pdf             # Downloadable resume/CV
├── components.json                # shadcn/ui config
├── eslint.config.mjs              # ESLint (flat config)
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ (recommended for Next.js 16 / React 19)
- npm, yarn, or pnpm
- Git

### Installation

```bash
git clone https://github.com/SlayerDraco/aryaman-portfolio
cd aryman-portfolio
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Lint

```bash
npm run lint
```

### Build for production

```bash
npm run build
npm start
```

---

## ⚙️ Configuration Guide

### 1. Personal information & SEO
**File**: `app/layout.tsx` — update `title`, `description`, `keywords`, `openGraph`, and the canonical URL (currently `https://aryamanmalik.com`, which does not match the live domain `aryaman-malik.in` — keep these in sync).

### 2. Landing page
**File**: `app/pages/LandingPage.tsx` — name, tagline, terminal subtitle roles, CV download link, LinkedIn URL.

### 3. About section
**File**: `app/pages/whoAmI.tsx` — bio, stats, skills/progress bars, quick facts.

### 4. Platform integration
**Files**: `app/pages/StreakMonitor.tsx` and `app/api/thm-stats/route.ts` — the TryHackMe username is currently hardcoded (`aryaman007`) inside the API route rather than read from configuration. Consider moving it to an environment variable (see below).

**File**: `app/api/htb-stats/route.ts` — HTB user ID defaults to `2800606` but can be overridden with `HTB_USER_ID`.

### 5. Social & contact links
**Files**: `app/components/Footer.tsx`, `app/data/contactData.ts`.

---

## 📝 Adding Content

### Projects — `app/data/projectsData.ts`
```typescript
{
  id: 7,
  title: "Your Project Title",
  description: "Project description (2-3 sentences)",
  category: "Cybersecurity", // or "Web Development", "Hardware", "VLSI"
  tags: ["Tag1", "Tag2", "Tag3"],
  image: "/images/your-image.png",
  github: "https://github.com/yourusername/project",
  demo: "https://demo-url.com", // optional
  year: "2025"
}
```
Place project screenshots in `public/images/`.

### Experience / certifications — `app/data/experienceData.ts`
```typescript
{
  id: 4,
  type: "certification", // or "work", "education"
  title: "Certification Name",
  organization: "Organization Name",
  location: "Location",
  period: "Month Year",
  description: "Brief description of the certification/role",
  achievements: ["Achievement 1", "Achievement 2"],
  technologies: ["Tech1", "Tech2", "Tech3"]
}
```

### Resources (PDFs) — `app/data/resourcesData.ts`
1. Add the PDF file to `public/` (create a `public/resources/` folder to keep these organized).
2. Register it:
```typescript
{
  id: 7,
  title: "Resource Title",
  fileUrl: "/resources/your-file.pdf",
  uploadDate: "2025-11-24", // YYYY-MM-DD
  size: "5.2 MB"
}
```

---

## 🎨 Customization

### Theme colors — `tailwind.config.ts` / `app/globals.css`
Key accents: `neon-green` (`#00ff9c`) and `brand-dark` (`#0a0a0a`). Tailwind 4 favors CSS-variable-based theming in `globals.css`; check there first if `tailwind.config.ts` values don't seem to take effect.

### Fonts — `app/layout.tsx`
- **Sans**: Inter
- **Mono**: JetBrains Mono

### Animations
- Global keyframes: `app/globals.css` (`fadeInUp`, `blink`, `shimmer`, `glitch`, `glow-pulse`)
- Scroll behavior: `components/SmoothScroll.tsx` (GSAP + ScrollTrigger)

### Preloader — `components/Pre-Loader.tsx`
Customize the command list, typing speed, stage durations, and terminal styling.

---

## 🚀 Deployment

### Vercel (recommended)
1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Deploy — no environment variables are required by default.
4. Attach a custom domain in project settings.

### Other platforms
- **Build command**: `npm run build`
- **Output**: `.next`
- **Node version**: 20+

Compatible with Netlify, Railway, Render, AWS Amplify, and Cloudflare Pages.

---

## 🔐 Environment Variables

None are required to run the project today. One optional variable is already read in code:

| Variable | Used in | Purpose | Default |
|---|---|---|---|
| `HTB_USER_ID` | `app/api/htb-stats/route.ts` | HackTheBox profile ID used to build the profile link | `2800606` |

To add secrets:
1. Create `.env.local` (already git-ignored).
2. Reference with `process.env.YOUR_VAR`.

---

## 🐛 Troubleshooting

**Preloader not showing** — Clear `sessionStorage` (`hasSeenPreloader` key) and reload; confirm the preloader logic in `app/page.tsx` hasn't been bypassed.

**TryHackMe stats not loading** — Check `app/api/thm-stats/route.ts`; the TryHackMe public API may be rate-limited or the username may need updating.

**HackTheBox stats show only a profile link** — This is expected: HTB does not expose a public stats API, so `htb-stats` returns a profile URL rather than live data.

**Smooth scroll not working** — Confirm `SmoothScroll` wraps the page content in `app/page.tsx` and that `gsap` is installed.

**Resources not appearing** — Confirm the `fileUrl` in `resourcesData.ts` matches an actual file under `public/`.

**Mobile layout issues** — Test with responsive dev tools and check Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).

---

## 👤 Author

**Aryaman Malik**
- GitHub: [@AryamanMalik](https://github.com/SlayerDraco/)
- TryHackMe: [aryaman007](https://tryhackme.com/p/aryaman007)

---

**Made with 💚 by Aryaman Malik**