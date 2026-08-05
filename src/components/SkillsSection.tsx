import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Layout, Server, Database as DatabaseIcon, Wrench, Brain, Sparkles, CheckCircle
} from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';
import type { SkillCategory } from '../types/portfolio';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioConfig;
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  const categories: { name: SkillCategory | 'All'; label: string; icon: React.ReactNode }[] = [
    { name: 'All', label: 'All Skills', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Languages', label: 'Languages', icon: <Code className="w-4 h-4" /> },
    { name: 'Frontend', label: 'Frontend', icon: <Layout className="w-4 h-4" /> },
    { name: 'Backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { name: 'Database', label: 'Database', icon: <DatabaseIcon className="w-4 h-4" /> },
    { name: 'Tools', label: 'Tools', icon: <Wrench className="w-4 h-4" /> },
    { name: 'Concepts', label: 'CS Concepts', icon: <Brain className="w-4 h-4" /> },
  ];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-brand-cyan text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Proficiency</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-pink-500 rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-blue via-brand-purple to-pink-600 text-white shadow-glow-purple/50 scale-105'
                    : 'glass-card text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="glass-card p-5 border border-slate-800/80 hover:border-brand-purple/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-brand-cyan/50 transition-colors">
                    <CheckCircle className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-brand-purple transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {skill.badge && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900 border border-slate-800 text-purple-300">
                    {skill.badge}
                  </span>
                )}
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Mastery</span>
                  <span className="text-brand-cyan font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
