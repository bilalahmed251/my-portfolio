import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const links = ['About', 'Expertise', 'Projects'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-lg font-black tracking-tighter uppercase cursor-pointer"
          onClick={(e) => scrollToSection(e as any, 'home')}
        >
          BILAL<span className="text-emerald-500">AHMED</span>
        </motion.div>

        <div className="hidden md:flex gap-10 items-center">
          {links.map((link) => (
            <motion.a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={(e) => scrollToSection(e, link.toLowerCase())}
              whileHover={{ color: '#10b981', y: -2 }}
              className="text-[11px] font-bold text-slate-400 transition-all uppercase tracking-[0.2em]"
            >
              {link}
            </motion.a>
          ))}
          <motion.a 
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16,185,129,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-[11px] font-bold text-emerald-500 uppercase tracking-widest transition-all"
          >
            Contact Me
          </motion.a>
        </div>

        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
        >
          {isOpen ? '✕' : '☰'}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass absolute top-full left-0 w-full border-t border-white/5"
          >
            <div className="flex flex-col items-center py-10 gap-6">
              {links.concat(['Contact']).map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  onClick={(e) => scrollToSection(e, link.toLowerCase())} 
                  className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-emerald-500"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;