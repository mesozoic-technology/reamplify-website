export function Typography() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-gray-900 mb-2">Typography Scale</h2>
        <p className="text-gray-600 mb-6">Consistent type sizes across the brand</p>
        
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
          <div className="p-8">
            <h1 className="text-[#2c3e50]">Heading 1 - Display</h1>
            <p className="text-sm text-gray-600 mt-2">Use for hero headings and major page titles</p>
          </div>
          
          <div className="p-8">
            <h2 className="text-[#2c3e50]">Heading 2 - Section Title</h2>
            <p className="text-sm text-gray-600 mt-2">Use for section headings and major divisions</p>
          </div>
          
          <div className="p-8">
            <h3 className="text-[#2c3e50]">Heading 3 - Subsection</h3>
            <p className="text-sm text-gray-600 mt-2">Use for subsections and card titles</p>
          </div>
          
          <div className="p-8">
            <h4 className="text-[#2c3e50]">Heading 4 - Component Title</h4>
            <p className="text-sm text-gray-600 mt-2">Use for component headers and smaller titles</p>
          </div>
          
          <div className="p-8">
            <p className="text-[#34495e]">Body - Regular text for paragraphs and general content. This is the most common text style used throughout the interface. It should be comfortable to read and maintain good contrast.</p>
            <p className="text-sm text-gray-600 mt-2">Use for body copy and descriptions</p>
          </div>
          
          <div className="p-8">
            <p className="text-sm text-[#7f8c8d]">Small - Secondary information and captions. Perfect for metadata, timestamps, and supporting details that complement the main content.</p>
            <p className="text-sm text-gray-600 mt-2">Use for captions, labels, and helper text</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Typography Styles</h2>
        <p className="text-gray-600 mb-6">Text treatments using brand colors</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Primary Heading</p>
            <h2 className="text-[#4ECDC4]">Amplify Your Impact</h2>
          </div>

          <div className="bg-[#2c3e50] p-8 rounded-xl">
            <p className="text-sm text-gray-400 mb-4">On Dark Background</p>
            <h2 className="text-[#4ECDC4]">Amplify Your Impact</h2>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Body with Accent</p>
            <p className="text-[#34495e]">Transform your vision with <span className="text-[#4ECDC4]">amplified results</span> and energized performance.</p>
          </div>

          <div className="bg-gradient-to-br from-[#4ECDC4] to-[#3AB5AD] p-8 rounded-xl">
            <p className="text-sm text-white text-opacity-70 mb-4">White on Gradient</p>
            <h2 className="text-white">Energize Everything</h2>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Text Hierarchy Examples</h2>
        <p className="text-gray-600 mb-6">How to combine type styles effectively</p>
        
        <div className="bg-white p-12 rounded-xl border border-gray-200">
          <div className="max-w-2xl">
            <p className="text-sm text-[#4ECDC4] tracking-wide uppercase mb-4">Product Launch</p>
            <h1 className="text-[#2c3e50] mb-4">Amplify Your Digital Presence</h1>
            <p className="text-[#7f8c8d] mb-6">Transform your brand with powerful tools designed to energize your workflow and amplify results across all channels.</p>
            <button className="bg-[#4ECDC4] text-white px-8 py-3 rounded-lg hover:bg-[#3AB5AD] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Text Guidelines</h2>
        <p className="text-gray-600 mb-6">Best practices for typography</p>
        
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#4ECDC4] rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-[#34495e]">Use Amplify Mint (#4ECDC4) for primary headings and calls to action</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#4ECDC4] rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-[#34495e]">Use Deep Navy (#2c3e50) or Charcoal (#34495e) for body text</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#4ECDC4] rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-[#34495e]">Maintain sufficient contrast ratios (4.5:1 minimum for body text)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#4ECDC4] rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-[#34495e]">Use Slate (#7f8c8d) for secondary information only</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#4ECDC4] rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-[#34495e]">Keep line lengths between 50-75 characters for optimal readability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
