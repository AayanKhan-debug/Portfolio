import React from 'react';
import { ArrowUp, Heart, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioConfig } from '../config/portfolio.config';

export const Footer: React.FC = () => {
  const { name, socials } = portfolioConfig.personal;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-950/80 border-t border-slate-900 py-12 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-purple p-0.5 shadow-glow-purple/40">
              <div className="w-full h-full bg-dark-bg rounded-[10px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-brand-purple" />
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-base block leading-tight">{name}</span>
              <span className="text-xs text-slate-500 font-mono">Full-Stack & AI Engineer</span>
            </div>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={socials.email}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              © {currentYear} {name}. Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> & React
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-brand-purple/20 border border-brand-purple/40 text-brand-purple hover:bg-brand-purple hover:text-white transition-all shadow-glow-purple"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
