import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';

export const EducationSection: React.FC = () => {
  const { education } = portfolioConfig;

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-brand-purple text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Degree</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full mt-4" />
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-3xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 sm:p-8 border border-slate-800/80 relative overflow-hidden"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-glow-purple/30">
                    <GraduationCap className="w-7 h-7 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-brand-cyan">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                    <span>{edu.period}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    Graduation Year: {edu.graduationYear}
                  </span>
                </div>
              </div>

              {/* Location & Optional CGPA Pill */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-xs text-slate-300 border-b border-slate-800 pb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {edu.location}
                </span>
                {edu.cgpa && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono font-bold">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    CGPA: {edu.cgpa}
                  </span>
                )}
              </div>

              {/* Relevant Coursework */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2 font-semibold">
                  <BookOpen className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Key Coursework & Specializations:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
