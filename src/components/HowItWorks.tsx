import { motion } from 'motion/react';
import { Download, ShieldCheck, Mic2, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: <Download />, title: "Install JARVIS", desc: "Download the app directly to your Android device." },
    { icon: <ShieldCheck />, title: "Grant Permissions", desc: "Allow necessary access for system-level control." },
    { icon: <Mic2 />, title: "Say 'Hey JARVIS'", desc: "Activate using the wake word anytime, anywhere." },
    { icon: <Sparkles />, title: "Let JARVIS Handle It", desc: "Enjoy completely hands-free AI control." }
  ];

  return (
    <section className="py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">How It Works</h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">Get started with your personal AI assistant in minutes, not hours.</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start relative max-w-6xl mx-auto gap-8 lg:gap-0">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-24 right-24 h-[2px] bg-gradient-to-r from-[#3B82F6]/20 via-[#8B5CF6]/20 to-[#3B82F6]/20" />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center w-full lg:w-1/4 relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-[#0F172A] border border-white/10 flex items-center justify-center text-[#3B82F6] mb-6 shadow-[0_0_30px_rgba(59,130,246,0.1)] group hover:border-[#3B82F6]/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all">
                <div className="scale-125 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-xs font-bold px-4 py-1.5 rounded-full text-white mb-6 -mt-11 border-[4px] border-[#050816]">Step {idx + 1}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-[#94A3B8] px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
