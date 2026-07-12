import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Tech Lead",
    company: "DataFlow Systems",
    text: "Bilal completely transformed our data pipeline. His NLP models increased our automated processing accuracy by 40%. Absolutely brilliant work.",
    avatar: "S"
  },
  {
    id: 2,
    name: "Mark T.",
    role: "Startup Founder",
    company: "NextGen Analytics",
    text: "An exceptional ML Engineer. He delivered our predictive analytics dashboard ahead of schedule with flawless integration. He understands both code and business needs.",
    avatar: "M"
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Product Manager",
    company: "FinTech Solutions",
    text: "Bilal's expertise in deep learning is unmatched. Highly recommend him for any complex data science project. The models he built scaled perfectly.",
    avatar: "E"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 relative bg-[#030014]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase tracking-tight">
            Client <span className="text-gradient">Feedback</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              {/* Decorative gradient blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] group-hover:bg-emerald-500/20 transition-all duration-500"></div>
              
              <div className="flex gap-1 text-emerald-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed italic relative z-10">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-slate-900 font-bold text-xl shadow-lg">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-slate-400 text-sm font-mono">{t.role} @ {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
