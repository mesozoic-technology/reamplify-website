export function TypographySection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-gray-900 mb-2">Typography Scale</h2>
        <p className="text-gray-600 mb-6">Consistent hierarchy across the brand</p>
        
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
          <div className="p-8">
            <h1 className="text-[#3d4f5c] mb-2">Display Heading</h1>
            <p className="text-sm text-gray-600">Use for hero sections and major page titles</p>
          </div>
          
          <div className="p-8">
            <h2 className="text-[#3d4f5c] mb-2">Section Heading</h2>
            <p className="text-sm text-gray-600">Use for main sections and content divisions</p>
          </div>
          
          <div className="p-8">
            <h3 className="text-[#3d4f5c] mb-2">Subsection Heading</h3>
            <p className="text-sm text-gray-600">Use for subsections and card titles</p>
          </div>
          
          <div className="p-8">
            <h4 className="text-[#3d4f5c] mb-2">Component Heading</h4>
            <p className="text-sm text-gray-600">Use for smaller components and labels</p>
          </div>
          
          <div className="p-8">
            <p className="text-[#3d4f5c] mb-2">Body text is designed for comfortable reading across all devices. This is the most common text style used throughout the interface, optimized for readability and accessibility.</p>
            <p className="text-sm text-gray-600">Use for paragraphs and general content</p>
          </div>
          
          <div className="p-8">
            <p className="text-sm text-[#5a6a76] mb-2">Small text for secondary information, captions, and metadata. Perfect for timestamps, helper text, and supporting details.</p>
            <p className="text-sm text-gray-600">Use for captions and fine print</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Brand Typography Styles</h2>
        <p className="text-gray-600 mb-6">Applying brand colors to text</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Mint Accent Heading</p>
            <h2 className="text-[#5EFFD3]">Powered by Lightning</h2>
          </div>

          <div className="bg-[#3d4f5c] p-8 rounded-xl">
            <p className="text-sm text-gray-400 mb-4">Mint on Dark</p>
            <h2 className="text-[#5EFFD3]">Electrify Your Brand</h2>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Slate Navy Heading</p>
            <h2 className="text-[#3d4f5c]">Professional Impact</h2>
          </div>

          <div className="bg-gradient-to-br from-[#5EFFD3] to-[#3DE6BA] p-8 rounded-xl">
            <p className="text-sm text-white text-opacity-80 mb-4">White on Gradient</p>
            <h2 className="text-white">Dynamic Energy</h2>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Text with Accents</h2>
        <p className="text-gray-600 mb-6">Combining colors for emphasis</p>
        
        <div className="bg-white p-10 rounded-xl border border-gray-200">
          <div className="max-w-2xl">
            <p className="text-[#3d4f5c]">
              Transform your digital presence with <span className="text-[#5EFFD3]">lightning-fast performance</span> and 
              electrifying design that captures attention and <span className="text-[#5EFFD3]">amplifies results</span>.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Full Typography Example</h2>
        <p className="text-gray-600 mb-6">Complete hierarchy in context</p>
        
        <div className="bg-white p-12 rounded-xl border border-gray-200">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-[#5EFFD3] uppercase tracking-wider mb-4">New Release</p>
            <h1 className="text-[#3d4f5c] mb-6">Lightning-Fast Performance</h1>
            <p className="text-lg text-[#5a6a76] mb-8">
              Experience unprecedented speed and power with our latest platform update. 
              Built for modern teams who demand excellence.
            </p>
            <div className="flex gap-4 mb-12">
              <button className="bg-[#5EFFD3] text-[#3d4f5c] px-8 py-3 rounded-lg hover:bg-[#7DFFDD] transition-colors">
                Get Started
              </button>
              <button className="border-2 border-[#5EFFD3] text-[#5EFFD3] px-8 py-3 rounded-lg hover:bg-[#5EFFD3] hover:bg-opacity-10 transition-colors">
                Learn More
              </button>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-[#3d4f5c] mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="text-[#5a6a76]">⚡ Real-time collaboration and updates</li>
                <li className="text-[#5a6a76]">⚡ Advanced security and encryption</li>
                <li className="text-[#5a6a76]">⚡ Seamless integrations with your tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Typography Guidelines</h2>
        <p className="text-gray-600 mb-6">Best practices for text</p>
        
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#5EFFD3] rounded-full mt-2 flex-shrink-0" />
              <p className="text-[#3d4f5c]">Use Electric Mint (#5EFFD3) sparingly for accents and CTAs</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#5EFFD3] rounded-full mt-2 flex-shrink-0" />
              <p className="text-[#3d4f5c]">Slate Navy (#3d4f5c) is ideal for headings and important text</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#5EFFD3] rounded-full mt-2 flex-shrink-0" />
              <p className="text-[#3d4f5c]">Storm Gray (#5a6a76) works well for body text and paragraphs</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#5EFFD3] rounded-full mt-2 flex-shrink-0" />
              <p className="text-[#3d4f5c]">Always maintain minimum 4.5:1 contrast ratio for readability</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#5EFFD3] rounded-full mt-2 flex-shrink-0" />
              <p className="text-[#3d4f5c]">Limit line length to 60-80 characters for optimal reading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
