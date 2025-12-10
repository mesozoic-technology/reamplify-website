import { useState } from 'react';
import { LogoSection } from './LogoSection';
import { ColorsSection } from './ColorsSection';
import { TypographySection } from './TypographySection';
import { ComponentsSection } from './ComponentsSection';
import logoImage from 'figma:asset/026f891de06f2b272124350ed2ffdb64feef8499.png';

const tabs = ['Logo', 'Colors', 'Typography', 'Components'];

export function BrandKit() {
  const [activeTab, setActiveTab] = useState('Logo');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-[#3d4f5c] rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
              <img src={logoImage} alt="Lightning Bolt Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-[#5EFFD3] mb-1">Brand Design Kit</h1>
              <p className="text-gray-600">Lightning Bolt Brand Identity</p>
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
                    ? 'text-[#5EFFD3]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5EFFD3]" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'Logo' && <LogoSection />}
        {activeTab === 'Colors' && <ColorsSection />}
        {activeTab === 'Typography' && <TypographySection />}
        {activeTab === 'Components' && <ComponentsSection />}
      </main>
    </div>
  );
}
