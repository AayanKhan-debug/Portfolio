import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Sparkles, Terminal, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';
import { portfolioConfig } from '../config/portfolio.config';

export const HeroSection: React.FC = () => {
  const { name, title, roles, shortIntro, resumeUrl, socials, availability } = portfolioConfig.personal;
  
  // Typing animation state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Intro */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md mb-6 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-medium text-slate-300">{availability}</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 leading-[1.1]">
              Hi, I'm <span className="gradient-text">{name}</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="flex items-center text-xl sm:text-3xl font-mono font-semibold text-slate-300 mb-6 h-10">
              <span className="text-brand-purple mr-2">&gt;</span>
              <span>{displayedText}</span>
              <span className="w-2 h-7 bg-brand-cyan ml-1 animate-pulse" />
            </div>

            {/* Sub-Headline */}
            <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed font-sans">
              {shortIntro}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-pink-600 text-white font-semibold text-sm shadow-glow-purple hover:shadow-glow-blue transition-all duration-300 hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={resumeUrl}
                download="Aayan-Khan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-brand-cyan text-slate-200 font-semibold text-sm backdrop-blur-md hover:bg-slate-800 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-brand-cyan" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-transparent text-slate-300 hover:text-white font-semibold text-sm hover:underline decoration-brand-purple underline-offset-4 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono uppercase text-slate-500 tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-brand-purple hover:shadow-glow-purple/30 transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-brand-blue hover:shadow-glow-blue/30 transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-amber-500 hover:text-amber-400 hover:border-amber-500/50 transition-all"
                >
                  <LeetCodeIcon className="w-5 h-5" />
                </a>
                <a
                  href={socials.email}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-pink-500 hover:shadow-glow-purple/30 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Coding Illustration & Interactive Terminal Mockup */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan rounded-3xl blur-2xl opacity-25 animate-pulse-slow pointer-events-none" />

            {/* Glassmorphism Code Terminal */}
            <div className="relative w-full max-w-lg glass-card overflow-hidden border border-slate-700/80 shadow-2xl font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-brand-purple" />
                  <span>developer.ts</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 space-y-3 leading-relaxed text-slate-300 bg-slate-950/60">
                <div>
                  <span className="text-pink-400">interface</span>{' '}
                  <span className="text-amber-300">Developer</span> &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-400">"{name}"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">title:</span>{' '}
                  <span className="text-emerald-400">"{title}"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreTech:</span> [
                  <span className="text-cyan-300">"React"</span>,{' '}
                  <span className="text-cyan-300">"TypeScript"</span>,{' '}
                  <span className="text-cyan-300">"Node.js"</span>,{' '}
                  <span className="text-cyan-300">"AI/ML"</span>];
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">leetcodeSolves:</span>{' '}
                  <span className="text-amber-400">300</span>;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-purple-400">"Building high-impact apps"</span>;
                </div>
                <div>&#125;</div>

                <div className="pt-2 text-slate-500">
                  <span className="text-brand-purple">// Execution Pipeline</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <span>&gt;</span>
                  <span className="text-slate-200">Developer.deploy(</span>
                  <span className="text-amber-300">"FullStack + AI"</span>
                  <span className="text-slate-200">);</span>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center justify-between">
                  <span>✔ Build succeeded in 1.2s (Zero errors)</span>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
