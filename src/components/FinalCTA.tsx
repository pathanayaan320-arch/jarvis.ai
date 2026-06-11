import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#050816]">
      {/* Background Graphic */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-[#3B82F6]/10 to-[#8B5CF6]/10 rounded-full blur-[120px]" />
      </motion.div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Ready To Upgrade Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">Android Experience?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto"
        >
          Get your personal AI voice assistant today and control your device like never before.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <button 
            onClick={() => window.open('https://wa.me/918400815008?text=Hey%2C%20I%20want%20JARVIS%20AI%20Voice%20Assistant%20for%20%E2%82%B9399%20INR.', '_blank')}
            className="bg-[#3B82F6] text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:scale-105 cursor-pointer"
          >
            Get JARVIS For ₹399
          </button>
        </motion.div>
      </div>
    </section>
  );
}
