import React from 'react';
import { motion } from 'framer-motion';

const Expertise: React.FC = () => {
  const expertises = [
    {
      title: 'Backend & Automation',
      icon: '⚡',
      skills: ['Python', 'Java', 'Selenium', 'Scrapy', 'API Integration'],
      description: 'Developing high-efficiency automated crawlers and robust backend logic to streamline data acquisition and processing.',
      color: 'from-emerald-500/20'
    },
    {
      title: 'Data Engineering & Analysis',
      icon: '💾',
      skills: ['SQL (MySQL/Postgres)', 'Pandas', 'NumPy', 'Excel', 'R'],
      description: 'Architecting relational schemas and performing complex exploratory data analysis to uncover hidden market patterns.',
      color: 'from-blue-500/20'
    },
    {
      title: 'AI & Machine Learning',
      icon: '🧠',
      skills: ['Regression', 'Classification', 'Scikit-learn', 'XGBoost', 'SHAP'],
      description: 'Training predictive models and implementing model interpretation techniques to solve real-world classification problems.',
      color: 'from-emerald-600/20'
    }
  ];

  return (
    <section id="expertise" className="py-32 bg-slate-900/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
          >
            CORE <span className="text-gradient">EXPERTISE</span>
          </motion.h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {expertises.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              className={`glass p-10 rounded-[3rem] border-white/5 relative group cursor-default h-full flex flex-col`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-emerald-500/80 border border-emerald-500/10 uppercase tracking-widest">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;