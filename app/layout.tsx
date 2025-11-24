import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Setup fonts with CSS variables
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400']
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: 'Aryaman Malik | Cybersecurity Analyst & Penetration Tester Portfolio',
  description: 'Aryaman Malik - Professional Cybersecurity Analyst, Penetration Tester, and Ethical Hacker. Expert in vulnerability assessment, threat analysis, network security, and CTF challenges. Explore my portfolio showcasing cybersecurity projects, TryHackMe achievements, and HackTheBox profiles.',
  keywords: [
    'Aryaman Malik',
    'Cybersecurity Analyst',
    'Penetration Tester',
    'Ethical Hacker',
    'Security Researcher',
    'Vulnerability Assessment',
    'Threat Analysis',
    'Network Security',
    'CTF Player',
    'TryHackMe',
    'HackTheBox',
    'Information Security',
    'Web Application Security',
    'Security Portfolio',
    'Cybersecurity Professional'
  ],
  authors: [{ name: 'Aryaman Malik' }],
  creator: 'Aryaman Malik',
  publisher: 'Aryaman Malik',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aryamanmalik.com',
    siteName: 'Aryaman Malik Portfolio',
    title: 'Aryaman Malik | Cybersecurity Analyst & Penetration Tester',
    description: 'Professional Cybersecurity Analyst specializing in penetration testing, vulnerability assessment, and ethical hacking. Explore my projects and achievements.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aryaman Malik - Cybersecurity Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryaman Malik | Cybersecurity Analyst & Penetration Tester',
    description: 'Professional Cybersecurity Analyst specializing in penetration testing, vulnerability assessment, and ethical hacking.',
    images: ['/og-image.png'],
    creator: '@aryamanmalik',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  category: 'technology',
  classification: 'Cybersecurity Portfolio',
  applicationName: 'Aryaman Malik Portfolio',
  metadataBase: new URL('https://aryamanmalik.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Apply font variables and base classes to the body */}
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans text-gray-300 bg-brand-dark`}>
        {children}
      </body>
    </html>
  );
}