import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, GitCommit, ExternalLink, Star, Flame, Brain, FolderGit2, Cpu } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';

export const AchievementsSection: React.FC = () => {
  const { achievements } = portfolioConfig;

  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-brand-blue" />;
      case 'FolderGit2': return <FolderGit2 className="w-6 h-6 text-brand-purple" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-brand-cyan" />;
      case 'Brain': return <Brain className="w-6 h-6 text-pink-500" />;
      default: return <Star className="w-6 h-6 text-brand-cyan" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-amber-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 via-brand-purple to-pink-500 rounded-full mt-4" />
        </div>

        {/* LeetCode & Full-Stack Featured Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-8 border border-slate-800/80 mb-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* LeetCode Badge Box */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <Flame className="w-8 h-8 text-amber-400 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-amber-400 font-bold">LeetCode Problem Solving</span>
                <h3 className="text-2xl font-extrabold text-white font-mono">160+ Solved</h3>
                <p className="text-xs text-slate-400 mt-1">Data Structures & Algorithmic Foundations</p>
              </div>
            </div>

            {/* Project Highlight Box */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <GitCommit className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold">Full-Stack Development</span>
                <h3 className="text-2xl font-extrabold text-white font-mono">AI Expense Analyzer</h3>
                <p className="text-xs text-slate-400 mt-1">Full-stack web app built with React & Node.js</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 border border-slate-800/80 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {getAchievementIcon(ach.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900 border border-slate-800 text-brand-cyan">
                    {ach.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-purple transition-colors">
                  {ach.title}
                </h3>
                
                <div className="text-xs font-mono font-bold text-amber-400 mb-3">
                  {ach.metric}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {ach.description}
                </p>
              </div>

              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:text-purple-300 transition-colors"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
