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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#030014]">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[200px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[200px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[50%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[200px] animate-pulse-slow" style={{ animationDelay: '4s', transform: 'translate(-50%, -50%)' }}></div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] mb-10 shadow-[0_0_40px_rgba(16,185,129,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            </span>
            Available for Freelance Projects
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8.5rem] font-display font-black mb-8 leading-[0.85] tracking-tighter uppercase text-white drop-shadow-2xl"
          >
            BILAL <br /> 
            <span className="text-gradient drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">AHMED</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mb-14"
          >
            <p className="text-2xl md:text-4xl text-slate-400 font-light tracking-tight mb-8">
              Engineering <span className="text-white font-display font-bold italic">{text}</span>
              <span className="animate-pulse ml-1 text-emerald-500">|</span>
            </p>
            <div className="flex items-center justify-center gap-6 opacity-80">
              <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-slate-600"></span>
              <p className="text-slate-400 text-xs md:text-sm uppercase tracking-[0.4em] font-mono font-medium">
                GIFT UNIVERSITY &bull; BS DATA SCIENCE &bull; 6+ DEPLOYED APPS
              </p>
              <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-slate-600"></span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16,185,129,0.4)" }}
              whileTap={{ scale: 0.95 }}
              href={LINKEDIN_URL} 
              target="_blank"
              className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-950 font-bold rounded-2xl transition-all uppercase tracking-[0.15em] text-xs shadow-xl"
            >
              Establish Connection
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.4)', boxShadow: "0 0 30px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href={GITHUB_URL} 
              target="_blank"
              className="px-10 py-5 glass-card text-white font-bold transition-all uppercase tracking-[0.15em] text-xs"
            >
              Access Archive
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.4)', boxShadow: "0 0 30px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href={HF_URL} 
              target="_blank"
              className="px-10 py-5 glass-card text-white font-bold transition-all uppercase tracking-[0.15em] text-xs"
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