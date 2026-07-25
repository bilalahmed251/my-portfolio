import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Advanced NLP RAG Pipeline",
      description: "An enterprise-grade Retrieval-Augmented Generation system using Llama 3 and Pinecone vector database for highly accurate document querying.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
      tags: ["Python", "PyTorch", "LLM", "Pinecone", "FastAPI"],
      link: "#",
      github: "https://github.com/bilalahmed251"
    },
    {
      id: 2,
      title: "Real-time Object Detection",
      description: "A highly optimized YOLOv8 implementation for real-time traffic monitoring and vehicle tracking on edge devices with 98% accuracy.",
      image: "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=1000&auto=format&fit=crop",
      tags: ["Computer Vision", "YOLO", "OpenCV", "CUDA"],
      link: "#",
      github: "https://github.com/bilalahmed251"
    },
    {
      id: 3,
      title: "Predictive Maintenance System",
      description: "End-to-end time series forecasting models deployed on AWS to predict industrial equipment failures, saving millions in downtime.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      tags: ["Machine Learning", "Time Series", "AWS", "TensorFlow"],
      link: "#",
      github: "https://github.com/bilalahmed251"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#01040f]">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">Featured.<span className="text-accent-purple">Projects</span>()</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-accent-purple/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card group flex flex-col overflow-hidden border border-white/10 hover:border-accent-purple/30"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href={project.link} className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-purple transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-accent-cyan tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/bilalahmed251" 
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors"
          >
            View All Projects on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Projects;