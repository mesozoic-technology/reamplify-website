import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/026f891de06f2b272124350ed2ffdb64feef8499.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="(RE) - Amplify Logo" 
              className="w-12 h-12 object-contain brightness-0 invert"
              style={{ filter: 'drop-shadow(0 0 15px rgba(94, 255, 211, 0.5))' }}
            />
            <span className="text-[#5EFFD3] text-lg" style={{ textShadow: '0 0 20px rgba(94, 255, 211, 0.4)' }}>
              (RE) - Amplify
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <span className="text-[#5EFFD3] text-lg" style={{ textShadow: '0 0 20px rgba(94, 255, 211, 0.4)' }}>
              Coming in 2026
            </span>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#5EFFD3] p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-[#5EFFD3]/20">
            <a 
              href="#services" 
              className="block text-[#5EFFD3]/80 hover:text-[#5EFFD3] transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Product
            </a>
            <a 
              href="#about" 
              className="block text-[#5EFFD3]/80 hover:text-[#5EFFD3] transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </a>
            <a 
              href="#contact" 
              className="block text-[#5EFFD3]/80 hover:text-[#5EFFD3] transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Legal
            </a>
            <button 
              onClick={() => {
                setIsOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full px-6 py-2 bg-[#5EFFD3] text-[#000000] rounded-lg hover:scale-105 transition-transform text-sm"
            >
              Launch App
            </button>
          </nav>
        )}
      </div>
    </nav>
  );
}