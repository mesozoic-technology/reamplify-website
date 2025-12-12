import { ArrowRight } from 'lucide-react';
import logoImage from 'figma:asset/026f891de06f2b272124350ed2ffdb64feef8499.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-20">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <img 
            src={logoImage} 
            alt="(RE) - Amplify Logo" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain brightness-0 invert"
            style={{ filter: 'drop-shadow(0 0 30px rgba(94, 255, 211, 0.6))' }}
          />
        </div>
        
        {/* Responsive heading: small on mobile, large on desktop */}
        <h1 className="text-[#5EFFD3] mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl brightness-125" style={{ 
          textShadow: '0 0 50px rgba(94, 255, 211, 1), 0 0 100px rgba(94, 255, 211, 0.6)' 
        }}>
          Use Your Crypto To Earn Like An Insurer
        </h1>
        
        {/* Responsive subheading */}
        <p className="text-[#5EFFD3] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-2xl mx-auto mb-12 brightness-110" style={{
          textShadow: '0 0 30px rgba(94, 255, 211, 0.5)'
        }}>
          Deposit crypto assets and 5-13% extra via secure reinsurance-backed yield
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-[#5EFFD3] text-[#3d4f5c] rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
          >
            Join Mailing List
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#5EFFD3] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#5EFFD3] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}