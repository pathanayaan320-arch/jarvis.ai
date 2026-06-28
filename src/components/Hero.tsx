import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Play, X, Info, Layers, Video } from 'lucide-react';
import InteractiveDemo from './InteractiveDemo';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [demoModalTab, setDemoModalTab] = useState<'interactive' | 'video'>('interactive');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yMockup = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityMockup = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex flex-col pt-32 pb-24 overflow-hidden" id="demo">
      {/* Background Gradients */}
      <motion.div style={{ y: yBackground }} className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-[#3B82F6] rounded-full blur-[160px] opacity-20 pointer-events-none" />
      <motion.div style={{ y: yBackground }} className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-[#8B5CF6] rounded-full blur-[160px] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Text Content */}
          <motion.div 
            style={{ y: yText }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A] border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.15)] mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#3B82F6] animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#3B82F6] pr-2 border-r border-white/10 mr-1">₹399 Lifetime Access</span>
              <span className="text-[#94A3B8] text-[10px] uppercase font-bold tracking-widest">No Monthly Fees</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Meet JARVIS <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
                Personal AI Voice Assistant
              </span>
            </h1>
            
            <p className="text-[#94A3B8] text-lg max-w-[440px] leading-relaxed mb-10">
              Control your Android phone with natural voice commands. Open apps, manage tasks, search the web, launch features, and interact with an intelligent AI assistant that works everywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-[#3B82F6] text-white px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105 shadow-[0_10px_30px_rgba(59,130,246,0.4)] flex items-center justify-center group text-lg cursor-pointer"
              >
                Experience JARVIS
                <motion.span 
                  className="ml-2 group-hover:translate-x-1"
                  transition={{ type: "spring", stiffness: 300 }}
                >→</motion.span>
              </button>
              
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-lg cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={14} className="ml-1 text-white" />
                </div>
                Watch Demo
              </button>
            </div>
          </motion.div>
          
          {/* Mockup */}
          <motion.div 
            style={{ y: yMockup, opacity: opacityMockup }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px]"
          >
            {/* Phone Frame */}
            <div className="relative rounded-[40px] border-[6px] border-[#1E293B] bg-[#0F172A] p-2 shadow-2xl overflow-hidden aspect-[9/19.5]">
              <div className="absolute top-0 inset-x-0 h-6 bg-[#1E293B] w-1/2 mx-auto rounded-b-xl z-20" /> {/* Notch */}
              
              {/* Phone Content Interface */}
              <div className="absolute inset-0 bg-[#050816] flex flex-col items-center justify-center h-full rounded-[34px] overflow-hidden p-6 relative">
                
                {/* AI Orb */}
                <div className="flex-1 flex flex-col items-center justify-center w-full">
                  <div className="w-48 h-48 border-2 border-dashed border-[#3B82F6]/30 rounded-full flex items-center justify-center relative">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-[#3B82F6]/30 rounded-full"
                    />
                    <div className="w-40 h-40 border-4 border-[#8B5CF6]/20 rounded-full flex items-center justify-center text-center">
                      <div className="w-32 h-32 bg-[#3B82F6] rounded-full blur-[40px] opacity-40 absolute"></div>
                      <div className="w-12 h-12 bg-white rounded-full shadow-[0_0_30px_#fff] flex items-center justify-center z-10">
                        <motion.div 
                          animate={{ scale: [1, 1.3, 1] }} 
                          transition={{ duration: 1.5, repeat: Infinity }} 
                          className="w-6 h-6 rounded-full bg-[#3B82F6]/50 blur-sm" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 text-center w-full"
                  >
                    <div className="text-xs text-[#3B82F6] font-mono tracking-widest uppercase mb-2">Listening...</div>
                    <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden mx-auto mb-2 text-center">
                       <motion.div 
                         initial={{ width: 0 }} 
                         animate={{ width: "66%" }} 
                         transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }} 
                         className="h-full bg-[#3B82F6]" 
                       />
                    </div>
                    <p className="text-sm italic text-white/70 font-mono">"Opening Spotify..."</p>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Floating Features Overlap */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
              className="absolute -left-10 top-1/4 p-4 bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl space-y-3 w-44 z-30 hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#06B6D4] rounded flex items-center justify-center text-[10px] text-white">App</div>
                <span className="text-[11px] font-bold text-white">Voice App Control</span>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <div className="w-6 h-6 bg-[#8B5CF6] rounded flex items-center justify-center text-[10px] text-white">AI</div>
                <span className="text-[11px] font-bold text-white">Automation</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Video Demo Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-5xl bg-[#0F172A] border border-[#3B82F6]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.4)] my-8"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-white/10 bg-[#050816]/80 backdrop-blur-md gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-pulse" />
                  <h3 className="text-xl font-bold text-white font-display">JARVIS OS System Demo</h3>
                </div>

                {/* Tab Switcher */}
                <div className="flex bg-black/40 p-1.5 rounded-xl border border-white/5 shrink-0">
                  <button
                    onClick={() => setDemoModalTab('interactive')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${demoModalTab === 'interactive' ? 'bg-[#3B82F6] text-black shadow-lg' : 'text-[#94A3B8] hover:text-white'}`}
                  >
                    <Layers size={14} />
                    Live Interactive OS Simulator
                  </button>
                  <button
                    onClick={() => setDemoModalTab('video')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${demoModalTab === 'video' ? 'bg-[#3B82F6] text-black shadow-lg' : 'text-[#94A3B8] hover:text-white'}`}
                  >
                    <Video size={14} />
                    Watch Recorded Video
                  </button>
                </div>

                <button 
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors cursor-pointer self-end sm:self-auto"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Content Area */}
              <div className="bg-[#02040A]">
                {demoModalTab === 'interactive' ? (
                  <div className="p-4 sm:p-6 bg-[#050816]/30">
                    <InteractiveDemo />
                  </div>
                ) : (
                  <div className="relative aspect-video bg-black flex flex-col items-center justify-center">
                    <video 
                      src="https://www.image2url.com/r2/default/videos/1782636208826-1302e956-25f0-4646-93a4-e10d3272e3d6.mp4" 
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      loop
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>

              {/* Footer / Info */}
              <div className="p-4 bg-[#050816]/80 border-t border-white/5 flex items-start gap-2.5 text-xs text-[#94A3B8]">
                <Info size={16} className="text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <p className="leading-relaxed">
                    <strong>Interactive Demo Engine:</strong> Use the live simulator to trigger custom triggers, toggle active background accessibility services, and hear automated replies. Tap on the <strong>Watch Recorded Video</strong> tab above to view the high-tech promo video in action!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
