import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const features = [
    "Unlimited Voice Commands",
    "AI Conversations",
    "App Launch Control",
    "Smart Automation",
    "Premium Updates",
    "Lifetime Access",
    "No Monthly Fees"
  ];

  return (
    <section className="py-24 bg-[#050816]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Simple Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#94A3B8]"
          >
            One price, endless intelligent possibilities.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="max-w-md mx-auto relative group"
        >
          {/* Animated Glow Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6] rounded-[2rem] blur opacity-40 transition duration-1000 group-hover:opacity-100" />
          
          <div className="relative bg-[#0F172A]/80 rounded-[2rem] p-8 md:p-10 border border-white/10 backdrop-blur-xl z-10 flex flex-col h-full shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">JARVIS Lifetime Plan</h3>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-5xl font-bold text-white">₹399</span>
                <span className="text-[#94A3B8] line-through text-xl mt-2">₹1999</span>
              </div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/40 text-[#3B82F6] font-bold text-[10px] tracking-widest uppercase">
                Limited Time Offer
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-1">
              {features.map((feature, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  key={idx} 
                  className="flex items-center gap-4"
                >
                  <div className="w-5 h-5 rounded flex items-center justify-center shrink-0 bg-[#3B82F6]/20 border border-[#3B82F6]/40">
                    <Check size={12} className="text-[#3B82F6]" />
                  </div>
                  <span className="text-white/80 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <button 
              onClick={() => window.open('https://wa.me/918400815008?text=Hey%2C%20I%20want%20JARVIS%20AI%20Voice%20Assistant%20for%20%E2%82%B9399%20INR.', '_blank')}
              className="w-full bg-[#3B82F6] hover:scale-[1.02] text-white font-bold py-4 rounded-xl transition-all shadow-[0_10px_30px_rgba(59,130,246,0.3)] text-lg cursor-pointer"
            >
              Buy Now ₹399
            </button>
            <p className="text-center text-xs text-[#94A3B8] mt-4">Manual payment via WhatsApp. Instant APK delivery.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
