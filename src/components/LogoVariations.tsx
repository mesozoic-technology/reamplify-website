import logoImage from 'figma:asset/43616f9d0b33aaa903d93c3e7d0ae1fa3ea548cb.png';

export function LogoVariations() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-gray-900 mb-2">Primary Logo</h2>
        <p className="text-gray-600 mb-6">The icon-only brand mark</p>
        <div className="bg-white p-12 rounded-xl border border-gray-200 flex items-center justify-center">
          <div className="w-32 h-32 bg-[#2c3e50] rounded-xl flex items-center justify-center shadow-xl">
            <svg viewBox="0 0 100 100" className="w-20 h-20">
              <path
                d="M60 10 L40 50 L50 50 L35 90 L65 45 L55 45 Z"
                fill="#4ECDC4"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Logo Variations</h2>
        <p className="text-gray-600 mb-6">Different formats for various use cases</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Icon Only - Different Size */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">Icon Small</p>
            <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-[#2c3e50] rounded-lg flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 100 100" className="w-10 h-10">
                  <path
                    d="M60 10 L40 50 L50 50 L35 90 L65 45 L55 45 Z"
                    fill="#4ECDC4"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Wordmark Only */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">Wordmark Only</p>
            <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
              <span className="text-[#4ECDC4] text-4xl">(RE) - AMPLIFY</span>
            </div>
          </div>

          {/* Horizontal Layout */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">Horizontal Layout</p>
            <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#2c3e50] rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-10 h-10">
                    <path
                      d="M60 10 L40 50 L50 50 L35 90 L65 45 L55 45 Z"
                      fill="#4ECDC4"
                    />
                  </svg>
                </div>
                <span className="text-[#4ECDC4] text-2xl">(RE) - AMPLIFY</span>
              </div>
            </div>
          </div>

          {/* On Dark Background */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">On Dark Background</p>
            <div className="bg-[#2c3e50] p-8 rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#4ECDC4] bg-opacity-10 rounded-lg flex items-center justify-center border border-[#4ECDC4] border-opacity-30">
                  <svg viewBox="0 0 100 100" className="w-10 h-10">
                    <path
                      d="M60 10 L40 50 L50 50 L35 90 L65 45 L55 45 Z"
                      fill="#4ECDC4"
                    />
                  </svg>
                </div>
                <span className="text-[#4ECDC4] text-2xl">(RE) - AMPLIFY</span>
              </div>
            </div>
          </div>

          {/* Monochrome */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">Monochrome Version</p>
            <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-10 h-10">
                    <path
                      d="M60 10 L40 50 L50 50 L35 90 L65 45 L55 45 Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="text-gray-900 text-2xl">(RE) - AMPLIFY</span>
              </div>
            </div>
          </div>

          {/* White Version */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">White Version</p>
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg viewBox="0 0 100 100" className="w-10 h-10">
                    <path
                      d="M60 10 L40 50 L50 50 L35 90 L65 45 L55 45 Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="text-white text-2xl">(RE) - AMPLIFY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Clear Space & Sizing</h2>
        <p className="text-gray-600 mb-6">Minimum size and spacing requirements</p>
        
        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <div className="max-w-md mx-auto">
            <div className="relative inline-block">
              <div className="flex items-center gap-4 p-8 border-2 border-dashed border-[#4ECDC4] rounded-lg">
                <div className="w-16 h-16 bg-[#2c3e50] rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-10 h-10">
                    <path
                      d="M60 10 L40 50 L50 50 L35 90 L65 45 L55 45 Z"
                      fill="#4ECDC4"
                    />
                  </svg>
                </div>
                <span className="text-[#4ECDC4] text-2xl">(RE) - AMPLIFY</span>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>• Minimum width: 200px</p>
                <p>• Clear space: Equal to height of icon</p>
                <p>• Maintain aspect ratio when scaling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}