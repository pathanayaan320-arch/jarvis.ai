import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Screenshots() {
  const screens = [
    { title: "Home Screen", color: "from-[#3B82F6] to-[#06B6D4]" },
    { title: "Voice Listening", color: "from-[#8B5CF6] to-[#3B82F6]" },
    { title: "AI Chat Interface", color: "from-[#0F172A] to-[#3B82F6]" },
    { title: "Settings Panel", color: "from-[#1E293B] to-[#0F172A]" },
    { title: "Command Execution", color: "from-[#06B6D4] to-[#3B82F6]" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % screens.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));

  return (
    <section className="py-24 overflow-hidden relative bg-[#050816]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Beautiful Interface</h2>
          <p className="text-lg text-[#94A3B8]">Designed with premium aesthetics for Android.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          <button onClick={prev} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white backdrop-blur-md transition-colors hidden md:flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
             <ChevronLeft size={24} />
          </button>
          
          <div className="relative w-full max-w-[300px] aspect-[9/19.5]">
             {screens.map((screen, idx) => (
                <motion.div
                  key={idx}
                  className={`absolute inset-0 rounded-[2.5rem] border-[6px] border-[#1E293B] overflow-hidden shadow-2xl bg-gradient-to-br ${screen.color}`}
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ 
                    opacity: idx === currentIndex ? 1 : 0,
                    scale: idx === currentIndex ? 1 : 0.8,
                    x: idx === currentIndex ? 0 : (idx > currentIndex ? 100 : -100),
                    zIndex: idx === currentIndex ? 10 : 0
                  }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                >
                   <div className="absolute inset-0 bg-[#050816]/30 backdrop-blur-sm" />
                   <div className="absolute top-0 inset-x-0 h-6 bg-[#1E293B] w-1/2 mx-auto rounded-b-xl z-10" />
                   
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0">
                      <div className="w-16 h-16 rounded-3xl bg-[#0F172A]/50 flex items-center justify-center mb-6 shadow-xl backdrop-blur-md border border-white/20">
                          <div className="w-8 h-8 rounded-full bg-white/80" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-6 tracking-wide">{screen.title}</h3>
                      <div className="w-24 h-2 bg-white/30 rounded-full mb-3" />
                      <div className="w-32 h-2 bg-white/20 rounded-full mb-3" />
                      <div className="w-20 h-2 bg-white/20 rounded-full" />
                   </div>
                </motion.div>
             ))}
          </div>

          <button onClick={next} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white backdrop-blur-md transition-colors hidden md:flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
             <ChevronRight size={24} />
          </button>
        </motion.div>
        
        <div className="flex justify-center gap-4 mt-12 md:hidden">
            <button onClick={prev} className="p-4 rounded-full bg-white/5 border border-white/10 text-white"><ChevronLeft size={24} /></button>
            <button onClick={next} className="p-4 rounded-full bg-white/5 border border-white/10 text-white"><ChevronRight size={24} /></button>
        </div>
      </div>
    </section>
  );
}
