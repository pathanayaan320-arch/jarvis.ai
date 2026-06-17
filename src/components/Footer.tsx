import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050816] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <Link to="/" className="flex-shrink-0 cursor-pointer flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <span className="font-black text-xs text-white">J</span>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase text-white">
              Jarvis
            </span>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/#features" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">Features</Link>
            <Link to="/#demo" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">Demo</Link>
            <Link to="/#pricing" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">Pricing</Link>
            <Link to="/#faq" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">FAQ</Link>
            <a href="https://wa.me/918400815008" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">Contact</a>
            <Link to="/privacy-policy" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">Terms</Link>
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
