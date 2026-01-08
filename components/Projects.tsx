import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const GITHUB_URL = "https://github.com/bilalahmed251";

  const projects = [
    {
      title: 'Mobile Price Prediction',
      category: 'DATA ANALYSIS',
      description: 'Comprehensive EDA on 2,000+ mobile devices using Python to identify key pricing drivers like RAM and battery capacity.',
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1000',
      tags: ['Python', 'Pandas', 'EDA']
    },
    {
      title: 'Diabetes Prediction ML',
      category: 'MACHINE LEARNING',
      description: 'Predictive modeling using Random Forest and XGBoost with SHAP interpretation to identify early-stage medical risks.',
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
      tags: ['XGBoost', 'SHAP', 'Classification']
    },
    {
      title: 'Laravel Sanitary Hub',
      category: 'WEB DEVELOPMENT',
      description: 'Full-stack shop management system where administrators can manage inventory and showcase popular products dynamically.',
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000',
      tags: ['Laravel', 'SQL', 'PHP']
    },
    {
      title: 'Netflix Content EDA',
      category: 'VISUALIZATION',
      description: 'Detailed analysis of content distribution trends on Netflix, focusing on movie vs TV show ratios and genre popularity.',
      img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1000',
      tags: ['Seaborn', 'Visualization', 'Correlation']
    },
    {
      title: 'Customer Churn Model',
      category: 'PREDICTIVE',
      description: 'Applying GridSearchCV and data preprocessing to build an optimized retention model using industrial datasets.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      tags: ['GridSearchCV', 'Preprocessing', 'ML']
    },
    {
      title: 'Titanic Survival Model',
      category: 'MACHINE LEARNING',
      description: 'The classic classification project determining survival rates using feature engineering and optimized ML algorithms.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
      tags: ['Classification', 'Scikit-learn', 'Titanic']
    }
  ];

  return (
    <section id="projects" className="py-32 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">PROJECT <span className="text-gradient">NODES</span></h2>
            <p className="text-slate-500 font-mono mt-2 uppercase text-[10px] tracking-[0.4em]">-- Synchronizing Data Visualization --</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="hidden lg:block text-slate-700 text-[10px] font-mono uppercase tracking-widest"
          >
            Total_Projects: 06 // Live_Mode
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, i) => (
            <motion.div 
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group glass rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-500 flex flex-col h-full hover:border-emerald-500/30 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]"
            >
              <div className="h-64 overflow-hidden relative">
                {/* Dark overlay that fades on hover */}
                <div className="absolute inset-0 bg-slate-950/40 z-10 group-hover:bg-transparent transition-all duration-500"></div>
                
                <motion.img 
                  src={proj.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                  alt={proj.title} 
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-20 px-3 py-1 glass rounded-lg text-[8px] font-black text-white border border-white/10 uppercase tracking-widest bg-emerald-500/20 backdrop-blur-md">
                  {proj.category}
                </div>

                {/* Corner Accents */}
                <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-emerald-400 transition-colors tracking-tighter text-white">{proj.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-8 flex-grow line-clamp-3">
                  {proj.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-md bg-white/5 text-[9px] font-bold text-slate-300 uppercase tracking-widest border border-white/5 group-hover:border-emerald-500/20 transition-colors">{tag}</span>
                  ))}
                </div>
                
                <motion.a 
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,1)', color: '#020617' }}
                  whileTap={{ scale: 0.98 }}
                  href={GITHUB_URL}
                  target="_blank"
                  className="block w-full py-4 border border-white/10 rounded-2xl text-center text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all backdrop-blur-sm"
                >
                  Access Repository
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;