import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Wifi, 
  Bluetooth, 
  Mic, 
  Send, 
  Volume2, 
  Radio, 
  ShieldAlert, 
  Play, 
  Tv, 
  CheckCircle2, 
  Layers, 
  Maximize2,
  Clock,
  Check,
  Search,
  Zap,
  Activity,
  UserCheck
} from 'lucide-react';

export default function InteractiveDemo() {
  const [activeScreen, setActiveScreen] = useState<'system' | 'whatsapp' | 'security' | 'controls' | 'presets'>('system');
  const [isListening, setIsListening] = useState(false);
  const [commandResponse, setCommandResponse] = useState<string>("Boliye boss, main sun raha hoon.");
  const [typedMessage, setTypedMessage] = useState("");
  const [whatsappLanguage, setWhatsappLanguage] = useState<'HINDI' | 'HINGLISH' | 'ENGLISH'>('HINGLISH');
  const [alarmActive, setAlarmActive] = useState(false);
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);
  const [isDndOn, setIsDndOn] = useState(false);
  const [isWifiOn, setIsWifiOn] = useState(true);
  const [isBluetoothOn, setIsBluetoothOn] = useState(true);
  const [timerDuration, setTimerDuration] = useState<number | null>(null);
  const [timerInput, setTimerInput] = useState("");
  const [flashingAlert, setFlashingAlert] = useState(false);

  // Stats ticker
  const [volts, setVolts] = useState(3.8);
  const [temp, setTemp] = useState(32);
  const [battery, setBattery] = useState(87);

  // Audio simulation
  const speakSimulate = (text: string) => {
    setCommandResponse(text);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = text.match(/[\u0900-\u097F]/) ? 'hi-IN' : 'en-IN';
      utterance.rate = 1.05;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVolts(prev => +(prev + (Math.random() * 0.1 - 0.05)).toFixed(2));
      setTemp(prev => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Timer Countdown Simulation
  useEffect(() => {
    if (timerDuration !== null && timerDuration > 0) {
      const t = setTimeout(() => {
        setTimerDuration(prev => (prev !== null ? prev - 1 : null));
      }, 1000);
      return () => clearTimeout(t);
    } else if (timerDuration === 0) {
      setTimerDuration(null);
      setFlashingAlert(true);
      speakSimulate("Boss, aapka timer poora ho gaya hai! Wake up!");
      // Simulate ringtone vibration
      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 200]);
      }
    }
  }, [timerDuration]);

  const handleCommand = (cmd: string) => {
    setIsListening(true);
    setCommandResponse("Processing...");
    
    setTimeout(() => {
      setIsListening(false);
      const lowerCmd = cmd.toLowerCase();
      
      if (lowerCmd.includes("flashlight") || lowerCmd.includes("torch")) {
        setIsFlashlightOn(prev => !prev);
        speakSimulate(!isFlashlightOn ? "Flashlight on kar di hai, boss!" : "Flashlight off kar di hai.");
      } else if (lowerCmd.includes("whatsapp to")) {
        setActiveScreen('whatsapp');
        setTypedMessage("");
        const contact = cmd.split("to ").pop() || "Rahul";
        speakSimulate(`Sure, WhatsApp open karke ${contact} ko select kiya ja raha hai...`);
        
        let message = "";
        if (whatsappLanguage === 'HINDI') message = "मै थोड़ी देर में कॉल करता हूँ।";
        else if (whatsappLanguage === 'HINGLISH') message = "Main thodi der me call karta hu";
        else message = "I will call you in a few minutes.";
        
        setTimeout(() => {
          let i = 0;
          const typing = setInterval(() => {
            if (i < message.length) {
              setTypedMessage(prev => prev + message.charAt(i));
              i++;
            } else {
              clearInterval(typing);
              speakSimulate(`Message successfully type aur auto-send kar diya gaya hai.`);
            }
          }, 50);
        }, 1500);
      } else if (lowerCmd.includes("security") || lowerCmd.includes("screen guard")) {
        setActiveScreen('security');
        speakSimulate("Screen Guard System active ho gaya hai. Ab phone touch mat karna!");
      } else if (lowerCmd.includes("youtube") || lowerCmd.includes("play")) {
        speakSimulate("Sure boss, playing high tech music tracks on YouTube app.");
      } else if (lowerCmd.includes("wifi")) {
        setIsWifiOn(prev => !prev);
        speakSimulate(!isWifiOn ? "Wi-Fi chalu ho gaya hai, boss." : "Wi-Fi band kar diya hai.");
      } else if (lowerCmd.includes("dnd") || lowerCmd.includes("silent")) {
        setIsDndOn(prev => !prev);
        speakSimulate(!isDndOn ? "DND mode activation completed." : "DND off kiya ja raha hai.");
      } else {
        speakSimulate("Command recognized. Executing target automation successfully.");
      }
    }, 1200);
  };

  const setTimerPreset = (minutes: number) => {
    setTimerDuration(minutes * 60);
    speakSimulate(`${minutes} minute ka smart timer set ho gaya hai.`);
  };

  return (
    <div className="w-full bg-[#050816] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col md:flex-row h-[550px] md:h-[600px]" id="interactive-demo-container">
      
      {/* Phone Screen Simulated Column */}
      <div className="w-full md:w-[380px] bg-[#02040A] border-b md:border-b-0 md:border-r border-white/10 flex flex-col relative shrink-0 overflow-hidden">
        
        {/* Notch / Status Bar */}
        <div className="h-10 bg-black flex items-center justify-between px-6 text-[11px] font-mono text-[#94A3B8] shrink-0 border-b border-white/5">
          <div className="flex items-center gap-1">
            <span className="font-bold text-white">JARVIS OS</span>
            <span className="text-emerald-400">● 5G</span>
          </div>
          <div className="w-24 h-4 bg-[#1E293B] rounded-full border border-white/5 absolute left-1/2 -translate-x-1/2 top-2 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">{battery}%</span>
            <Clock size={11} />
          </div>
        </div>

        {/* Dynamic Screens */}
        <div className="flex-1 p-5 overflow-y-auto relative flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            {activeScreen === 'system' && (
              <motion.div 
                key="system"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-4 flex-1 flex flex-col justify-between"
              >
                {/* Visualizer Ring (Keyframe 1 / 5) */}
                <div className="flex flex-col items-center justify-center py-6 relative">
                  <div className="absolute w-36 h-36 rounded-full border-2 border-dashed border-[#3B82F6]/30 animate-[spin_40s_linear_infinite]" />
                  <div className="absolute w-32 h-32 rounded-full border border-cyan-400/50 animate-[spin_20s_linear_infinite]" />
                  <motion.div 
                    animate={{ scale: isListening ? [1, 1.15, 1] : 1 }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#3B82F6]/20 to-[#8B5CF6]/20 border border-[#3B82F6]/80 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] relative z-10"
                  >
                    <Radio size={36} className={`${isListening ? 'text-cyan-400 animate-pulse' : 'text-blue-500'}`} />
                  </motion.div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mt-4 animate-pulse">
                    {isListening ? "JARVIS IS LISTENING..." : "SYSTEM ONLINE"}
                  </span>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
                  <div className="p-2 bg-white/5 border border-white/10 rounded-xl text-center">
                    <span className="text-[#94A3B8] block">VOLTS</span>
                    <span className="text-white font-bold">{volts}V</span>
                  </div>
                  <div className="p-2 bg-white/5 border border-white/10 rounded-xl text-center">
                    <span className="text-[#94A3B8] block">TEMP</span>
                    <span className="text-orange-400 font-bold">{temp}°C</span>
                  </div>
                  <div className="p-2 bg-white/5 border border-white/10 rounded-xl text-center">
                    <span className="text-[#94A3B8] block">SIGNAL</span>
                    <span className="text-green-400 font-bold">5G Plan</span>
                  </div>
                </div>

                {/* Services status indicators (Background Services Monitor) */}
                <div className="bg-[#0F172A]/80 border border-white/5 rounded-2xl p-3.5 space-y-2">
                  <span className="text-[10px] font-mono text-[#94A3B8] block uppercase tracking-wider">Active Services Monitor</span>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Accessibility Service
                    </span>
                    <span className="text-green-400 text-[10px] bg-green-400/10 px-1.5 py-0.5 rounded border border-green-400/20">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Notification Listener
                    </span>
                    <span className="text-green-400 text-[10px] bg-green-400/10 px-1.5 py-0.5 rounded border border-green-400/20">LISTENING</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      Wake Word Trigger
                    </span>
                    <span className="text-cyan-400 text-[10px] bg-cyan-400/10 px-1.5 py-0.5 rounded border border-cyan-400/20">ON</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeScreen === 'whatsapp' && (
              <motion.div 
                key="whatsapp"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-4 flex-1 flex flex-col justify-between"
              >
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold font-mono">
                      RN
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Rahul Naqvi</span>
                      <span className="text-[9px] text-green-400">Smart Substring Match</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-[#94A3B8]">WhatsApp Web Automation</span>
                </div>

                {/* Translation Engine Selector */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5 space-y-1.5">
                  <span className="text-[10px] font-mono text-[#94A3B8] block">MESSAGE LANG CONTEXT</span>
                  <div className="grid grid-cols-3 gap-1">
                    {(['HINDI', 'HINGLISH', 'ENGLISH'] as const).map(lang => (
                      <button
                        key={lang}
                        onClick={() => {
                          setWhatsappLanguage(lang);
                          setTypedMessage("");
                          speakSimulate(`Language toggled to ${lang}`);
                        }}
                        className={`text-[9px] font-bold py-1.5 rounded-lg border transition-colors cursor-pointer ${whatsappLanguage === lang ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-black/40 border-white/10 text-[#94A3B8]'}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chat window simulator */}
                <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-3 flex flex-col justify-end min-h-[140px] space-y-2">
                  <div className="max-w-[80%] bg-white/5 text-white p-2 rounded-2xl rounded-tl-none text-[11px] leading-relaxed">
                    Hello, where are you Jarvis?
                  </div>
                  {typedMessage && (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="max-w-[80%] bg-green-600/30 border border-green-500/40 text-white p-2.5 rounded-2xl rounded-tr-none text-[11px] leading-relaxed self-end"
                    >
                      {typedMessage}
                      <span className="block text-[8px] text-[#94A3B8] mt-1 text-right">✓✓ Sent via Jarvis Voice OS</span>
                    </motion.div>
                  )}
                </div>

                <div className="flex gap-1">
                  <input 
                    type="text" 
                    readOnly 
                    value={typedMessage || "Waiting for command trigger..."} 
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-[#94A3B8] outline-none font-mono"
                  />
                  <div className="w-8 h-8 rounded-xl bg-green-500 flex items-center justify-center text-black shrink-0">
                    <Send size={12} />
                  </div>
                </div>
              </motion.div>
            )}

            {activeScreen === 'security' && (
              <motion.div 
                key="security"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-4 flex-1 flex flex-col justify-between"
              >
                <div className="text-center py-4">
                  <ShieldAlert className={`mx-auto w-16 h-16 ${alarmActive ? 'text-red-500 animate-bounce' : 'text-yellow-500'}`} />
                  <h4 className="text-sm font-bold text-white mt-2">Anti-Theft Screen Guard Active</h4>
                  <p className="text-[10px] text-[#94A3B8] mt-1">If anyone touches or picks up your device, an instant alarm is triggered.</p>
                </div>

                {/* Alarm Trigger Simulation */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center space-y-3">
                  <span className="text-[10px] font-mono text-[#94A3B8] block">SIMULATION ACTIONS</span>
                  
                  {alarmActive ? (
                    <motion.div 
                      animate={{ backgroundColor: ['rgba(220,38,38,0.2)', 'rgba(220,38,38,0.4)', 'rgba(220,38,38,0.2)'] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="p-3 border border-red-500 rounded-xl text-red-400 font-bold text-xs"
                    >
                      🚨 "Boss, someone has touched your phone!"
                    </motion.div>
                  ) : (
                    <p className="text-[11px] text-yellow-400/80 font-mono italic">Device is safe and silent...</p>
                  )}

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setAlarmActive(true);
                        speakSimulate("Boss, someone has touched your phone! Intruder alert!");
                      }}
                      className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold py-2 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Touch Phone
                    </button>
                    {alarmActive && (
                      <button
                        onClick={() => {
                          setAlarmActive(false);
                          speakSimulate("Security system reset. Back to monitoring.");
                        }}
                        className="bg-white/10 hover:bg-white/15 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-3 bg-[#050816] rounded-xl border border-white/5 text-[10px] text-[#94A3B8] flex items-center gap-2">
                  <UserCheck size={14} className="text-yellow-500" />
                  <span>Accelerometer sensor tracking active in background</span>
                </div>
              </motion.div>
            )}

            {activeScreen === 'controls' && (
              <motion.div 
                key="controls"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-4 flex-1 flex flex-col justify-between"
              >
                <div className="border-b border-white/5 pb-2">
                  <span className="text-xs font-bold text-white block">Hardware Utilities</span>
                  <p className="text-[10px] text-[#94A3B8]">Direct hardware control center simulated</p>
                </div>

                {/* Flashlight simulator */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isFlashlightOn ? 'bg-yellow-400 text-black' : 'bg-black text-[#94A3B8]'}`}>
                      <Zap size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Flashlight Control</span>
                      <span className="text-[9px] text-[#94A3B8]">"Turn on/off flashlight"</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsFlashlightOn(!isFlashlightOn);
                      speakSimulate(!isFlashlightOn ? "Flashlight turned on" : "Flashlight turned off");
                    }}
                    className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer ${isFlashlightOn ? 'bg-[#3B82F6]' : 'bg-white/10'}`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isFlashlightOn ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>

                {/* Connectivity simulation */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-white">
                      <Wifi size={14} className={isWifiOn ? 'text-[#3B82F6]' : 'text-[#94A3B8]'} />
                      Wi-Fi
                    </span>
                    <input 
                      type="checkbox" 
                      checked={isWifiOn} 
                      onChange={() => {
                        setIsWifiOn(!isWifiOn);
                        speakSimulate(!isWifiOn ? "Wi-Fi turned on" : "Wi-Fi turned off");
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-white">
                      <Bluetooth size={14} className={isBluetoothOn ? 'text-[#3B82F6]' : 'text-[#94A3B8]'} />
                      Bluetooth
                    </span>
                    <input 
                      type="checkbox" 
                      checked={isBluetoothOn} 
                      onChange={() => {
                        setIsBluetoothOn(!isBluetoothOn);
                        speakSimulate(!isBluetoothOn ? "Bluetooth enabled" : "Bluetooth disabled");
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                {/* Other toggles */}
                <div className="bg-[#0F172A] border border-white/5 rounded-2xl p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#94A3B8]">DND (Do Not Disturb)</span>
                    <button 
                      onClick={() => {
                        setIsDndOn(!isDndOn);
                        speakSimulate(!isDndOn ? "DND enabled, call silence active." : "DND disabled");
                      }}
                      className={`text-[10px] font-mono px-2 py-1 rounded border transition-all ${isDndOn ? 'bg-purple-500/20 border-purple-500 text-purple-300' : 'bg-black/50 border-white/10 text-[#94A3B8]'}`}
                    >
                      {isDndOn ? "ON" : "OFF"}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeScreen === 'presets' && (
              <motion.div 
                key="presets"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-4 flex-1 flex flex-col justify-between"
              >
                <div className="border-b border-white/5 pb-2">
                  <span className="text-xs font-bold text-white block">Smart Reminder & Timer System</span>
                  <p className="text-[10px] text-[#94A3B8]">Quick presets and loud clock alarm loops</p>
                </div>

                {/* Custom input or presets selection */}
                <div className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="text-[10px] font-mono text-[#94A3B8] block">TAP QUICK PRESETS REMINDERS</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 5, 10, 30].map(m => (
                      <button
                        key={m}
                        onClick={() => setTimerPreset(m)}
                        className="py-2.5 rounded-xl bg-black border border-white/10 text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all text-xs font-bold font-mono cursor-pointer"
                      >
                        {m}m
                      </button>
                    ))}
                  </div>

                  {/* Manual setting */}
                  <div className="pt-2">
                    <span className="text-[9px] font-mono text-[#94A3B8] block mb-1">SET CUSTOM SECONDS FOR DEMO</span>
                    <div className="flex gap-2">
                      <input 
                        type="number" 
                        placeholder="Seconds (e.g. 5)" 
                        value={timerInput}
                        onChange={(e) => setTimerInput(e.target.value)}
                        className="flex-1 bg-black border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white"
                      />
                      <button
                        onClick={() => {
                          const s = parseInt(timerInput);
                          if (s > 0) {
                            setTimerDuration(s);
                            speakSimulate(`${s} seconds ka custom alarm timer set kar diya hai.`);
                          }
                        }}
                        className="bg-[#3B82F6] text-black px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-opacity-95 transition-all cursor-pointer"
                      >
                        Set
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dynamic Timer Countdown View */}
                <div className="bg-[#050816] rounded-xl border border-white/5 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-cyan-400" />
                    <span className="text-xs text-white font-mono">
                      {timerDuration !== null ? `Timer Active: ${timerDuration}s` : 'No active timer'}
                    </span>
                  </div>
                  {timerDuration !== null && (
                    <button
                      onClick={() => {
                        setTimerDuration(null);
                        speakSimulate("Timer cancelled.");
                      }}
                      className="text-[10px] bg-red-500/10 border border-red-500/30 text-red-400 px-2 py-0.5 rounded cursor-pointer"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Voice Response Output Bar */}
          <div className="mt-4 p-3 bg-[#0F172A]/90 border border-[#3B82F6]/30 rounded-2xl flex items-start gap-2.5 shadow-[0_0_15px_rgba(59,130,246,0.1)] shrink-0 min-h-[50px]">
            <Volume2 size={16} className="text-cyan-400 shrink-0 mt-0.5 animate-pulse" />
            <p className="text-xs text-white leading-relaxed font-mono font-medium">
              {commandResponse}
            </p>
          </div>

        </div>

        {/* Flashing screen alert when Alarm rings */}
        <AnimatePresence>
          {flashingAlert && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-red-600/90 z-40 p-6 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-red-600 animate-ping">
                <ShieldAlert size={32} />
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wider animate-pulse">⏰ TIMER COMPLETE ALARM! 🚨</h4>
              <p className="text-white text-xs leading-relaxed max-w-[250px]">
                Jarvis is ringing a loud alarm and vibrating your mobile device right now!
              </p>
              <button
                onClick={() => {
                  setFlashingAlert(false);
                  speakSimulate("Alarm stopped, boss.");
                }}
                className="bg-white text-black font-black px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer"
              >
                STOP ALARM
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Mobile Bottom Bar navigation (SERVICES ACTIVATED!) */}
        <div className="h-16 bg-black border-t border-white/5 flex items-center justify-around shrink-0 relative z-20">
          <button 
            onClick={() => {
              setActiveScreen('system');
              speakSimulate("Navigated to JARVIS System Dashboard.");
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeScreen === 'system' ? 'text-[#3B82F6]' : 'text-[#94A3B8] hover:text-white'}`}
          >
            <Activity size={16} />
            <span className="text-[9px] font-mono">HOME</span>
          </button>
          <button 
            onClick={() => {
              setActiveScreen('presets');
              speakSimulate("Alarm and Reminder timers presets panel.");
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeScreen === 'presets' ? 'text-[#3B82F6]' : 'text-[#94A3B8] hover:text-white'}`}
          >
            <Clock size={16} />
            <span className="text-[9px] font-mono">TIMER</span>
          </button>
          <button 
            onClick={() => {
              setActiveScreen('whatsapp');
              speakSimulate("WhatsApp smart automation system dashboard loaded.");
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeScreen === 'whatsapp' ? 'text-[#3B82F6]' : 'text-[#94A3B8] hover:text-white'}`}
          >
            <Send size={16} />
            <span className="text-[9px] font-mono">WHATSAPP</span>
          </button>
          <button 
            onClick={() => {
              setActiveScreen('controls');
              speakSimulate("Hardware utilities system controls available.");
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeScreen === 'controls' ? 'text-[#3B82F6]' : 'text-[#94A3B8] hover:text-white'}`}
          >
            <Layers size={16} />
            <span className="text-[9px] font-mono">SERVICES</span>
          </button>
        </div>

      </div>

      {/* Simulator Control & Information Interactive Manual Bar */}
      <div className="flex-1 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 flex flex-col justify-between overflow-y-auto">
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">Interactive Live Control Panel</span>
            <span className="text-[10px] bg-[#3B82F6]/10 text-[#3B82F6] px-2 py-0.5 rounded-full border border-[#3B82F6]/30 font-mono">Simulator V2</span>
          </div>
          
          <h3 className="text-xl font-bold text-white font-display mb-2">Simulate JARVIS OS Features</h3>
          <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
            Aap remote device controls use nahi kar sakte kyuki browser sandbox me hai, par yahan click karke real-time voice and animation capabilities test kar sakte hain.
          </p>

          {/* Quick Voice Prompt Buttons */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider block">Interactive Commands Checklist</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button 
                onClick={() => handleCommand("Send a whatsapp to Rahul Naqvi")}
                className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-green-500/50 hover:bg-black/60 text-left transition-all group flex items-start gap-2.5 cursor-pointer text-xs text-[#94A3B8] hover:text-white"
              >
                <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-105 transition-transform">
                  <Send size={12} />
                </div>
                <div>
                  <span className="font-bold block">"Send WhatsApp to Rahul"</span>
                  <span className="text-[10px] text-[#94A3B8] block">Smart name match automation</span>
                </div>
              </button>

              <button 
                onClick={() => handleCommand("Activate Screen Guard security mode")}
                className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-yellow-500/50 hover:bg-black/60 text-left transition-all group flex items-start gap-2.5 cursor-pointer text-xs text-[#94A3B8] hover:text-white"
              >
                <div className="w-6 h-6 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 group-hover:scale-105 transition-transform">
                  <ShieldAlert size={12} />
                </div>
                <div>
                  <span className="font-bold block">"Screen Guard Mode"</span>
                  <span className="text-[10px] text-[#94A3B8] block">Anti-theft touch detection</span>
                </div>
              </button>

              <button 
                onClick={() => handleCommand("Turn on the flashlight")}
                className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-blue-500/50 hover:bg-black/60 text-left transition-all group flex items-start gap-2.5 cursor-pointer text-xs text-[#94A3B8] hover:text-white"
              >
                <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Zap size={12} />
                </div>
                <div>
                  <span className="font-bold block">"Flashlight toggle"</span>
                  <span className="text-[10px] text-[#94A3B8] block">Hardware trigger utility</span>
                </div>
              </button>

              <button 
                onClick={() => {
                  setActiveScreen('presets');
                  speakSimulate("Opened Smart Reminder & Alarm preset utility.");
                }}
                className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/50 hover:bg-black/60 text-left transition-all group flex items-start gap-2.5 cursor-pointer text-xs text-[#94A3B8] hover:text-white"
              >
                <div className="w-6 h-6 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Clock size={12} />
                </div>
                <div>
                  <span className="font-bold block">"Alarm & Presets Timer"</span>
                  <span className="text-[10px] text-[#94A3B8] block">Quick alarm-style timers</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Info footer */}
        <div className="mt-6 pt-4 border-t border-white/5 bg-black/25 p-4 rounded-2xl flex items-start gap-3">
          <Activity size={18} className="text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-white block">Continuous Voice Recognition</span>
            <p className="text-[10px] text-[#94A3B8] leading-relaxed">
              Live app voice synthesizer fully implemented using native browser <code className="text-white">SpeechSynthesis</code>. Try toggling commands to hear Jarvis answer!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
