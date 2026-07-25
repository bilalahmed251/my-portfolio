import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-deep-space">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">System.<span className="text-accent-pink">About</span>()</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-accent-pink/50 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 glass-card p-8 md:p-10"
            >
              <h3 className="text-2xl text-white font-medium mb-6">Bridging the Gap Between <span className="text-gradient">Data and Impact</span></h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I am a passionate Machine Learning Engineer and Data Scientist with a degree in Data Science from GIFT University. My journey revolves around architecting intelligent systems that extract actionable insights and automate complex workflows.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Whether it's building state-of-the-art Natural Language Processing models, deploying highly scalable Computer Vision applications, or crafting end-to-end predictive analytics pipelines, I thrive on solving hard problems with elegant, data-driven solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 flex flex-col gap-6"
            >
              <div className="glass-card p-8 text-center flex flex-col justify-center items-center h-full group hover:-translate-y-2 transition-transform">
                <h4 className="text-6xl font-display font-black text-accent-cyan mb-2 group-hover:scale-110 transition-transform">6+</h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Enterprise<br/>Applications</p>
              </div>
              <div className="glass-card p-8 text-center flex flex-col justify-center items-center h-full group hover:-translate-y-2 transition-transform">
                <h4 className="text-6xl font-display font-black text-accent-purple mb-2 group-hover:scale-110 transition-transform">99%</h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Client<br/>Satisfaction</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;