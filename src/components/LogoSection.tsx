import logoImage from 'figma:asset/026f891de06f2b272124350ed2ffdb64feef8499.png';

export function LogoSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-gray-900 mb-2">Primary Logo</h2>
        <p className="text-gray-600 mb-6">The main brand mark</p>
        <div className="bg-white p-12 rounded-xl border border-gray-200 flex items-center justify-center">
          <img src={logoImage} alt="Lightning Bolt Logo" className="w-64 h-64 object-contain" />
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Logo Variations</h2>
        <p className="text-gray-600 mb-6">Different formats for various use cases</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Format */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">Large Format</p>
            <div className="bg-gray-50 p-12 rounded-lg flex items-center justify-center">
              <img src={logoImage} alt="Lightning Bolt" className="w-48 h-48 object-contain" />
            </div>
          </div>

          {/* Medium Format */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">Medium Format</p>
            <div className="bg-gray-50 p-12 rounded-lg flex items-center justify-center">
              <img src={logoImage} alt="Lightning Bolt" className="w-32 h-32 object-contain" />
            </div>
          </div>

          {/* Small Format */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">Small Format (Icon Size)</p>
            <div className="bg-gray-50 p-12 rounded-lg flex items-center justify-center">
              <img src={logoImage} alt="Lightning Bolt" className="w-16 h-16 object-contain" />
            </div>
          </div>

          {/* App Icon */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">App Icon / Avatar</p>
            <div className="bg-gray-50 p-12 rounded-lg flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl">
                <img src={logoImage} alt="Lightning Bolt" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Rounded Icon */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">Circular Icon</p>
            <div className="bg-gray-50 p-12 rounded-lg flex items-center justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl">
                <img src={logoImage} alt="Lightning Bolt" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Badge Style */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">Badge / Emblem</p>
            <div className="bg-gray-50 p-12 rounded-lg flex items-center justify-center">
              <div className="relative">
                <div className="w-28 h-28 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                  <img src={logoImage} alt="Lightning Bolt" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 mb-2">Clear Space & Usage</h2>
        <p className="text-gray-600 mb-6">Spacing and sizing requirements</p>
        
        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#3d4f5c] p-12 rounded-lg inline-block border-4 border-dashed border-[#5EFFD3]">
              <svg viewBox="0 0 200 400" className="w-24 h-24">
                <path
                  d="M150 50 L100 200 L130 200 L80 350 L130 180 L100 180 Z"
                  fill="#5EFFD3"
                />
              </svg>
            </div>
            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p>• Minimum clear space: 20% of logo height on all sides</p>
              <p>• Minimum display size: 48px × 48px</p>
              <p>• Do not distort or skew the logo</p>
              <p>• Maintain original aspect ratio when scaling</p>
              <p>• Do not add effects or shadows (except elevation)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}