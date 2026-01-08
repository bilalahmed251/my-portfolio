import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const GITHUB_URL = "https://github.com/bilalahmed251";
  const LINKEDIN_URL = "https://www.linkedin.com/in/bilalahmed-data";
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#020617] pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <h2 className="text-2xl font-black tracking-tighter text-white uppercase mb-6">
              BILAL <span className="text-emerald-500">AHMED</span>
            </h2>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-10 italic">
              "Transforming raw data into actionable intelligence through machine learning pipelines and high-performance automation scripts."
            </p>
            <div className="flex gap-8">
              <motion.a 
                href={GITHUB_URL} 
                target="_blank" 
                whileHover={{ scale: 1.2, color: '#10b981' }} 
                className="text-slate-500 transition-colors font-bold uppercase tracking-widest text-[10px]"
                aria-label="GitHub"
              >
                GitHub
              </motion.a>
              <motion.a 
                href={LINKEDIN_URL} 
                target="_blank" 
                whileHover={{ scale: 1.2, color: '#10b981' }} 
                className="text-slate-500 transition-colors font-bold uppercase tracking-widest text-[10px]"
                aria-label="LinkedIn"
              >
                LinkedIn
              </motion.a>
              <motion.a 
                href="mailto:ba6503833@gmail.com" 
                whileHover={{ scale: 1.2, color: '#10b981' }} 
                className="text-slate-500 transition-colors font-bold uppercase tracking-widest text-[10px]"
              >
                Email
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 border-b border-white/5 pb-2">Index</h3>
            <ul className="space-y-4">
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Profile</a></li>
              <li><a href="#expertise" onClick={(e) => scrollToSection(e, 'expertise')} className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Expertise</a></li>
              <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Nodes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 border-b border-white/5 pb-2">Status</h3>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">System Operational</span>
            </div>
            <p className="text-slate-700 text-[9px] font-mono uppercase mt-4 tracking-[0.3em]">Location: Gujranwala, PK</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-slate-700 text-[9px] font-mono uppercase tracking-[0.3em]">
            &copy; {currentYear} Bilal Ahmed — Data Scientist Node v3.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;