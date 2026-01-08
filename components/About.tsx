import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative bg-[#020617] border-y border-white/5 overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-16 h-[1px] bg-emerald-500/30"></div>
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.6em] font-bold italic">The Core Mission</span>
              <div className="w-16 h-[1px] bg-emerald-500/30"></div>
            </div>

            <h2 className="text-6xl md:text-8xl font-black mb-12 leading-[0.85] uppercase tracking-tighter text-white">
              STRATEGIC <br /> 
              <span className="text-gradient">OBJECTIVE</span>
            </h2>

            <div className="space-y-10 mb-20 max-w-3xl mx-auto">
              <p className="text-3xl md:text-4xl text-slate-300 leading-tight font-light italic">
                "I specialize in bridging the gap between <span className="text-white font-bold">raw computational power</span> and <span className="text-emerald-400 font-bold">business intelligence</span>."
              </p>
              
              <p className="text-slate-500 leading-relaxed text-lg md:text-xl font-medium">
                As a Data Science student at GIFT University, I am committed to building the next generation of predictive systems. My methodology integrates advanced statistical modeling with modern ML frameworks to unlock actionable insights from complex datasets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <motion.div 
                whileHover={{ y: -5, borderColor: 'rgba(16,185,129,0.5)', backgroundColor: 'rgba(16,185,129,0.02)' }}
                className="p-10 glass rounded-[3rem] border-l-4 border-emerald-500 transition-all cursor-default"
              >
                <div className="text-white font-black text-2xl mb-1 tracking-widest uppercase italic">ACADEMIA</div>
                <div className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mt-3 font-bold">GIFT UNIVERSITY (2023-2027)</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, borderColor: 'rgba(6,182,212,0.5)', backgroundColor: 'rgba(6,182,212,0.02)' }}
                className="p-10 glass rounded-[3rem] border-l-4 border-neon-cyan transition-all cursor-default"
              >
                <div className="text-white font-black text-2xl mb-1 tracking-widest uppercase italic">CERTIFICATION</div>
                <div className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mt-3 font-bold">SQL / PYTHON / ML-OPS</div>
              </motion.div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="mt-12 p-12 glass rounded-[3.5rem] border border-white/5 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent group text-left"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.5em] font-bold">Active Deployment</h3>
                <div className="px-4 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-[9px] font-bold text-emerald-400 uppercase tracking-widest animate-pulse">Live</div>
              </div>
              <p className="text-white font-black text-2xl mb-3 tracking-tight">GIFT University Admission Office</p>
              <p className="text-slate-500 text-sm md:text-base uppercase font-mono tracking-[0.4em] font-bold italic">Operations & Strategy Specialist (2024–Present)</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;