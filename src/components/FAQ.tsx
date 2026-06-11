import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "What is JARVIS?",
      a: "JARVIS is a premium AI-powered voice assistant app for Android devices. It allows you to control your phone, open apps, and automate tasks purely using natural voice commands."
    },
    {
      q: "How does voice control work?",
      a: "JARVIS runs as a background service and listens for its wake word. Once activated, it processes your natural language query using advanced AI models to map your intent to system-level Android actions."
    },
    {
      q: "Is this a one-time payment?",
      a: "Yes! Currently, we are offering lifetime access for a single payment of ₹399. There are absolutely no recurring monthly or annual fees."
    },
    {
      q: "Which Android versions are supported?",
      a: "JARVIS is optimized for extreme performance and compatibility on devices running Android 10 and above."
    },
    {
      q: "Does it require internet?",
      a: "Yes, an internet connection is required for the AI conversational features and advanced intent recognition, though basic system commands can work offline."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-[#050816]" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl font-display font-bold text-center text-white mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, idx) => (
             <motion.div 
               key={idx} 
               variants={itemVariants}
               className="border border-white/10 rounded-2xl bg-[#0F172A]/80 overflow-hidden hover:border-[#3B82F6]/50 transition-colors shadow-lg"
             >
               <button 
                 onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                 className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
               >
                 <span className="text-white font-medium text-lg pr-8">{faq.q}</span>
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${openIdx === idx ? 'bg-[#3B82F6] text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-[#050816] border border-white/10 text-[#94A3B8]'}`}>
                   {openIdx === idx ? <Minus size={16} /> : <Plus size={16} />}
                 </div>
               </button>
               
               <AnimatePresence>
                 {openIdx === idx && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="overflow-hidden"
                   >
                     <p className="p-6 pt-0 text-[#94A3B8] leading-relaxed border-t border-white/5 mx-6">
                       {faq.a}
                     </p>
                   </motion.div>
                 )}
               </AnimatePresence>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
