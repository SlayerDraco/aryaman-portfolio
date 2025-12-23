# 🔐 Aryaman Malik - Cybersecurity Portfolio


A premium, hacker-themed portfolio website showcasing cybersecurity expertise, projects, and achievements. Built with Next.js 14+, TypeScript, and Tailwind CSS.

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
- [Performance](#-performance)
- [Troubleshooting](#-troubleshooting)

---

## ✨ Features

### 🎨 Design & UX
- **Hacker-Themed Design**: Cyberpunk aesthetic with neon-green accents
- **Smooth Animations**: GSAP-powered smooth scrolling and transitions
- **Premium Preloader**: Custom terminal-style loading screen (~4 seconds)
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dark Mode**: Seamless dark theme throughout

### 🛠️ Functional Features
- **Dynamic Projects Showcase**: Filter by category, search functionality
- **Live Platform Stats**: Real-time TryHackMe statistics via API
- **Infinite Resource Carousel**: Auto-scrolling PDF resources
- **Interactive Experience Timeline**: Education, certifications, work history
- **Social Integration**: LinkedIn, GitHub, HackTheBox profile links
- **SEO Optimized**: Comprehensive metadata and Open Graph tags

### ⚡ Performance
- **Session Storage**: Preloader shows once per session
- **API Caching**: 1-hour revalidation for platform stats
- **Optimized Images**: Lazy loading and responsive images
- **Fast Load Times**: Minimal dependencies, optimized bundle

---

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/) with ScrollTrigger
- **Icons**: [Lucide React](https://lucide.dev/)

### APIs & Integrations
- TryHackMe Public API
- HackTheBox Profile Integration
- Next.js API Routes for backend

---

## 📁 Project Structure

```
aryman-portfolio/
├── app/
│   ├── api/                      # API routes
│   │   ├── thm-stats/           # TryHackMe stats endpoint
│   │   └── htb-stats/           # HackTheBox profile endpoint
│   ├── components/              # Shared components
│   │   └── Footer.tsx           # Site footer
│   ├── data/                    # Data files
│   │   ├── experienceData.ts    # Education, work, certifications
│   │   ├── projectsData.ts      # Projects showcase
│   │   └── resourcesData.ts     # PDF resources
│   ├── pages/                   # Page components
│   │   ├── LandingPage.tsx      # Hero section
│   │   ├── whoAmI.tsx           # About section
│   │   ├── projects.tsx         # Projects grid
│   │   ├── Resources.tsx        # Resources carousel
│   │   ├── StreakMonitor.tsx    # Platform stats
│   │   └── Experience.tsx       # Timeline
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main page component
├── components/
│   ├── Pre-Loader.tsx           # Terminal preloader
│   └── SmoothScroll.tsx         # GSAP smooth scroll wrapper
├── public/
│   └── resources/               # PDF files and thumbnails
│       ├── *.pdf                # Resource PDFs
│       └── thumbnails/          # Thumbnail images
├── lib/
│   └── utils.ts                 # Utility functions
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/PrathamRanka/aryman-portfolio.git
cd aryman-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## ⚙️ Configuration Guide

### 1. Personal Information

**File**: `app/layout.tsx`

Update SEO metadata:
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Cybersecurity Analyst',
  description: 'Your custom description...',
  keywords: ['Your', 'Keywords'],
  // ... update all metadata
}
```

### 2. Landing Page

**File**: `app/pages/LandingPage.tsx`

Update:
- Name and tagline
- Roles in terminal subtitle
- CV download link
- LinkedIn profile URL

### 3. About Section

**File**: `app/pages/whoAmI.tsx`

Customize:
- Bio text
- Stats (years, projects, challenges, certs)
- Skills and progress percentages
- Quick facts

### 4. Platform Integration

**File**: `app/pages/StreakMonitor.tsx`

Update usernames and profile URLs:
```typescript
const PLATFORM_CONFIG = {
  tryHackMe: {
    username: 'your-thm-username',
    profileUrl: 'https://tryhackme.com/p/your-username',
  },
  hackTheBox: {
    profileUrl: 'https://app.hackthebox.com/profile/your-id',
  }
};
```

### 5. Social Links

**File**: `app/components/Footer.tsx`

Update social media links:
```typescript
const socials = [
  { name: 'GitHub', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  // ... add more
];
```

---

## 📝 Adding Content

### Adding Projects

**File**: `app/data/projectsData.ts`

```typescript
{
  id: 7,
  title: "Your Project Title",
  description: "Project description (2-3 sentences)",
  category: "Cybersecurity", // or 'Web Development', 'Hardware', 'VLSI'
  tags: ["Tag1", "Tag2", "Tag3"],
  image: "/projects/your-image.jpg",
  github: "https://github.com/yourusername/project",
  demo: "https://demo-url.com", // optional
  year: "2025"
}
```

### Adding Experience/Certifications

**File**: `app/data/experienceData.ts`

```typescript
{
  id: 4,
  type: 'certification', // or 'work', 'education'
  title: "Certification Name",
  organization: "Organization Name",
  location: "Location",
  period: "Month Year",
  description: "Brief description of the certification/role",
  achievements: [
    "Achievement or learning 1",
    "Achievement or learning 2",
  ],
  technologies: ["Tech1", "Tech2", "Tech3"],
}
```

### Adding Resources (PDFs)

**Step 1**: Upload PDF to `/public/resources/`

**Step 2**: (Optional) Add thumbnail to `/public/resources/thumbnails/`

**Step 3**: Update `app/data/resourcesData.ts`

```typescript
{
  id: 7,
  title: "Resource Title",
  fileUrl: "/resources/your-file.pdf",
  uploadDate: "2025-11-24", // YYYY-MM-DD
  size: "5.2 MB"
}
```

**That's it!** The resource will automatically appear in the carousel.

---

## 🎨 Customization

### Theme Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  'neon-green': '#00ff9c',    // Primary accent color
  'brand-dark': '#0a0a0a',    // Background color
  // Add custom colors
}
```

### Fonts

**File**: `app/layout.tsx`

Currently using:
- **Sans**: Inter (for body text)
- **Mono**: JetBrains Mono (for code/terminal)

To change fonts, update Google Fonts imports.

### Animations

**Global animations**: `app/globals.css`
- `fadeInUp`, `blink`, `shimmer`, `glitch`, `glow-pulse`

**GSAP settings**: `components/SmoothScroll.tsx`
- Scroll duration: 1s
- Easing: `power3.inOut`

### Preloader

**File**: `components/Pre-Loader.tsx`

Customize:
- Commands array (lines of text)
- Typing speed (default: 15ms/char)
- Stage durations (init: 800ms, complete: 1200ms)
- Terminal colors and styling

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click
4. Custom domain: Configure in Vercel settings

### Other Platforms

**Build command**: `npm run build`  
**Output directory**: `.next`  
**Node version**: 18+

Compatible with:
- Netlify
- Railway
- Render
- AWS Amplify
- Cloudflare Pages

---

## ⚡ Performance

### Current Optimizations
- **Lazy loading**: Images and components
- **Code splitting**: Automatic with Next.js
- **API caching**: 1-hour revalidation
- **Session storage**: Preloader shows once
- **Smooth scrolling**: GSAP with GPU acceleration
- **Minimal bundle**: Only essential dependencies

### Performance Tips
1. Optimize images (use WebP format)
2. Minimize PDF file sizes (<10MB)
3. Remove unused dependencies
4. Enable Next.js Image Optimization
5. Use CDN for static assets

---

## 🐛 Troubleshooting

### Common Issues

**Preloader not showing**
- Clear browser cache and session storage
- Check `app/page.tsx` - preloader should be enabled

**API stats not loading**
- Verify username in `StreakMonitor.tsx`
- Check browser console for CORS errors
- TryHackMe API may be rate-limited

**Smooth scroll not working**
- Ensure GSAP is installed: `npm install gsap`
- Check `SmoothScroll.tsx` is imported in `page.tsx`

**Resources not appearing**
- Verify PDF path matches `resourcesData.ts`
- Files must be in `/public/resources/`
- Check browser console for 404 errors

**Mobile responsiveness issues**
- Test with Chrome DevTools mobile emulator
- Check Tailwind breakpoints (sm, md, lg, xl)
- Verify padding/margin values

### Getting Help

1. Check browser console for errors
2. Verify all dependencies are installed
3. Review this README for configuration
4. Check Next.js documentation
5. Open an issue on GitHub

---

## 📦 Key Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.0.0",
  "gsap": "^3.12.0",
  "lucide-react": "^0.300.0"
}
```

---

## 🔐 Environment Variables

Currently, no environment variables are required. All configuration is in code files.

For future API keys or secrets:

1. Create `.env.local`
2. Add to `.gitignore`
3. Use in code: `process.env.YOUR_VAR`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Aryaman Malik**
- GitHub: [@PrathamRanka](https://github.com/PrathamRanka)
- TryHackMe: [aryaman007](https://tryhackme.com/p/aryaman007)
- HackTheBox: [Profile](https://app.hackthebox.com/profile/2800606)

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling
- GSAP for smooth animations
- Lucide for beautiful icons
- TryHackMe for the public API

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🔄 Version History

### v1.0.0 (Current)
- Initial release
- Complete portfolio with all sections
- TryHackMe API integration
- Resources carousel
- Premium preloader
- GSAP smooth scrolling
- Full responsive design
- SEO optimization

---

## 📞 Support

For questions or issues:
1. Open an issue on GitHub
2. Check existing issues for solutions
3. Review this documentation
4. Contact via LinkedIn

---

**Happy Coding! 🚀🔐**

Made with 💚 by Aryaman Malik

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
