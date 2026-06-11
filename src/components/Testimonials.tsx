import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul S.",
      role: "Software Engineer",
      text: "JARVIS completely changed how I interact with my phone. The voice recognition is snappy, and launching apps without touching the screen is pure magic.",
      rating: 5
    },
    {
      name: "Anjali M.",
      role: "Business Owner",
      text: "Best ₹399 I've ever spent. It handles all my tasks flawlessly. Using it while driving has made my life so much easier and safer.",
      rating: 5
    },
    {
      name: "Vikram P.",
      role: "Tech Enthusiast",
      text: "I've tried many AI assistants, but this feels premium and natively integrated. The floating orb looks incredibly futuristic and fluid.",
      rating: 5
    }
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl font-display font-bold text-center text-white mb-16"
        >
          Loved by Users
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-[#0F172A]/80 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm hover:border-[#3B82F6]/50 shadow-[0_0_20px_rgba(59,130,246,0.05)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#3B82F6] text-[#3B82F6]" />
                ))}
              </div>
              <p className="text-[#94A3B8] mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-white font-bold">{review.name}</p>
                  <p className="text-[#3B82F6] text-[10px] font-mono tracking-widest uppercase mt-0.5">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
