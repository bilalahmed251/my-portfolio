import React from 'react';
import { motion } from 'framer-motion';

const Expertise: React.FC = () => {
  const skills = [
    { name: 'Machine Learning', icon: '🤖', color: 'cyan', percent: 95 },
    { name: 'Deep Learning (PyTorch/TF)', icon: '🧠', color: 'purple', percent: 90 },
    { name: 'Computer Vision', icon: '👁️', color: 'emerald', percent: 85 },
    { name: 'Natural Language Processing', icon: '📝', color: 'pink', percent: 88 },
    { name: 'Data Engineering & ETL', icon: '⚙️', color: 'blue-500', percent: 82 },
    { name: 'Model Deployment (MLOps)', icon: '🚀', color: 'indigo-500', percent: 90 },
  ];

  return (
    <section id="expertise" className="py-24 relative bg-deep-space overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-row-reverse items-center gap-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">Core.<span className="text-accent-cyan">Expertise</span>()</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-l from-accent-cyan/50 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 group relative overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${skill.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:-rotate-6 transition-transform shadow-lg shadow-black/20">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                  
                  {/* Progress bar */}
                  <div className="mt-8">
                    <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 tracking-wider uppercase">
                      <span>Proficiency</span>
                      <span className={`text-${skill.color}`}>{skill.percent}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + (index * 0.1) }}
                        className={`h-full bg-${skill.color} rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;