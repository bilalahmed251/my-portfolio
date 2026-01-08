import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // NOTE: To make this work, create a form at https://formspree.io/ and replace this ID
  const FORMSPREE_ID = "mqaeedoz"; // You can use your own ID here

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-12 lg:p-20 rounded-[50px] border-white/5 shadow-3xl text-center relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px]"></div>
          
          <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter">ESTABLISH <span className="text-gradient">CONNECTION</span></h2>
          <p className="text-slate-400 mb-16 max-w-xl mx-auto">
            Ready to scale your next data-driven project? Send a handshaking request to initiate a new session.
          </p>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-mono text-slate-500 ml-4">USER_IDENTITY</label>
              <input 
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                placeholder="Name" 
                className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-5 focus:outline-none focus:border-neon-cyan transition-colors text-slate-200 placeholder:text-slate-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-mono text-slate-500 ml-4">RETURN_PROTOCOL</label>
              <input 
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-5 focus:outline-none focus:border-neon-cyan transition-colors text-slate-200 placeholder:text-slate-700"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase font-mono text-slate-500 ml-4">QUERY_BODY</label>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5} 
                placeholder="Message Payload" 
                className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-5 focus:outline-none focus:border-neon-cyan transition-colors text-slate-200 placeholder:text-slate-700"
              ></textarea>
            </div>
            <div className="md:col-span-2 mt-4">
              <motion.button 
                disabled={status === 'submitting'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-6 bg-gradient-to-r from-neon-cyan to-neon-purple text-slate-950 font-black rounded-2xl uppercase tracking-[0.2em] shadow-xl transition-all ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-neon-cyan/20'}`}
              >
                {status === 'submitting' ? 'TRANSMITTING...' : 'COMMIT_QUERY'}
              </motion.button>
            </div>
          </form>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-500 text-xs font-mono uppercase tracking-widest"
              >
                Data transmitted successfully. I will reach out soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-xs font-mono uppercase tracking-widest"
              >
                Transmission failed. Please check your connection or try again.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;