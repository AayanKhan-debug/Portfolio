import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Cpu } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Initializing system...');

  useEffect(() => {
    const steps = [
      { p: 25, t: 'Loading core modules...' },
      { p: 50, t: 'Connecting neural network canvas...' },
      { p: 75, t: 'Compiling project showcase...' },
      { p: 100, t: 'System ready.' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].p);
        setCurrentText(steps[currentStep].t);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    }, 350);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg text-slate-100 font-mono"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
      >
        <div className="relative flex flex-col items-center max-w-sm w-full px-6">
          {/* Futuristic glowing icon */}
          <motion.div
            className="w-20 h-20 mb-8 rounded-2xl bg-gradient-to-tr from-brand-blue via-brand-purple to-pink-500 p-0.5 shadow-glow-purple"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <div className="w-full h-full bg-dark-bg rounded-[14px] flex items-center justify-center">
              <Code2 className="w-10 h-10 text-brand-purple" />
            </div>
          </motion.div>

          <div className="flex items-center gap-2 mb-3 text-slate-300 text-sm tracking-wider uppercase font-semibold">
            <Terminal className="w-4 h-4 text-brand-blue animate-pulse" />
            <span>{currentText}</span>
          </div>

          {/* Progress bar container */}
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-4 p-0.5 border border-slate-700/50">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            />
          </div>

          <div className="flex justify-between w-full text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-slate-500" /> V1.0.0
            </span>
            <span className="text-brand-purple font-bold">{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
