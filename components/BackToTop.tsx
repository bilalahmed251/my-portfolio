import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 z-[60] w-14 h-14 glass rounded-full flex items-center justify-center text-neon-cyan border border-neon-cyan/20 shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:bg-neon-cyan hover:text-slate-950 transition-all duration-300"
        >
          <span className="text-2xl font-bold">↑</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;