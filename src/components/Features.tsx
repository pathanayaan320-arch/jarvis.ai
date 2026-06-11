import { motion } from 'motion/react';
import { Mic, MessageSquare, Smartphone, Layers, Zap, Command } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Layers size={24} />,
      title: "Voice App Control",
      desc: "Open any app instantly using natural voice commands without touching the screen."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "AI Conversations",
      desc: "Talk naturally with JARVIS and receive intelligent, context-aware responses."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Smart Phone Control",
      desc: "Control flashlight, volume, device settings, WiFi, Bluetooth and much more."
    },
    {
      icon: <Command size={24} />,
      title: "Floating Assistant",
      desc: "Works seamlessly above other apps and always stays available when you need it."
    },
    {
      icon: <Mic size={24} />,
      title: "Wake Word Activation",
      desc: "Launch JARVIS instantly simply by using voice activation from anywhere."
    },
    {
      icon: <Zap size={24} />,
      title: "Task Automation",
      desc: "Perform multiple complex actions and workflows with a single simple command."
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 relative bg-[#050816]" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Everything You Need In <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
              One AI Assistant
            </span>
          </motion.h2>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:border-[#3B82F6]/50 shadow-[0_0_20px_rgba(59,130,246,0.05)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3B82F6]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="w-14 h-14 rounded-2xl bg-[#050816] border border-[#3B82F6]/30 shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center text-[#3B82F6] mb-6 group-hover:scale-110 group-hover:border-[#3B82F6] transition-all">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
