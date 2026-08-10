import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Code2, Download } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scroll indicator percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      setIsScrolled(currentScroll > 40);

      // ScrollSpy section detector
      const sections = navLinks.map(link => link.href.substring(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-4 pb-2 pointer-events-none">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800/40 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 pointer-events-auto px-4 sm:px-6 py-3 flex items-center justify-between ${
          isScrolled
            ? 'glass-card border border-slate-700/50 shadow-2xl backdrop-blur-2xl bg-dark-bg/80'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-purple p-0.5 shadow-glow-purple/50 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-dark-bg rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-brand-purple group-hover:text-blue-400 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 dark:text-slate-100 text-lg leading-tight font-sans tracking-tight">
              {portfolioConfig.personal.name}
            </span>
            <span className="text-[10px] text-brand-cyan uppercase tracking-widest font-mono font-medium">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-900/50 border border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-purple/80 rounded-full z-0 shadow-glow-purple/40"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Resume Download Pill */}
          <a
            href={portfolioConfig.personal.resumeUrl}
            download="Aayan-Khan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/70 transition-all duration-200 hover:border-brand-purple/50 shadow-md"
          >
            <Download className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Resume</span>
          </a>

          {/* Theme Mode Toggle */}
          <button
            onClick={() => setDarkMode(prev => !prev)}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 text-slate-200 transition-all hover:scale-105"
          >
            {darkMode ? (
              <Sun className="w-4.5 h-4.5 text-amber-400" />
            ) : (
              <Moon className="w-4.5 h-4.5 text-indigo-400" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/70 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 max-w-7xl mx-auto glass-card p-5 border border-slate-800/90 shadow-2xl backdrop-blur-3xl pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-slate-800 flex justify-between items-center">
                <a
                  href={portfolioConfig.personal.resumeUrl}
                  download="Aayan-Khan-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-brand-purple text-white shadow-glow-purple"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
