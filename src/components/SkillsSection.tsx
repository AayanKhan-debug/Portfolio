import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Layout, Server, Database as DatabaseIcon, Wrench, Sparkles,
  FileCode, Coffee, LayoutGrid, Palette, Atom, Route, Layers, Table,
  GitBranch, Network, Box, Terminal, CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioConfig } from '../config/portfolio.config';
import type { SkillCategory } from '../types/portfolio';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioConfig;
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  const categoryMeta: Record<SkillCategory, { label: string; icon: React.ReactNode; color: string }> = {
    'Languages': {
      label: 'Languages',
      icon: <Code className="w-5 h-5 text-brand-purple" />,
      color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30'
    },
    'Frontend': {
      label: 'Frontend',
      icon: <Layout className="w-5 h-5 text-brand-blue" />,
      color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30'
    },
    'Backend': {
      label: 'Backend',
      icon: <Server className="w-5 h-5 text-brand-cyan" />,
      color: 'from-cyan-500/20 to-teal-500/10 border-cyan-500/30'
    },
    'Database': {
      label: 'Database',
      icon: <DatabaseIcon className="w-5 h-5 text-emerald-400" />,
      color: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30'
    },
    'Tools & Technologies': {
      label: 'Tools & Technologies',
      icon: <Wrench className="w-5 h-5 text-pink-400" />,
      color: 'from-pink-500/20 to-purple-500/10 border-pink-500/30'
    }
  };

  const getTechIcon = (iconName: string, name: string) => {
    if (name === 'GitHub' || iconName === 'Github') {
      return <GithubIcon className="w-5 h-5 text-slate-200" />;
    }
    switch (iconName) {
      case 'FileCode': return <FileCode className="w-5 h-5 text-purple-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'Snake': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'SquareCode': return <Code className="w-5 h-5 text-amber-300" />;
      case 'Layout': return <LayoutGrid className="w-5 h-5 text-rose-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-cyan-400" />;
      case 'Atom': return <Atom className="w-5 h-5 text-sky-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Route': return <Route className="w-5 h-5 text-slate-300" />;
      case 'Layers': return <Layers className="w-5 h-5 text-green-400" />;
      case 'Table': return <Table className="w-5 h-5 text-blue-400" />;
      case 'Database': return <DatabaseIcon className="w-5 h-5 text-emerald-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'Network': return <Network className="w-5 h-5 text-brand-purple" />;
      case 'Box': return <Box className="w-5 h-5 text-sky-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-brand-cyan" />;
    }
  };

  const categoriesList: SkillCategory[] = [
    'Languages',
    'Frontend',
    'Backend',
    'Database',
    'Tools & Technologies'
  ];

  const displayedCategories = selectedCategory === 'All'
    ? categoriesList
    : [selectedCategory];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-brand-cyan text-xs font-mono font-semibold tracking-wider uppercase mb-3 shadow-md">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-pink-500 rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-brand-blue via-brand-purple to-pink-600 text-white shadow-glow-purple/40 scale-105'
                : 'glass-card text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>All Categories</span>
          </button>

          {categoriesList.map((cat) => {
            const isActive = selectedCategory === cat;
            const meta = categoryMeta[cat];
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-blue via-brand-purple to-pink-600 text-white shadow-glow-purple/40 scale-105'
                    : 'glass-card text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {meta.icon}
                <span>{meta.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category Cards Container Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((catName, idx) => {
            const categorySkills = skills.filter(s => s.category === catName);
            const meta = categoryMeta[catName];

            return (
              <motion.div
                key={catName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`glass-card p-6 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group ${
                  catName === 'Tools & Technologies' && selectedCategory === 'All' ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${meta.color} border flex items-center justify-center`}>
                    {meta.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-brand-cyan transition-colors">
                      {meta.label}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {categorySkills.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Tech Cards Grid inside Category */}
                <div className="grid grid-cols-2 gap-3">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-brand-purple/50 hover:bg-slate-800/60 transition-all duration-200 group/tech"
                    >
                      <div className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 shrink-0 group-hover/tech:scale-110 transition-transform">
                        {getTechIcon(skill.iconName, skill.name)}
                      </div>
                      <span className="font-semibold text-xs text-slate-200 group-hover/tech:text-white transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
