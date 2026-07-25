import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const GITHUB_URL = "https://github.com/bilalahmed251";
  const LINKEDIN_URL = "https://www.linkedin.com/in/bilalahmed-data";
  const HF_URL = "https://huggingface.co/b098";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-deep-space">
      {/* Premium Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent-pink/20 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }}></div>
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border border-accent-cyan/20 text-accent-cyan text-xs font-bold uppercase tracking-widest mb-10 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
          </span>
          Open for ML & Data Science Roles
        </motion.div>

        {/* Main Headline */}
        <div className="text-center max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[7rem] font-display font-black leading-[1.1] md:leading-[1] tracking-tight text-white drop-shadow-2xl mb-6"
          >
            Turning <span className="text-gradient">Data</span> Into <br className="hidden md:block"/>
            Intelligent Solutions.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Hi, I'm <strong className="text-white font-medium">Bilal Ahmed</strong>. A Machine Learning Engineer specializing in <span className="text-accent-cyan">Computer Vision</span>, <span className="text-accent-purple">NLP</span>, and <span className="text-accent-pink">Predictive Analytics</span>.
          </motion.p>
        </div>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6,182,212,0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-semibold rounded-2xl transition-all text-sm tracking-wide shadow-xl text-center"
          >
            View Projects
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.95 }}
            href={GITHUB_URL} 
            target="_blank"
            className="w-full sm:w-auto px-8 py-4 glass-card text-white font-medium transition-all text-sm tracking-wide text-center flex items-center justify-center gap-2 group"
          >
            <svg className="w-5 h-5 group-hover:text-accent-purple transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Access GitHub
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;