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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-2xl shadow-accent-purple/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-xl font-display font-black tracking-tighter uppercase cursor-pointer"
          onClick={(e) => scrollToSection(e as any, 'home')}
        >
          BILAL<span className="text-accent-cyan">AHMED</span>
        </motion.div>

        <div className="hidden md:flex gap-10 items-center">
          {links.map((link) => (
            <motion.a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={(e) => scrollToSection(e, link.toLowerCase())}
              whileHover={{ color: '#06b6d4', y: -2 }}
              className="text-[12px] font-bold text-slate-300 transition-all uppercase tracking-[0.2em]"
            >
              {link}
            </motion.a>
          ))}
          <motion.a 
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139,92,246,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-2.5 bg-accent-purple/10 border border-accent-purple/30 rounded-full text-[12px] font-bold text-accent-purple uppercase tracking-widest transition-all hover:bg-accent-purple/20"
          >
            Contact Me
          </motion.a>
        </div>

        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass absolute top-full left-0 w-full border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {links.concat(['Contact']).map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  onClick={(e) => scrollToSection(e, link.toLowerCase())} 
                  className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-accent-cyan transition-colors"
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