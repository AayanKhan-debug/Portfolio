import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Target, Compass, FolderGit2, Code2, Cpu, GitCommit, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';

export const AboutSection: React.FC = () => {
  const { fullBio, journeyBio, careerObjective } = portfolioConfig.personal;
  const { stats, learningJourney } = portfolioConfig;
  const [activeTab, setActiveTab] = useState<'bio' | 'journey' | 'objective'>('bio');

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderGit2': return <FolderGit2 className="w-6 h-6 text-brand-blue" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-brand-purple" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-brand-cyan" />;
      case 'GitCommit': return <GitCommit className="w-6 h-6 text-pink-500" />;
      default: return <Sparkles className="w-6 h-6 text-brand-purple" />;
    }
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-brand-purple text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full mt-4" />
        </div>

        {/* Animated Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 flex flex-col items-center text-center border border-slate-800/80 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-purple/10 rounded-full blur-xl group-hover:bg-brand-purple/20 transition-all" />
              <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 mb-4 group-hover:scale-110 transition-transform">
                {getStatIcon(stat.iconName)}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-1">
                <span>{stat.value}</span>
                <span className="text-brand-purple">{stat.suffix}</span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-400">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Bio & Journey Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Tabs */}
          <motion.div
            className="lg:col-span-7 glass-card p-6 sm:p-8 border border-slate-800/80"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tab Selector buttons */}
            <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab('bio')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'bio'
                    ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-glow-purple/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Biography</span>
              </button>

              <button
                onClick={() => setActiveTab('journey')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'journey'
                    ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-glow-purple/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>My Journey</span>
              </button>

              <button
                onClick={() => setActiveTab('objective')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'objective'
                    ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-glow-purple/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Target className="w-4 h-4" />
                <span>Career Goal</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[160px] text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
              {activeTab === 'bio' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <p className="mb-4">{fullBio}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Full-Stack Architecture</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>AI Model API Integration</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Agile & Clean Code Standards</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Competitive Problem Solving</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'journey' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <p>{journeyBio}</p>
                </motion.div>
              )}

              {activeTab === 'objective' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <p className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 border-l-4 border-l-brand-purple italic text-slate-200">
                    "{careerObjective}"
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Column: Animated Learning Roadmap Timeline */}
          <motion.div
            className="lg:col-span-5 glass-card p-6 sm:p-8 border border-slate-800/80"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-cyan" />
              <span>Learning Timeline</span>
            </h3>

            <div className="relative pl-6 space-y-6 border-l-2 border-slate-800">
              {learningJourney.map((step) => (
                <div key={step.year} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-brand-purple group-hover:bg-brand-cyan transition-colors" />
                  
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-brand-purple text-xs font-mono font-bold mb-1">
                    {step.year}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
