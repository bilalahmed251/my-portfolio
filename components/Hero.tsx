import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const phrases = ['ML Engineer', 'NLP Developer', 'Freelance Data Scientist', 'Model Deployment Specialist'];
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const GITHUB_URL = "https://github.com/bilalahmed251";
  const LINKEDIN_URL = "https://www.linkedin.com/in/bilalahmed-data";
  const HF_URL = "https://huggingface.co/b098";

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[index % phrases.length];
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setIndex(prev => prev + 1);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#020617]">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px] animate-pulse-slow"></div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[11px] font-bold uppercase tracking-[0.4em] mb-12 shadow-2xl backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Freelance Projects
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-7xl md:text-[10rem] font-black mb-10 leading-[0.8] tracking-tighter uppercase text-white"
          >
            BILAL <br /> 
            <span className="text-gradient">AHMED</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-16"
          >
            <p className="text-3xl md:text-5xl text-slate-300 font-light tracking-tight mb-8">
              Engineering <span className="text-emerald-500 font-black italic">{text}</span>
            </p>
            <div className="flex items-center justify-center gap-6">
              <span className="h-[1px] w-12 bg-slate-800"></span>
              <p className="text-slate-500 text-sm md:text-base uppercase tracking-[0.6em] font-mono font-bold">
                GIFT UNIVERSITY | BS DATA SCIENCE | 6+ DEPLOYED APPS
              </p>
              <span className="h-[1px] w-12 bg-slate-800"></span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(16,185,129,0.3)" }}
              whileTap={{ scale: 0.95 }}
              href={LINKEDIN_URL} 
              target="_blank"
              className="px-14 py-6 bg-emerald-500 text-slate-950 font-black rounded-3xl transition-all uppercase tracking-[0.2em] text-[10px] shadow-2xl"
            >
              Establish Connection
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              href={GITHUB_URL} 
              target="_blank"
              className="px-14 py-6 glass border border-white/10 text-white font-black rounded-3xl transition-all uppercase tracking-[0.2em] text-[10px]"
            >
              Access Archive
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              href={HF_URL} 
              target="_blank"
              className="px-14 py-6 glass border border-white/10 text-white font-black rounded-3xl transition-all uppercase tracking-[0.2em] text-[10px]"
            >
              View Live Demos
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;