import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Layout, Server, Database as DatabaseIcon, Wrench, Sparkles,
  FileCode, Coffee, LayoutGrid, Palette, Atom, Layers, Table,
  GitBranch, Network, Box, Terminal, CheckCircle2, Shield, Key, Package, Boxes, Wind
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioConfig } from '../config/portfolio.config';
import type { SkillCategory } from '../types/portfolio';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioConfig;
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  const categoryMeta: Record<SkillCategory, { label: string; icon: React.ReactNode; color: string }> = {
    'Backend': {
      label: 'Backend',
      icon: <Server className="w-5 h-5 text-brand-cyan" />,
      color: 'from-cyan-500/20 to-teal-500/10 border-cyan-500/30'
    },
    'Databases': {
      label: 'Databases',
      icon: <DatabaseIcon className="w-5 h-5 text-emerald-500" />,
      color: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30'
    },
    'Testing': {
      label: 'Testing',
      icon: <CheckCircle2 className="w-5 h-5 text-amber-500" />,
      color: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30'
    },
    'Frontend': {
      label: 'Frontend',
      icon: <Layout className="w-5 h-5 text-brand-blue" />,
      color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30'
    },
    'Tools': {
      label: 'Tools',
      icon: <Wrench className="w-5 h-5 text-pink-500" />,
      color: 'from-pink-500/20 to-purple-500/10 border-pink-500/30'
    },
    'Languages': {
      label: 'Languages',
      icon: <Code className="w-5 h-5 text-brand-purple" />,
      color: 'from-purple-500/20 to-violet-500/10 border-purple-500/30'
    }
  };

  const getTechIcon = (iconName: string, name: string) => {
    if (name === 'GitHub' || iconName === 'Github') {
      return <GithubIcon className="w-5 h-5 text-slate-700 dark:text-slate-200" />;
    }
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-500" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-500" />;
      case 'Shield': return <Shield className="w-5 h-5 text-sky-500" />;
      case 'Database': return <DatabaseIcon className="w-5 h-5 text-emerald-500" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-amber-500" />;
      case 'Network': return <Network className="w-5 h-5 text-brand-purple" />;
      case 'Key': return <Key className="w-5 h-5 text-amber-500" />;
      case 'Package': return <Package className="w-5 h-5 text-orange-500" />;
      case 'Table': return <Table className="w-5 h-5 text-blue-500" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-brand-purple" />;
      case 'Atom': return <Atom className="w-5 h-5 text-sky-500" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-indigo-500" />;
      case 'Layout': return <LayoutGrid className="w-5 h-5 text-rose-500" />;
      case 'Palette': return <Palette className="w-5 h-5 text-cyan-500" />;
      case 'Wind': return <Wind className="w-5 h-5 text-teal-500" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-500" />;
      case 'Box': return <Box className="w-5 h-5 text-sky-500" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-500" />;
      default: return <CheckCircle2 className="w-5 h-5 text-brand-cyan" />;
    }
  };

  const categoriesList: SkillCategory[] = [
    'Backend',
    'Databases',
    'Testing',
    'Frontend',
    'Tools',
    'Languages'
  ];

  const displayedCategories = selectedCategory === 'All'
    ? categoriesList
    : [selectedCategory];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-brand-cyan text-xs font-mono font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Server className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors">
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
                : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
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
                    : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
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
                className={`glass-card p-6 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group ${
                  catName === 'Backend' && selectedCategory === 'All' ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${meta.color} border flex items-center justify-center`}>
                    {meta.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-brand-cyan transition-colors">
                      {meta.label}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {categorySkills.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Tech Cards Grid inside Category */}
                <div className="grid grid-cols-2 gap-3">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 hover:border-brand-purple/50 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200 group/tech shadow-2xs"
                    >
                      <div className="p-1.5 rounded-lg bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shrink-0 group-hover/tech:scale-110 transition-transform">
                        {getTechIcon(skill.iconName, skill.name)}
                      </div>
                      <span className="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover/tech:text-slate-900 dark:group-hover/tech:text-white transition-colors truncate">
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
