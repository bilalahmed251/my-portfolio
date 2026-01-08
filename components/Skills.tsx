import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillGroups = [
    { 
      title: 'Programming', 
      list: ['Java', 'Python', 'SQL', 'R'], 
      icon: '💻',
      query: 'SELECT * FROM talent;'
    },
    { 
      title: 'Data Analysis', 
      list: ['Pandas', 'NumPy', 'Excel'], 
      icon: '📊',
      query: 'import pandas as pd'
    },
    { 
      title: 'Machine Learning', 
      list: ['Regression', 'Classification', 'Data Preprocessing'], 
      icon: '🧠',
      query: 'model.fit(X, y)'
    },
    { 
      title: 'Visualization', 
      list: ['Matplotlib', 'Seaborn', 'Scikit-learn'], 
      icon: '🎨',
      query: 'import seaborn as sns'
    },
    { 
      title: 'Development Tools', 
      list: ['Jupyter Notebook', 'Git', 'VS Code', 'Google Colab'], 
      icon: '🛠️',
      query: 'git commit -m "init"'
    }
  ];

  return (
    <section id="skills" className="py-32 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter cursor-default"
          >
            TECHNICAL <motion.span whileHover={{ rotate: [-1, 1, -1] }} className="text-gradient inline-block">CAPABILITIES</motion.span>
          </motion.h2>
          <motion.div 
            whileHover={{ width: '150px' }}
            className="w-24 h-1 bg-neon-cyan mx-auto mt-4 rounded-full transition-all"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-3xl border-b-2 border-transparent hover:border-neon-cyan transition-all duration-300 group cursor-default"
            >
              <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{group.icon}</div>
              <div className="text-[9px] font-mono text-neon-cyan/60 mb-2 truncate">{group.query}</div>
              <h3 className="text-lg font-black mb-4 uppercase tracking-widest">{group.title}</h3>
              <ul className="space-y-2">
                {group.list.map((item) => (
                  <motion.li 
                    key={item} 
                    whileHover={{ x: 5, color: '#f8fafc' }}
                    className="text-slate-500 font-mono text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-neon-cyan/50"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;