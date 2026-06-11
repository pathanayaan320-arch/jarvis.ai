export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050816] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <span className="font-black text-xs text-white">J</span>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase text-white">
              Jarvis
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#features" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">Features</a>
            <a href="#demo" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">Demo</a>
            <a href="#pricing" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">FAQ</a>
            <a href="#" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">Terms</a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-[#94A3B8] gap-4">
          <p>© 2026 JARVIS. All Rights Reserved.</p>
          <p>Designed for Android</p>
        </div>
      </div>
    </footer>
  );
}
