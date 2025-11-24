"use client";

import { useState } from 'react';
import { contactInfo } from '../data/contactData';

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gray-900 bg-black">
      {/* Subtle top glow */}
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-neon-green/30 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 md:py-20">
        
        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column - Branding & CTA */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <h2 className="mb-2 font-mono text-3xl tracking-tight text-white md:text-4xl">
                Let&apos;s work together
              </h2>
              <div className="h-px w-16 bg-neon-green"></div>
            </div>
            
            <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-400">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you.
            </p>

            {/* Primary CTA */}
            
            {/* Availability Badge */}

          </div>

          {/* Right Column - Contact Info & Links */}
          <div className="lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2">
              
              {/* Contact Methods */}
              <div>
                <h3 className="mb-6 font-mono text-sm uppercase tracking-wider text-gray-600">
                  Contact
                </h3>
                <div className="space-y-4">
                  
                  {/* Email */}
                  <button
                    onClick={() => copyToClipboard(contactInfo.email, 'email')}
                    className="group flex w-full items-center justify-between text-left transition-colors hover:text-neon-green"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-800 bg-gray-900/50 transition-colors group-hover:border-neon-green/50">
                        <svg className="h-5 w-5 text-gray-400 transition-colors group-hover:text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-mono text-xs text-gray-600">Email</div>
                        <div className="font-mono text-sm text-gray-300 transition-colors group-hover:text-neon-green">
                          {contactInfo.email}
                        </div>
                      </div>
                    </div>
                    {copiedEmail ? (
                      <svg className="h-4 w-4 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4 text-gray-600 opacity-0 transition-opacity group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>

                  {/* Phone */}
                  <button
                    onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                    className="group flex w-full items-center justify-between text-left transition-colors hover:text-neon-green"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-800 bg-gray-900/50 transition-colors group-hover:border-neon-green/50">
                        <svg className="h-5 w-5 text-gray-400 transition-colors group-hover:text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-mono text-xs text-gray-600">Phone</div>
                        <div className="font-mono text-sm text-gray-300 transition-colors group-hover:text-neon-green">
                          {contactInfo.phone}
                        </div>
                      </div>
                    </div>
                    {copiedPhone ? (
                      <svg className="h-4 w-4 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4 text-gray-600 opacity-0 transition-opacity group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>

                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-6 font-mono text-sm uppercase tracking-wider text-gray-600">
                  Social
                </h3>
                <div className="space-y-3">
                  
                  {/* GitHub */}
                  <a
                    href={contactInfo.social.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between transition-colors hover:text-neon-green"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-800 bg-gray-900/50 transition-colors group-hover:border-neon-green/50">
                        <svg className="h-5 w-5 text-gray-400 transition-colors group-hover:text-neon-green" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-mono text-xs text-gray-600">GitHub</div>
                        <div className="font-mono text-sm text-gray-300 transition-colors group-hover:text-neon-green">
                          {contactInfo.social.github.username}
                        </div>
                      </div>
                    </div>
                    <svg className="h-4 w-4 text-gray-600 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={contactInfo.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between transition-colors hover:text-neon-green"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-800 bg-gray-900/50 transition-colors group-hover:border-neon-green/50">
                        <svg className="h-5 w-5 text-gray-400 transition-colors group-hover:text-neon-green" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-mono text-xs text-gray-600">Linkedin</div>
                        <div className="font-mono text-sm text-gray-300 transition-colors group-hover:text-neon-green">
                          {contactInfo.social.linkedin.username}
                        </div>
                      </div>
                    </div>
                    <svg className="h-4 w-4 text-gray-600 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a
                    href={contactInfo.social.twitter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between transition-colors hover:text-neon-green"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-800 bg-gray-900/50 transition-colors group-hover:border-neon-green/50">
                        <svg className="h-5 w-5 text-gray-400 transition-colors group-hover:text-neon-green" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-mono text-xs text-gray-600">Twitter</div>
                        <div className="font-mono text-sm text-gray-300 transition-colors group-hover:text-neon-green">
                          {contactInfo.social.twitter.username}
                        </div>
                      </div>
                    </div>
                    <svg className="h-4 w-4 text-gray-600 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-900 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-gray-600">
                © {currentYear}
              </span>
              <span className="text-gray-800">•</span>
              <span className="font-mono text-sm text-gray-500">
                Made with ❤️

              </span>
            </div>

            {/* Timezone */}
            <div className="flex items-center gap-2 font-mono text-sm text-gray-600">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {contactInfo.timezone}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
