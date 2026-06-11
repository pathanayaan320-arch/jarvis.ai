import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Trust() {
  const badges = [
    "AI Powered",
    "Voice Controlled",
    "Fast Response",
    "Android Optimized"
  ];
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="py-10 border-y border-white/5 bg-[#0F172A]/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {badges.map((badge, index) => (
            <motion.div key={index} variants={itemVariants} className="flex items-center gap-2 text-[#94A3B8] font-bold text-sm tracking-widest uppercase">
              <CheckCircle2 className="text-[#3B82F6]" size={16} />
              <span>{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
