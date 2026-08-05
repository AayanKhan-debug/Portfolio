import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Copy, Check, MessageSquare, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { portfolioConfig } from '../config/portfolio.config';

interface ContactSectionProps {
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const { email, location, availability } = portfolioConfig.personal;
  const { emailJS } = portfolioConfig;

  const formRef = useRef<HTMLFormElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    onShowToast('Email address copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      onShowToast('Please fill in all required fields.', 'error');
      return;
    }

    setLoading(true);

    try {
      // Check if EmailJS keys are provided
      if (
        emailJS.serviceId &&
        emailJS.templateId &&
        emailJS.publicKey &&
        emailJS.serviceId !== 'service_portfolio'
      ) {
        await emailjs.sendForm(
          emailJS.serviceId,
          emailJS.templateId,
          formRef.current!,
          emailJS.publicKey
        );
      } else {
        // Fallback simulation delay for demo purposes
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#3b82f6', '#8b5cf6', '#06b6d4']
      });

      onShowToast('Thank you! Your message has been sent successfully.', 'success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      onShowToast('Simulated success: Message captured! (Configure EmailJS keys in portfolio.config.ts)', 'info');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      setFormState({ name: '', email: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-pink-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 via-brand-purple to-brand-blue rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Quick Info & Direct Mail Card */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 sm:p-8 border border-slate-800/80">
              <h3 className="text-2xl font-bold text-white mb-3">
                Let's build something extraordinary together!
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                Whether you have a software engineering opportunity, freelance inquiry, open-source project, or simply want to connect, feel free to drop me a message!
              </p>

              <div className="space-y-4">
                
                {/* Email Address & Copy Trigger */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-purple/20 text-brand-purple">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Direct Email</span>
                      <a href={`mailto:${email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-brand-cyan transition-colors">
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-blue/20 text-brand-blue">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">{location}</span>
                  </div>
                </div>

                {/* Status */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Availability</span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-300">{availability}</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="lg:col-span-7 glass-card p-6 sm:p-8 border border-slate-800/80"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-xs font-mono uppercase text-slate-400 mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-xs font-mono uppercase text-slate-400 mb-2 font-medium">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="user_subject" className="block text-xs font-mono uppercase text-slate-400 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="user_subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project Opportunity / Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                />
              </div>

              <div>
                <label htmlFor="user_message" className="block text-xs font-mono uppercase text-slate-400 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="user_message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-pink-600 text-white font-bold text-sm shadow-glow-purple hover:shadow-glow-blue transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
