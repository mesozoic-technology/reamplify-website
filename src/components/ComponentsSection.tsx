import { Zap, ArrowRight, Check, Star, Sparkles, TrendingUp, Users } from 'lucide-react';

export function ComponentsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-gray-900 mb-2">Buttons</h2>
        <p className="text-gray-600 mb-6">Button styles and variations</p>
        
        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <div className="flex flex-wrap gap-4 items-start">
            <button className="bg-[#5EFFD3] text-[#3d4f5c] px-6 py-3 rounded-lg hover:bg-[#7DFFDD] transition-colors">
              Primary Button
            </button>
            <button className="bg-[#3d4f5c] text-white px-6 py-3 rounded-lg hover:bg-[#2a3742] transition-colors">
              Secondary Button
            </button>
            <button className="border-2 border-[#5EFFD3] text-[#5EFFD3] px-6 py-3 rounded-lg hover:bg-[#5EFFD3] hover:text-[#3d4f5c] transition-colors">
              Outline Button
            </button>
            <button className="text-[#5EFFD3] px-6 py-3 rounded-lg hover:bg-[#5EFFD3] hover:bg-opacity-10 transition-colors">
              Text Button
            </button>
            <button className="bg-[#5EFFD3] text-[#3d4f5c] px-6 py-3 rounded-lg hover:bg-[#7DFFDD] transition-colors flex items-center gap-2">
              With Icon <Zap className="w-4 h-4" />
            </button>
            <button className="bg-gradient-to-r from-[#5EFFD3] to-[#3DE6BA] text-[#3d4f5c] px-8 py-3 rounded-lg hover:shadow-lg transition-all">
              Gradient Button
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Cards</h2>
        <p className="text-gray-600 mb-6">Content containers and layouts</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-[#5EFFD3]">
            <div className="w-12 h-12 bg-[#5EFFD3] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[#5EFFD3]" />
            </div>
            <h3 className="text-[#3d4f5c] mb-2">Lightning Speed</h3>
            <p className="text-[#5a6a76] text-sm">Ultra-fast performance that powers your success</p>
          </div>

          <div className="bg-gradient-to-br from-[#5EFFD3] to-[#3DE6BA] rounded-xl p-6 text-[#3d4f5c] hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-white bg-opacity-30 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-[#3d4f5c]" />
            </div>
            <h3 className="mb-2">Premium Feature</h3>
            <p className="text-[#3d4f5c] text-opacity-90 text-sm">Highlighted with gradient background</p>
          </div>

          <div className="bg-[#3d4f5c] rounded-xl p-6 text-white hover:shadow-xl transition-all hover:bg-[#2a3742]">
            <div className="w-12 h-12 bg-[#5EFFD3] bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-[#5EFFD3]" />
            </div>
            <h3 className="mb-2">Dark Theme</h3>
            <p className="text-gray-300 text-sm">Alternative dark card style</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Form Elements</h2>
        <p className="text-gray-600 mb-6">Inputs and interactive elements</p>
        
        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <div className="max-w-lg space-y-5">
            <div>
              <label className="block text-sm text-[#3d4f5c] mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5EFFD3] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm text-[#3d4f5c] mb-2">Message</label>
              <textarea
                placeholder="Tell us what you think..."
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5EFFD3] focus:border-transparent resize-none transition-all"
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="newsletter"
                className="w-5 h-5 text-[#5EFFD3] border-gray-300 rounded focus:ring-[#5EFFD3]"
              />
              <label htmlFor="newsletter" className="text-sm text-[#3d4f5c]">
                Subscribe to newsletter
              </label>
            </div>
            <button className="bg-[#5EFFD3] text-[#3d4f5c] px-6 py-3 rounded-lg hover:bg-[#7DFFDD] transition-colors">
              Submit Form
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Badges & Tags</h2>
        <p className="text-gray-600 mb-6">Labels and status indicators</p>
        
        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 bg-[#5EFFD3] text-[#3d4f5c] rounded-full text-sm">
              Primary
            </span>
            <span className="px-4 py-1.5 bg-[#5EFFD3] bg-opacity-10 text-[#5EFFD3] rounded-full text-sm">
              Active
            </span>
            <span className="px-4 py-1.5 bg-[#00d9a3] text-white rounded-full text-sm flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Success
            </span>
            <span className="px-4 py-1.5 bg-[#ffb84d] text-white rounded-full text-sm">
              Warning
            </span>
            <span className="px-4 py-1.5 bg-[#4da6ff] text-white rounded-full text-sm">
              Info
            </span>
            <span className="px-4 py-1.5 bg-[#ff6b6b] text-white rounded-full text-sm">
              Error
            </span>
            <span className="px-4 py-1.5 bg-[#3d4f5c] text-white rounded-full text-sm">
              Default
            </span>
            <span className="px-4 py-1.5 border-2 border-[#5EFFD3] text-[#5EFFD3] rounded-full text-sm">
              Outlined
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Navigation</h2>
        <p className="text-gray-600 mb-6">Menu and navigation patterns</p>
        
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <nav className="flex border-b border-gray-200">
            <a href="#" className="px-6 py-4 text-[#5EFFD3] border-b-2 border-[#5EFFD3] transition-colors">
              Dashboard
            </a>
            <a href="#" className="px-6 py-4 text-[#5a6a76] hover:text-[#5EFFD3] hover:bg-gray-50 transition-colors">
              Analytics
            </a>
            <a href="#" className="px-6 py-4 text-[#5a6a76] hover:text-[#5EFFD3] hover:bg-gray-50 transition-colors">
              Reports
            </a>
            <a href="#" className="px-6 py-4 text-[#5a6a76] hover:text-[#5EFFD3] hover:bg-gray-50 transition-colors">
              Settings
            </a>
          </nav>
          <div className="p-8">
            <p className="text-[#5a6a76]">Tab navigation with brand color accent on active state</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Stats & Metrics</h2>
        <p className="text-gray-600 mb-6">Data display components</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#5a6a76]">Total Users</span>
              <Users className="w-5 h-5 text-[#5EFFD3]" />
            </div>
            <p className="text-3xl text-[#3d4f5c] mb-1">24,583</p>
            <p className="text-sm text-[#00d9a3]">↑ 12% from last month</p>
          </div>

          <div className="bg-gradient-to-br from-[#5EFFD3] to-[#3DE6BA] rounded-xl p-6 text-[#3d4f5c]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Growth Rate</span>
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-3xl mb-1">156%</p>
            <p className="text-sm text-[#3d4f5c] text-opacity-80">Year over year</p>
          </div>

          <div className="bg-[#3d4f5c] rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Active Now</span>
              <Zap className="w-5 h-5 text-[#5EFFD3]" />
            </div>
            <p className="text-3xl mb-1">1,429</p>
            <p className="text-sm text-[#5EFFD3]">Real-time activity</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Hero Section Example</h2>
        <p className="text-gray-600 mb-6">Complete component composition</p>
        
        <div className="bg-gradient-to-br from-[#3d4f5c] to-[#2a3742] rounded-2xl p-12 text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-20 w-32 h-64">
              <svg viewBox="0 0 200 400" className="w-full h-full text-[#5EFFD3]">
                <path d="M150 50 L100 200 L130 200 L80 350 L130 180 L100 180 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute bottom-10 left-20 w-24 h-48">
              <svg viewBox="0 0 200 400" className="w-full h-full text-[#5EFFD3]">
                <path d="M150 50 L100 200 L130 200 L80 350 L130 180 L100 180 Z" fill="currentColor" />
              </svg>
            </div>
          </div>
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5EFFD3] bg-opacity-10 border border-[#5EFFD3] border-opacity-30 rounded-full text-[#5EFFD3] text-sm mb-6">
              <Zap className="w-4 h-4" />
              Lightning-Powered Platform
            </div>
            <h1 className="text-white mb-6">Transform Your Digital Experience</h1>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Supercharge your workflow with lightning-fast tools designed to amplify productivity and energize your entire team.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-[#5EFFD3] text-[#3d4f5c] px-8 py-3 rounded-lg hover:bg-[#7DFFDD] transition-colors flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#3d4f5c] transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
