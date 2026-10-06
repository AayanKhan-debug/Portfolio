import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, X, Eye, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioConfig } from '../config/portfolio.config';
import type { Project } from '../types/portfolio';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioConfig;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Backend', 'Full Stack'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-brand-purple text-xs font-mono font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500 rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-glow-purple/40 scale-105'
                  : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col group"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="p-3 rounded-full bg-brand-purple text-white hover:scale-110 transition-transform shadow-glow-purple"
                    title="View Details"
                    aria-label={`View details for ${project.title}`}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-brand-blue text-white hover:scale-110 transition-transform shadow-glow-blue"
                      title="Live Demo"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800 text-white hover:scale-110 transition-transform"
                    title="GitHub Repository"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
                
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700 backdrop-blur-md text-brand-purple dark:text-brand-cyan shadow-xs">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-purple dark:group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-brand-purple/20 border border-slate-200 dark:border-slate-800 dark:hover:border-brand-purple text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-purple dark:hover:text-white transition-all shadow-2xs"
                  >
                    <Eye className="w-3.5 h-3.5 text-brand-purple dark:text-brand-cyan" />
                    <span>View Architecture</span>
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-all shadow-2xs"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-2xl w-full border border-slate-200/90 dark:border-slate-700/80 overflow-hidden relative shadow-2xl max-h-[90vh] flex flex-col bg-white/95 dark:bg-slate-950/90"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close project modal"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-900/90 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-6 space-y-6">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full aspect-video object-cover rounded-xl border border-slate-200 dark:border-slate-800"
                />

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-purple/10 dark:bg-brand-purple/20 text-brand-purple border border-brand-purple/30 dark:border-brand-purple/40">
                      {activeModalProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {activeModalProject.fullDescription || activeModalProject.description}
                  </p>
                </div>

                {/* Key Features List */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                    Engineering Decisions & Features:
                  </h4>
                  <div className="space-y-2.5">
                    {activeModalProject.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-brand-purple dark:text-brand-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Action Footer */}
                <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold text-sm shadow-glow-purple"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
