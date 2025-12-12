import { Zap, Target, Rocket } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Responsive heading: text-2xl on mobile → text-3xl on md → text-4xl on lg */}
            <h2 className="text-[#5EFFD3] mb-6 text-2xl md:text-3xl lg:text-4xl brightness-125" style={{ 
              textShadow: '0 0 40px rgba(94, 255, 211, 0.8)' 
            }}>
              Why (RE) - Amplify?
            </h2>
            
            {/* Responsive paragraph: text-base on mobile → text-lg on md */}
            <p className="text-[#5EFFD3] text-base md:text-lg mb-6 brightness-100" style={{
              textShadow: '0 0 20px rgba(94, 255, 211, 0.4)'
            }}>
              Traditional insurance and reinsurance generates billions in premiums annually. We're bringing this proven market to DeFi, offering you a new source of sustainable yield.
            </p>
            <p className="text-[#5EFFD3] text-base md:text-lg mb-8 brightness-100" style={{
              textShadow: '0 0 20px rgba(94, 255, 211, 0.4)'
            }}>
              By partnering with licensed (re)insurance companies, we create a bridge between traditional finance and decentralized protocols, amplifying your returns while maintaining security.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#5EFFD3] rounded-full mt-2" style={{ boxShadow: '0 0 10px rgba(94, 255, 211, 0.8)' }}></div>
                <div>
                  {/* Responsive feature title: text-base on mobile → text-lg on md */}
                  <h4 className="text-[#5EFFD3] mb-1 text-base md:text-lg brightness-110" style={{
                    textShadow: '0 0 20px rgba(94, 255, 211, 0.4)'
                  }}>Institutional Security</h4>
                  {/* Responsive feature description: text-sm on mobile → text-base on md */}
                  <p className="text-[#5EFFD3] text-sm md:text-base brightness-90" style={{
                    textShadow: '0 0 15px rgba(94, 255, 211, 0.3)'
                  }}>Multi-sig institutional custody</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#5EFFD3] rounded-full mt-2" style={{ boxShadow: '0 0 10px rgba(94, 255, 211, 0.8)' }}></div>
                <div>
                  <h4 className="text-[#5EFFD3] mb-1 text-base md:text-lg brightness-110" style={{
                    textShadow: '0 0 20px rgba(94, 255, 211, 0.4)'
                  }}>Proven Track Record</h4>
                  <p className="text-[#5EFFD3] text-sm md:text-base brightness-90" style={{
                    textShadow: '0 0 15px rgba(94, 255, 211, 0.3)'
                  }}>5-13% extra yield vetted by certified studies</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#5EFFD3] rounded-full mt-2" style={{ boxShadow: '0 0 10px rgba(94, 255, 211, 0.8)' }}></div>
                <div>
                  <h4 className="text-[#5EFFD3] mb-1 text-base md:text-lg brightness-110" style={{
                    textShadow: '0 0 20px rgba(94, 255, 211, 0.4)'
                  }}>Full Transparency</h4>
                  <p className="text-[#5EFFD3] text-sm md:text-base brightness-90" style={{
                    textShadow: '0 0 15px rgba(94, 255, 211, 0.3)'
                  }}>Real-time verification of returns and payouts</p>
                </div>
              </div>
            </div>
          </div>

      </div>
    </section>
  );
}