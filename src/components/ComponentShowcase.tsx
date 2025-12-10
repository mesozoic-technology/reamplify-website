import { Zap, ArrowRight, Check, Star, TrendingUp } from 'lucide-react';

export function ComponentShowcase() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-gray-900 mb-2">Buttons</h2>
        <p className="text-gray-600 mb-6">Primary and secondary button styles</p>
        
        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#4ECDC4] text-white px-6 py-3 rounded-lg hover:bg-[#3AB5AD] transition-colors">
              Primary Button
            </button>
            <button className="bg-[#2c3e50] text-white px-6 py-3 rounded-lg hover:bg-[#34495e] transition-colors">
              Secondary Button
            </button>
            <button className="border-2 border-[#4ECDC4] text-[#4ECDC4] px-6 py-3 rounded-lg hover:bg-[#4ECDC4] hover:text-white transition-colors">
              Outline Button
            </button>
            <button className="text-[#4ECDC4] px-6 py-3 rounded-lg hover:bg-[#4ECDC4] hover:bg-opacity-10 transition-colors">
              Text Button
            </button>
            <button className="bg-[#4ECDC4] text-white px-6 py-3 rounded-lg hover:bg-[#3AB5AD] transition-colors flex items-center gap-2">
              With Icon <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Cards</h2>
        <p className="text-gray-600 mb-6">Content card variations</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#4ECDC4] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[#4ECDC4]" />
            </div>
            <h3 className="text-[#2c3e50] mb-2">Feature Title</h3>
            <p className="text-gray-600 text-sm">Brief description of the feature or benefit that this card represents.</p>
          </div>

          <div className="bg-gradient-to-br from-[#4ECDC4] to-[#3AB5AD] rounded-xl p-6 text-white">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="mb-2">Highlighted Card</h3>
            <p className="text-white text-opacity-90 text-sm">Premium or featured content with gradient background.</p>
          </div>

          <div className="bg-[#2c3e50] rounded-xl p-6 text-white">
            <div className="w-12 h-12 bg-[#4ECDC4] bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-[#4ECDC4]" />
            </div>
            <h3 className="mb-2">Dark Card</h3>
            <p className="text-gray-300 text-sm">Alternative style for variety and emphasis in layouts.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Form Elements</h2>
        <p className="text-gray-600 mb-6">Input fields and form components</p>
        
        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <div className="max-w-md space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Message</label>
              <textarea
                placeholder="Enter your message..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent resize-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-[#4ECDC4] border-gray-300 rounded focus:ring-[#4ECDC4]"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the terms and conditions
              </label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Badges & Tags</h2>
        <p className="text-gray-600 mb-6">Status indicators and labels</p>
        
        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-[#4ECDC4] text-white rounded-full text-sm">
              Primary
            </span>
            <span className="px-3 py-1 bg-[#4ECDC4] bg-opacity-10 text-[#4ECDC4] rounded-full text-sm">
              Active
            </span>
            <span className="px-3 py-1 bg-[#1abc9c] text-white rounded-full text-sm flex items-center gap-1">
              <Check className="w-3 h-3" /> Success
            </span>
            <span className="px-3 py-1 bg-[#f1c40f] text-white rounded-full text-sm">
              Warning
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Neutral
            </span>
            <span className="px-3 py-1 border border-[#4ECDC4] text-[#4ECDC4] rounded-full text-sm">
              Outlined
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Navigation</h2>
        <p className="text-gray-600 mb-6">Menu and navigation components</p>
        
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <nav className="flex border-b border-gray-200">
            <a href="#" className="px-6 py-4 text-[#4ECDC4] border-b-2 border-[#4ECDC4]">
              Dashboard
            </a>
            <a href="#" className="px-6 py-4 text-gray-600 hover:text-[#4ECDC4] transition-colors">
              Projects
            </a>
            <a href="#" className="px-6 py-4 text-gray-600 hover:text-[#4ECDC4] transition-colors">
              Team
            </a>
            <a href="#" className="px-6 py-4 text-gray-600 hover:text-[#4ECDC4] transition-colors">
              Settings
            </a>
          </nav>
          <div className="p-8">
            <p className="text-gray-600">Tab navigation with brand color accent</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Hero Section Example</h2>
        <p className="text-gray-600 mb-6">Full component composition</p>
        
        <div className="bg-gradient-to-br from-[#2c3e50] to-[#34495e] rounded-xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4ECDC4] bg-opacity-20 rounded-full text-[#4ECDC4] text-sm mb-6">
              <Zap className="w-4 h-4" />
              Amplify Everything
            </div>
            <h1 className="text-white mb-4">Transform Your Digital Experience</h1>
            <p className="text-gray-300 text-lg mb-8">
              Powerful tools and energized workflows designed to amplify your results and supercharge your productivity.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-[#4ECDC4] text-white px-8 py-3 rounded-lg hover:bg-[#3AB5AD] transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#2c3e50] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
