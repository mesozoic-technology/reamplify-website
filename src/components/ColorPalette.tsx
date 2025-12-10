import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const colors = {
  primary: [
    { name: 'Amplify Mint', hex: '#4ECDC4', usage: 'Primary brand color, CTAs, accents' },
    { name: 'Amplify Mint Dark', hex: '#3AB5AD', usage: 'Hover states, darker accents' },
    { name: 'Amplify Mint Light', hex: '#7EDDD6', usage: 'Backgrounds, subtle highlights' },
  ],
  neutral: [
    { name: 'Deep Navy', hex: '#2c3e50', usage: 'Logo background, dark surfaces' },
    { name: 'Charcoal', hex: '#34495e', usage: 'Text, headers' },
    { name: 'Slate', hex: '#7f8c8d', usage: 'Secondary text, borders' },
    { name: 'Light Gray', hex: '#ecf0f1', usage: 'Backgrounds, dividers' },
    { name: 'Off White', hex: '#f8f9fa', usage: 'Page backgrounds' },
  ],
  accent: [
    { name: 'Energy Teal', hex: '#1abc9c', usage: 'Success states, positive actions' },
    { name: 'Lightning Yellow', hex: '#f1c40f', usage: 'Warnings, highlights' },
    { name: 'Electric Blue', hex: '#3498db', usage: 'Links, informational' },
  ],
};

function ColorCard({ color }: { color: { name: string; hex: string; usage: string } }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="h-32" style={{ backgroundColor: color.hex }} />
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-gray-900">{color.name}</p>
            <p className="text-gray-600 text-sm">{color.hex}</p>
          </div>
          <button
            onClick={copyToClipboard}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>
        <p className="text-sm text-gray-500">{color.usage}</p>
      </div>
    </div>
  );
}

export function ColorPalette() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-gray-900 mb-2">Primary Colors</h2>
        <p className="text-gray-600 mb-6">Core brand colors derived from the logo</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {colors.primary.map((color) => (
            <ColorCard key={color.hex} color={color} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Neutral Colors</h2>
        <p className="text-gray-600 mb-6">Supporting colors for UI elements and text</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {colors.neutral.map((color) => (
            <ColorCard key={color.hex} color={color} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Accent Colors</h2>
        <p className="text-gray-600 mb-6">Additional colors for states and highlights</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {colors.accent.map((color) => (
            <ColorCard key={color.hex} color={color} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Color Combinations</h2>
        <p className="text-gray-600 mb-6">Recommended pairings for different contexts</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#2c3e50] p-8 rounded-xl">
            <h3 className="text-[#4ECDC4] mb-2">Hero / Primary</h3>
            <p className="text-gray-300">Navy background with Amplify Mint text creates high energy and modern feel</p>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-xl">
            <h3 className="text-[#2c3e50] mb-2">Clean / Professional</h3>
            <p className="text-gray-600">White background with <span className="text-[#4ECDC4]">Mint accents</span> for a professional look</p>
          </div>

          <div className="bg-gradient-to-br from-[#4ECDC4] to-[#3AB5AD] p-8 rounded-xl">
            <h3 className="text-white mb-2">Bold / Energetic</h3>
            <p className="text-white text-opacity-90">Full mint gradient for maximum impact</p>
          </div>

          <div className="bg-[#f8f9fa] border border-gray-200 p-8 rounded-xl">
            <h3 className="text-[#34495e] mb-2">Subtle / Light</h3>
            <p className="text-gray-600">Off-white with charcoal text and <span className="text-[#4ECDC4]">mint highlights</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
