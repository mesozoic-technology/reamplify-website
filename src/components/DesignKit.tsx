import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { LogoVariations } from './LogoVariations';
import { ColorPalette } from './ColorPalette';
import { Typography } from './Typography';
import { ComponentShowcase } from './ComponentShowcase';

const tabs = ['Logo', 'Colors', 'Typography', 'Components'];

export function DesignKit() {
  const [activeTab, setActiveTab] = useState('Logo');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#2c3e50] rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-10 h-10">
                <path
                  d="M60 10 L40 50 L50 50 L35 90 L65 45 L55 45 Z"
                  fill="#4ECDC4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-[#4ECDC4]">(RE) - AMPLIFY</h1>
              <p className="text-gray-600">Brand Design Kit</p>
            </div>
          </div>

          {/* Tabs */}
          <nav className="flex gap-1 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 transition-colors relative ${
                  activeTab === tab
                    ? 'text-[#4ECDC4]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4ECDC4]" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'Logo' && <LogoVariations />}
        {activeTab === 'Colors' && <ColorPalette />}
        {activeTab === 'Typography' && <Typography />}
        {activeTab === 'Components' && <ComponentShowcase />}
      </main>
    </div>
  );
}
