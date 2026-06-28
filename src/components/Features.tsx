import { motion } from 'motion/react';
import { 
  Sparkles,
  Activity,
  AlarmClock,
  Terminal,
  Radio,
  MessageSquare,
  MessageCircle,
  PhoneCall,
  Sliders,
  ShieldAlert,
  Youtube,
  Eye,
  CheckCircle2,
  LayoutDashboard,
  Layers,
  Zap,
  Smartphone,
  Mic,
  Lock,
  Volume2,
  Sun,
  MapPin,
  Camera,
  Music,
  Cpu,
  Clock,
  Brain
} from 'lucide-react';

export default function Features() {
  const brandNewFeatures = [
    {
      icon: <LayoutDashboard className="w-6 h-6 text-yellow-400" />,
      title: "Dedicated Services Screen (SERVICES Button Activated!)",
      badge: "Abhi add kiya gaya!",
      desc: "Ab aap HOME aur HISTORY screen par bottom bar ke SERVICES button par click karke direct is dashboard par ja sakte hain.",
      items: [
        "Instant easy navigation from bottom bar",
        "Direct control center for background actions",
        "Unified interface for services monitoring"
      ]
    },
    {
      icon: <Activity className="w-6 h-6 text-green-400" />,
      title: "Background Services Monitor",
      badge: "Live Status Tracker",
      desc: "Yahan se aap live dekh sakte hain aur settings ko toggle kar sakte hain:",
      items: [
        "Accessibility Service (WhatsApp automation ke liye) active check",
        "Notification Listener (Incoming notifications padhne ke liye) live check",
        "Wake Word Service (Background voice trigger ke liye) on/off check"
      ]
    },
    {
      icon: <AlarmClock className="w-6 h-6 text-cyan-400" />,
      title: "Smart Reminder & Timer Alarm System",
      badge: "Loud Clock Alarm",
      desc: "Full automated sound and vibration feedback loops when timer completes.",
      items: [
        "Alarm-style Ringing: Loud alarm ringtone and strong phone vibration",
        "Stop & Cancel Controls: Flashing on-screen alert to stop or cancel instantly",
        "Quick Presets: 1m, 5m, 10m, or 30m direct buttons with custom duration options"
      ]
    },
    {
      icon: <Terminal className="w-6 h-6 text-purple-400" />,
      title: "In-App Commands Directory",
      badge: "Voice Commands Guide",
      desc: "Is screen par niche aapko ek interactive voice guide milegi:",
      items: [
        "Exact WhatsApp automation voice prompts list",
        "Hardware utilities and device system control words",
        "Quick copyable custom trigger phrases for ease of use"
      ]
    }
  ];

  const coreFeatures = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Voice App Control",
      desc: "Open any app instantly using natural voice commands without touching the screen."
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "AI Conversations & Voice Engine",
      desc: "Talk naturally with JARVIS in Hinglish + Hindi + English and receive intelligent, context-aware responses with perfect pronunciation."
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Smart Phone Control",
      desc: "Control flashlight, volume, device settings, WiFi, Bluetooth and much more."
    },
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      title: "Floating Assistant overlay",
      desc: "Works seamlessly above other apps and always stays available when you need it on your phone."
    },
    {
      icon: <Mic className="w-5 h-5" />,
      title: "Wake Word Activation",
      desc: "Launch JARVIS instantly simply by using voice activation from anywhere."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Task Automation",
      desc: "Perform multiple complex actions and workflows with a single simple command."
    },
    {
      icon: <Radio className="w-5 h-5" />,
      title: "Continuous Wake Word Trigger ('Jarvis')",
      desc: "Background mein continuous listening support hai. Bas \"Jarvis\" bolte hi overlay active ho jata hai aur voice control start ho jata hai."
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Advanced WhatsApp Automation",
      desc: "Smart Name Matching (Exact, Prefix, Substring, and Initials like 'rn' -> 'Rahul Naqvi'). Compose messages in Hindi Devanagari, Hinglish or English."
    },
    {
      icon: <PhoneCall className="w-5 h-5" />,
      title: "WhatsApp Calls (Audio & Video)",
      desc: "Jarvis aapke contact book se search karke kisi ko bhi direct WhatsApp VoIP Audio call ya Video call connect kar sakta hai."
    },
    {
      icon: <Sliders className="w-5 h-5" />,
      title: "Device Controls (Hardware Utilities)",
      desc: "Flashlight control, Wi-Fi, Bluetooth, Mobile Data, Hotspot, DND, Auto-Rotate, Airplane mode, and screen capture."
    },
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Screen Guard Mode (Security Alert)",
      desc: "Anti-theft motion sensing. Jab koi bhi aapke phone ko bina permission touch karega, Jarvis loud alarm bajayega: 'Boss, someone has touched your phone!'"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      title: "YouTube Search & Playback",
      desc: "Aap bol sakte hain 'Play songs on YouTube' ya 'Search YouTube', aur Jarvis direct background video fetch karke play kar dega."
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Live Vision (Screen Analysis)",
      desc: "Jarvis smart vision model ka use karke aapke current screen frame ko live analyze karta hai, on-screen text read karta hai, aur translate karta hai."
    }
  ];

  const categorizedFeatures = [
    {
      category: "1. Device Power & Screen Control",
      icon: <Lock className="w-5 h-5 text-blue-400" />,
      items: [
        "Lock phone using voice commands",
        "Open power menu",
        "Screen Guard anti-theft protection"
      ]
    },
    {
      category: "2. Smart Call Management",
      icon: <PhoneCall className="w-5 h-5 text-green-400" />,
      items: [
        "Voice call receive/reject",
        "Smart auto answer busy mode",
        "Make calls using voice"
      ]
    },
    {
      category: "3. Sound & Volume Control",
      icon: <Volume2 className="w-5 h-5 text-cyan-400" />,
      items: [
        "Increase/decrease volume",
        "Set exact volume percentage",
        "Silent/Vibrate/Normal modes"
      ]
    },
    {
      category: "4. Brightness & Display",
      icon: <Sun className="w-5 h-5 text-yellow-400" />,
      items: [
        "Control brightness",
        "Set brightness percentage",
        "Auto brightness control"
      ]
    },
    {
      category: "5. Maps & Navigation",
      icon: <MapPin className="w-5 h-5 text-red-400" />,
      items: [
        "Current location lookup",
        "Start navigation instantly",
        "Nearby places search"
      ]
    },
    {
      category: "6. Camera Control",
      icon: <Camera className="w-5 h-5 text-pink-400" />,
      items: [
        "Open default camera",
        "Take photos using voice",
        "Flip camera seamlessly",
        "Start recording video"
      ]
    },
    {
      category: "7. WhatsApp & Messaging",
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      items: [
        "Read incoming WhatsApp messages",
        "AI smart reply suggestions",
        "Reply naturally with voice"
      ]
    },
    {
      category: "8. Entertainment Control",
      icon: <Music className="w-5 h-5 text-green-500" />,
      items: [
        "Spotify voice playback control",
        "YouTube search and play"
      ]
    },
    {
      category: "9. System Controls",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      items: [
        "Flashlight control",
        "WiFi toggle on/off",
        "Bluetooth connectivity",
        "Mobile Data management",
        "Airplane Mode",
        "DND Mode (Do Not Disturb)"
      ]
    },
    {
      category: "10. Utilities",
      icon: <Clock className="w-5 h-5 text-orange-400" />,
      items: [
        "Time & Date inquiries",
        "Alarm setter and triggers",
        "Timer countdowns",
        "Battery status report",
        "Weather updates"
      ]
    },
    {
      category: "11. Gemini AI Intelligence",
      icon: <Brain className="w-5 h-5 text-indigo-400" />,
      items: [
        "Natural Hinglish/English conversations",
        "Answer questions smartly",
        "Calculations on the fly",
        "Summaries of screens & text"
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14
      }
    }
  };

  return (
    <section className="py-24 relative bg-[#050816]" id="features">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#3B82F6] rounded-full blur-[180px] opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[#8B5CF6] rounded-full blur-[180px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} className="animate-pulse" />
            Premium Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Experience The Power Of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
              JARVIS AI Assistant
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto"
          >
            Your ultimate premium personal AI voice assistant that commands, automates, and controls your Android phone naturally.
          </motion.p>
        </div>

        {/* 🌟 BRAND NEW FEATURES */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-4">
            <span className="text-3xl">🌟</span>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                Brand New Features <span className="text-sm font-normal text-[#94A3B8] block sm:inline sm:ml-2">(Abhi add kiye gaye hain!)</span>
              </h3>
              <p className="text-[#94A3B8] text-sm mt-1">Supercharge your Android device with our latest game-changing additions.</p>
            </div>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {brandNewFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-gradient-to-br from-[#0F172A]/90 to-[#1E293B]/60 backdrop-blur-xl border border-[#3B82F6]/20 rounded-[2.5rem] p-8 md:p-10 hover:border-[#3B82F6]/60 shadow-[0_0_25px_rgba(59,130,246,0.08)] hover:shadow-[0_0_45px_rgba(59,130,246,0.18)] transition-all duration-500 relative overflow-hidden"
              >
                {/* Glowing subtle back-drop */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#3B82F6]/10 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#050816] border border-[#3B82F6]/30 shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                        {feature.badge}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 leading-snug">
                      {feature.title}
                    </h4>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                      {feature.desc}
                    </p>
                    <ul className="space-y-2.5">
                      {feature.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#3B82F6] shrink-0 mt-0.5" />
                          <span className="text-[#94A3B8] text-xs md:text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 🧠 CORE & EXISTING FEATURES */}
        <div>
          <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-4">
            <span className="text-3xl">🧠</span>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                Core & Existing Features <span className="text-sm font-normal text-[#94A3B8] block sm:inline sm:ml-2">(Powerful Essentials)</span>
              </h3>
              <p className="text-[#94A3B8] text-sm mt-1">Our robust baseline automation suite built to perfection.</p>
            </div>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {coreFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-[#0F172A]/70 backdrop-blur-md border border-white/5 hover:border-[#8B5CF6]/40 rounded-[2rem] p-6 hover:bg-[#0F172A]/90 shadow-md hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual Accent Hover Bar */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="w-10 h-10 rounded-xl bg-[#050816] border border-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#8B5CF6] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-[#94A3B8] text-xs md:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 📋 CATEGORIZED SYSTEM UTILITIES */}
        <div className="mt-24">
          <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-4">
            <span className="text-3xl">📋</span>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                Categorized Voice Commands & System Utilities
              </h3>
              <p className="text-[#94A3B8] text-sm mt-1">Complete modular layout of commands and features supported by JARVIS.</p>
            </div>
          </div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categorizedFeatures.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-gradient-to-br from-[#0F172A]/80 to-[#1E293B]/40 backdrop-blur-md border border-white/5 hover:border-[#3B82F6]/30 rounded-3xl p-6 hover:bg-[#0F172A]/90 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#050816] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <h4 className="text-md font-bold text-white leading-snug group-hover:text-[#3B82F6] transition-colors">
                    {cat.category}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                      <span className="text-[#3B82F6] font-bold shrink-0 mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer / End of features note */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg md:text-xl font-display font-medium text-[#94A3B8]">
            ...and many more features in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] font-bold">JARVIS</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
