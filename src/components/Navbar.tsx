import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Features', 'Demo', 'Pricing', 'FAQ', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050816]/70 backdrop-blur-md border-b border-white/10' : 'bg-[#050816]/50 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <span className="font-black text-xs text-white">J</span>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase text-white">
              Jarvis
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-[#94A3B8]">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button 
              onClick={() => window.open('https://wa.me/918400815008?text=Hey%2C%20I%20want%20JARVIS%20AI%20Voice%20Assistant%20for%20%E2%82%B9399%20INR.', '_blank')}
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-[#3B82F6] hover:text-white transition-all cursor-pointer"
            >
              Get JARVIS For ₹399
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050816]/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 text-[#94A3B8]">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/5"
                >
                  {link}
                </a>
              ))}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.open('https://wa.me/918400815008?text=Hey%2C%20I%20want%20JARVIS%20AI%20Voice%20Assistant%20for%20%E2%82%B9399%20INR.', '_blank');
                }}
                className="w-full mt-6 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-[#3B82F6] hover:text-white transition-all cursor-pointer"
              >
                Get JARVIS For ₹399
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
