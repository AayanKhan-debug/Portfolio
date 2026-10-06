import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, FolderGit2, Brain, Cpu, Flame, GitCommit, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';

export const AchievementsSection: React.FC = () => {
  const { achievements } = portfolioConfig;

  const getAchIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-amber-500" />;
      case 'FolderGit2': return <FolderGit2 className="w-5 h-5 text-brand-blue" />;
      case 'Brain': return <Brain className="w-5 h-5 text-brand-purple" />;
      default: return <Cpu className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-amber-500 text-xs font-mono font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 via-brand-purple to-pink-500 rounded-full mt-4" />
        </div>

        {/* LeetCode & Backend Engineering Featured Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 mb-12 bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 shadow-sm dark:shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* LeetCode Badge Box */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-amber-500/30 shadow-xs">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <Flame className="w-8 h-8 text-amber-500 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-amber-500 font-bold">LeetCode Problem Solving</span>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono transition-colors">300+ Solved</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Data Structures & Algorithmic Foundations</p>
              </div>
            </div>

            {/* Project Highlight Box */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-emerald-500/30 shadow-xs">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <GitCommit className="w-8 h-8 text-emerald-500" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">Backend Engineering</span>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono transition-colors">CampusOS Platform</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Enterprise campus backend built with Spring Boot & MySQL</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, idx) => (
            <motion.article
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform">
                    {getAchIcon(ach.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                    {ach.category}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-lg bg-brand-purple/10 dark:bg-brand-purple/20 border border-brand-purple/30 text-brand-purple text-xs font-mono font-bold mb-3">
                  {ach.metric}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {ach.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {ach.description}
                </p>
              </div>

              {ach.link && (
                <a
                  href={ach.link}
                  target={ach.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline pt-2 border-t border-slate-200 dark:border-slate-800/80"
                >
                  <span>Explore Milestone</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
