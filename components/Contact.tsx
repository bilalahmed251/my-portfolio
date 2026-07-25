import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-deep-space">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">Initialize.<span className="text-accent-pink">Connection</span>()</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Whether you have a complex ML problem to solve, a data-driven application to build, or just want to say hi, I'd love to hear from you.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-pink/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Name</label>
                  <input type="text" id="name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-pink/50 focus:bg-white/10 transition-all" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Email</label>
                  <input type="email" id="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-pink/50 focus:bg-white/10 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                <input type="text" id="subject" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-pink/50 focus:bg-white/10 transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                <textarea id="message" rows={5} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-pink/50 focus:bg-white/10 transition-all resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 py-4 bg-gradient-to-r from-accent-pink to-accent-purple text-white font-bold rounded-xl uppercase tracking-widest text-sm shadow-lg shadow-accent-pink/20 hover:shadow-accent-pink/40 transition-all"
              >
                Transmit Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;