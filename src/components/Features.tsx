import { motion } from 'motion/react';
import { 
  Power, 
  Phone, 
  Volume2, 
  Sun, 
  Map, 
  Camera, 
  MessageCircle, 
  PlaySquare, 
  Settings, 
  Clock, 
  BrainCircuit,
  CheckCircle2
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Power size={24} />,
      title: "Device Power & Screen Control",
      items: [
        "Lock phone using voice commands",
        "Open power menu",
        "Screen Guard anti-theft protection"
      ]
    },
    {
      icon: <Phone size={24} />,
      title: "Smart Call Management",
      items: [
        "Voice call receive/reject",
        "Smart auto answer busy mode",
        "Make calls using voice"
      ]
    },
    {
      icon: <Volume2 size={24} />,
      title: "Sound & Volume Control",
      items: [
        "Increase/decrease volume",
        "Set exact volume percentage",
        "Silent/Vibrate/Normal modes"
      ]
    },
    {
      icon: <Sun size={24} />,
      title: "Brightness & Display",
      items: [
        "Control brightness",
        "Set brightness percentage",
        "Auto brightness control"
      ]
    },
    {
      icon: <Map size={24} />,
      title: "Maps & Navigation",
      items: [
        "Current location",
        "Start navigation",
        "Nearby places search"
      ]
    },
    {
      icon: <Camera size={24} />,
      title: "Camera Control",
      items: [
        "Open camera",
        "Take photos",
        "Flip camera",
        "Start recording"
      ]
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp & Messaging",
      items: [
        "Read WhatsApp messages",
        "AI smart replies",
        "Reply naturally"
      ]
    },
    {
      icon: <PlaySquare size={24} />,
      title: "Entertainment Control",
      items: [
        "Spotify voice control",
        "YouTube search and play"
      ]
    },
    {
      icon: <Settings size={24} />,
      title: "System Controls",
      items: [
        "Flashlight",
        "WiFi",
        "Bluetooth",
        "Mobile Data",
        "Airplane Mode",
        "DND Mode"
      ]
    },
    {
      icon: <Clock size={24} />,
      title: "Utilities",
      items: [
        "Time/date",
        "Alarm",
        "Timer",
        "Battery status",
        "Weather"
      ]
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "Gemini AI Intelligence",
      items: [
        "Natural Hinglish/English conversations",
        "Answer questions",
        "Calculations",
        "Summaries"
      ],
      featured: true
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
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#8B5CF6] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Experience The Power Of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
              JARVIS
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#94A3B8] max-w-2xl mx-auto"
          >
            Your personal AI voice assistant that controls your Android phone.
          </motion.p>
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
              className={`group bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 transition-all duration-500 relative overflow-hidden ${
                feature.featured 
                  ? 'md:col-span-2 lg:col-span-3 border-[#8B5CF6]/40 shadow-[0_0_30px_rgba(139,92,246,0.15)] bg-gradient-to-br from-[#0F172A]/90 to-[#8B5CF6]/10 hover:border-[#8B5CF6]/80 hover:shadow-[0_0_50px_rgba(139,92,246,0.3)]' 
                  : 'hover:border-[#3B82F6]/50 shadow-[0_0_20px_rgba(59,130,246,0.05)] hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]'
              }`}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${feature.featured ? 'from-[#8B5CF6]/5 to-[#3B82F6]/5' : 'from-[#3B82F6]/5 to-[#8B5CF6]/5'}`} />
              
              <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
                <div className={`w-14 h-14 shrink-0 rounded-2xl bg-[#050816] border shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500 ${feature.featured ? 'border-[#8B5CF6]/40 text-[#8B5CF6] group-hover:border-[#8B5CF6]' : 'border-[#3B82F6]/30 text-[#3B82F6] group-hover:border-[#3B82F6]'}`}>
                  {feature.icon}
                </div>
                
                <div className="w-full">
                  <h3 className={`text-xl font-bold mb-4 ${feature.featured ? 'text-white' : 'text-white'}`}>
                    {idx + 1}. {feature.title}
                  </h3>
                  
                  <ul className={`grid gap-3 ${feature.featured ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {feature.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className={`shrink-0 mt-1 cursor-pointer transition-colors ${feature.featured ? 'text-[#8B5CF6]' : 'text-[#3B82F6]'}`} />
                        <span className="text-[#94A3B8] text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
