import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] relative overflow-hidden">
      {/* Circuit Board Pattern Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated circuit pattern - horizontal movement */}
        <svg className="absolute inset-0 w-full h-full opacity-25">
          <defs>
            <pattern id="circuit-horizontal" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Horizontal lines that will move left-right */}
              <line x1="0" y1="50" x2="80" y2="50" stroke="rgba(94, 255, 211, 0.4)" strokeWidth="1.5"/>
              <line x1="120" y1="50" x2="200" y2="50" stroke="rgba(94, 255, 211, 0.4)" strokeWidth="1.5"/>
              <line x1="0" y1="150" x2="60" y2="150" stroke="rgba(94, 255, 211, 0.4)" strokeWidth="1.5"/>
              <line x1="140" y1="150" x2="200" y2="150" stroke="rgba(94, 255, 211, 0.4)" strokeWidth="1.5"/>
            </pattern>
            
            <pattern id="circuit-vertical" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Vertical lines that will move top-bottom */}
              <line x1="50" y1="0" x2="50" y2="80" stroke="rgba(94, 255, 211, 0.4)" strokeWidth="1.5"/>
              <line x1="50" y1="120" x2="50" y2="200" stroke="rgba(94, 255, 211, 0.4)" strokeWidth="1.5"/>
              <line x1="150" y1="0" x2="150" y2="60" stroke="rgba(94, 255, 211, 0.4)" strokeWidth="1.5"/>
              <line x1="150" y1="140" x2="150" y2="200" stroke="rgba(94, 255, 211, 0.4)" strokeWidth="1.5"/>
            </pattern>
            
            <pattern id="circuit-nodes" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Connection nodes - stationary */}
              <circle cx="50" cy="50" r="4" fill="rgba(94, 255, 211, 0.6)" filter="url(#glow)"/>
              <circle cx="150" cy="150" r="4" fill="rgba(94, 255, 211, 0.6)" filter="url(#glow)"/>
              <circle cx="100" cy="100" r="3" fill="rgba(94, 255, 211, 0.5)"/>
              
              {/* Small accent dots */}
              <circle cx="80" cy="50" r="2" fill="rgba(94, 255, 211, 0.4)"/>
              <circle cx="120" cy="50" r="2" fill="rgba(94, 255, 211, 0.4)"/>
              <circle cx="60" cy="150" r="2" fill="rgba(94, 255, 211, 0.4)"/>
              <circle cx="140" cy="150" r="2" fill="rgba(94, 255, 211, 0.4)"/>
            </pattern>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Layer horizontal lines with left-right animation */}
          <rect width="100%" height="100%" fill="url(#circuit-horizontal)" className="animate-circuit-horizontal"/>
          
          {/* Layer vertical lines with top-bottom animation */}
          <rect width="100%" height="100%" fill="url(#circuit-vertical)" className="animate-circuit-vertical"/>
          
          {/* Layer stationary nodes on top */}
          <rect width="100%" height="100%" fill="url(#circuit-nodes)"/>
        </svg>

        {/* Animated glow paths */}
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[2px] bg-gradient-to-r from-transparent via-[#5EFFD3] to-transparent opacity-60 animate-pulse-flow-1"/>
        <div className="absolute top-[60%] right-[15%] w-[250px] h-[2px] bg-gradient-to-r from-transparent via-[#5EFFD3] to-transparent opacity-50 animate-pulse-flow-2"/>
        <div className="absolute bottom-[30%] left-[30%] w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#5EFFD3] to-transparent opacity-40 animate-pulse-flow-3"/>
        
        {/* Subtle gradient overlay for depth */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            background: 'radial-gradient(circle at 30% 20%, rgba(94, 255, 211, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(61, 79, 92, 0.15) 0%, transparent 50%)'
          }}
        />
        
        {/* Dark vignette */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: 'radial-gradient(circle at center, transparent 20%, rgba(10, 14, 26, 0.9) 100%)'
          }}
        />
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Contact />
      </div>
    </div>
  );
}
