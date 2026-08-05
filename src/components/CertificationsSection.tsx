import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Cloud, Layout, Brain, ShieldCheck } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';

export const CertificationsSection: React.FC = () => {
  const { certifications } = portfolioConfig;

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-6 h-6 text-amber-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-brand-blue" />;
      case 'Brain': return <Brain className="w-6 h-6 text-brand-purple" />;
      default: return <Award className="w-6 h-6 text-brand-cyan" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-brand-cyan text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-pink-500 rounded-full mt-4" />
        </div>

        {/* Certificate Cards Grid or Empty Notice */}
        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 border border-slate-800/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                      {getCertIcon(cert.iconName)}
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900 border border-slate-800 text-slate-400">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="text-xs text-brand-purple font-semibold mb-3">
                    Issued by {cert.issuer}
                  </div>

                  <div className="space-y-1 text-xs font-mono text-slate-400 mb-6">
                    <div>Date: <span className="text-slate-200">{cert.issueDate}</span></div>
                    <div>Credential ID: <span className="text-slate-300">{cert.credentialId}</span></div>
                  </div>
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors group-hover:border-brand-purple/50"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-xl mx-auto glass-card p-8 text-center border border-slate-800/80">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-4 text-brand-cyan">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Continuous Academic Learning</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Currently pursuing industry certifications in Full-Stack Web Engineering and Machine Learning to complement coursework at Nitte Meenakshi Institute of Technology.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
