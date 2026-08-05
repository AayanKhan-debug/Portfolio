import React, { useState, useEffect } from 'react';
import { SEOHead } from './components/SEOHead';
import { Preloader } from './components/Preloader';
import { AnimatedCursor } from './components/AnimatedCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import type { ToastMessage } from './components/Toast';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Dark mode class handler on root html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const addToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    const newToast: ToastMessage = {
      id: Date.now().toString(),
      text,
      type
    };
    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 font-sans relative selection:bg-brand-purple/30 selection:text-purple-300">
      <SEOHead />
      
      {/* Loading Splash Screen */}
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Custom Animated Cursor */}
          <AnimatedCursor />

          {/* Interactive HTML5 Canvas Neural Network Particle Background */}
          <ParticleBackground />

          {/* Header Navigation */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Main Website Sections */}
          <main className="relative z-10 space-y-8">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <CertificationsSection />
            <AchievementsSection />
            <ContactSection onShowToast={addToast} />
          </main>

          {/* Footer */}
          <Footer />

          {/* Toast Notification Container */}
          <Toast toasts={toasts} onDismiss={removeToast} />
        </>
      )}
    </div>
  );
};

export default App;
