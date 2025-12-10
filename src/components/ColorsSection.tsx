import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const colorPalette = {
  primary: [
    { name: 'Electric Mint', hex: '#5EFFD3', rgb: 'rgb(94, 255, 211)', usage: 'Primary brand color, lightning bolt, accents, CTAs' },
    { name: 'Mint Glow', hex: '#7DFFDD', rgb: 'rgb(125, 255, 221)', usage: 'Hover states, highlights' },
    { name: 'Deep Mint', hex: '#3DE6BA', rgb: 'rgb(61, 230, 186)', usage: 'Active states, pressed buttons' },
  ],
  neutral: [
    { name: 'Slate Navy', hex: '#3d4f5c', rgb: 'rgb(61, 79, 92)', usage: 'Logo background, dark surfaces, headers' },
    { name: 'Charcoal Slate', hex: '#2a3742', rgb: 'rgb(42, 55, 66)', usage: 'Darker backgrounds, footers' },
    { name: 'Storm Gray', hex: '#5a6a76', rgb: 'rgb(90, 106, 118)', usage: 'Secondary text, borders' },
    { name: 'Mist Gray', hex: '#e8ebed', rgb: 'rgb(232, 235, 237)', usage: 'Light backgrounds, dividers' },
    { name: 'Cloud White', hex: '#f5f7f8', rgb: 'rgb(245, 247, 248)', usage: 'Page backgrounds, cards' },
  ],
  accent: [
    { name: 'Success Teal', hex: '#00d9a3', rgb: 'rgb(0, 217, 163)', usage: 'Success states, confirmations' },
    { name: 'Warning Amber', hex: '#ffb84d', rgb: 'rgb(255, 184, 77)', usage: 'Warnings, attention' },
    { name: 'Info Blue', hex: '#4da6ff', rgb: 'rgb(77, 166, 255)', usage: 'Information, links' },
    { name: 'Error Coral', hex: '#ff6b6b', rgb: 'rgb(255, 107, 107)', usage: 'Errors, destructive actions' },
  ],
};

function ColorCard({ color }: { color: { name: string; hex: string; rgb: string; usage: string } }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="h-40 relative" style={{ backgroundColor: color.hex }}>
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>
      <div className="p-4">
        <p className="text-gray-900 mb-1">{color.name}</p>
        <p className="text-sm text-gray-600 mb-1">{color.hex}</p>
        <p className="text-xs text-gray-500 mb-3">{color.rgb}</p>
        <p className="text-sm text-gray-600">{color.usage}</p>
      </div>
    </div>
  );
}

export function ColorsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-gray-900 mb-2">Primary Colors</h2>
        <p className="text-gray-600 mb-6">The electric mint extracted from the lightning bolt</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {colorPalette.primary.map((color) => (
            <ColorCard key={color.hex} color={color} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Neutral Colors</h2>
        <p className="text-gray-600 mb-6">Slate and gray tones from the background</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {colorPalette.neutral.map((color) => (
            <ColorCard key={color.hex} color={color} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Accent Colors</h2>
        <p className="text-gray-600 mb-6">Supporting colors for UI states</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {colorPalette.accent.map((color) => (
            <ColorCard key={color.hex} color={color} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Color Combinations</h2>
        <p className="text-gray-600 mb-6">Recommended pairings</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#3d4f5c] p-10 rounded-xl">
            <h3 className="text-[#5EFFD3] mb-3">Primary Combo</h3>
            <p className="text-gray-300">Slate Navy (#3d4f5c) with Electric Mint (#5EFFD3) creates high-energy, modern aesthetic</p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-10 rounded-xl">
            <h3 className="text-[#3d4f5c] mb-3">Clean & Professional</h3>
            <p className="text-gray-600">White background with <span className="text-[#5EFFD3]">mint accents</span> for clarity</p>
          </div>

          <div className="bg-gradient-to-br from-[#5EFFD3] to-[#3DE6BA] p-10 rounded-xl">
            <h3 className="text-white mb-3">Bold & Energetic</h3>
            <p className="text-white text-opacity-90">Mint gradient for maximum visual impact</p>
          </div>

          <div className="bg-[#2a3742] p-10 rounded-xl">
            <h3 className="text-[#5EFFD3] mb-3">Dark Mode</h3>
            <p className="text-gray-300">Charcoal Slate with mint creates perfect dark theme</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Accessibility</h2>
        <p className="text-gray-600 mb-6">Contrast ratios and readability</p>
        
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between p-4 bg-[#3d4f5c] rounded-lg mb-2">
                <span className="text-[#5EFFD3]">Electric Mint on Slate Navy</span>
                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">AAA</span>
              </div>
              <p className="text-sm text-gray-600">Excellent contrast for all text sizes</p>
            </div>

            <div>
              <div className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg mb-2">
                <span className="text-[#3d4f5c]">Slate Navy on White</span>
                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">AAA</span>
              </div>
              <p className="text-sm text-gray-600">Perfect for body text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
