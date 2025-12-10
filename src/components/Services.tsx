import { Shield, TrendingUp, DollarSign, Globe, Users, BarChart3, Wallet, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Secure Smart Contracts',
    description: 'Multi-signature wallets and audited contracts protect your deposits with institutional-grade security.',
    color: '#5EFFD3'
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Yields',
    description: 'Earn consistent returns backed by real reinsurance premiums, not speculative trading or leverage.',
    color: '#FF6B9D'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Real-time APY tracking and on-chain transparency. Know exactly where your capital is deployed.',
    color: '#FFB84D'
  },
  {
    icon: Globe,
    title: 'Institutional Partners',
    description: 'Access to global reinsurance markets through partnerships with established insurance institutions.',
    color: '#9D7BFF'
  },
  {
    icon: Users,
    title: 'Flexible Deposits',
    description: 'Deposit and withdraw at your convenience. No lock-up periods or complex withdrawal mechanisms.',
    color: '#5EFFD3'
  },
  {
    icon: BarChart3,
    title: 'Risk Management',
    description: 'Diversified exposure across multiple reinsurance contracts and geographies to minimize risk.',
    color: '#FF6B9D'
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-24 bg-transparent overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#5EFFD3] mb-4 text-4xl brightness-125" style={{ 
            textShadow: '0 0 40px rgba(94, 255, 211, 0.8)' 
          }}>
            How It Works
          </h2>
          <p className="text-[#5EFFD3] text-base max-w-2xl mx-auto brightness-110" style={{
            textShadow: '0 0 20px rgba(94, 255, 211, 0.4)'
          }}>
            Seamlessly bridge traditional reinsurance with decentralized finance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group p-8 bg-[#000000] rounded-2xl border border-[#5EFFD3]/30 hover:border-[#5EFFD3] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,255,211,0.4)]">
            <div className="w-16 h-16 bg-[#5EFFD3]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5EFFD3]/30 transition-colors">
              <Wallet className="text-[#5EFFD3]" size={32} />
            </div>
            <h3 className="text-[#5EFFD3] mb-3 text-xl brightness-110" style={{ 
              textShadow: '0 0 25px rgba(94, 255, 211, 0.5)' 
            }}>
              1. Deposit Assets
            </h3>
            <p className="text-[#5EFFD3] text-sm mb-6 brightness-100" style={{
              textShadow: '0 0 15px rgba(94, 255, 211, 0.3)'
            }}>
              Connect your wallet and deposit BTC, ETH, or HYPE into our secure smart contracts
            </p>
            <div className="flex items-center gap-2 text-[#5EFFD3] text-sm brightness-110">
              <span>Learn more</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Service 2 */}
          <div className="group p-8 bg-[#000000] rounded-2xl border border-[#5EFFD3]/30 hover:border-[#5EFFD3] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,255,211,0.4)]">
            <div className="w-16 h-16 bg-[#5EFFD3]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5EFFD3]/30 transition-colors">
              <Shield className="text-[#5EFFD3]" size={32} />
            </div>
            <h3 className="text-[#5EFFD3] mb-3 text-xl brightness-110" style={{ 
              textShadow: '0 0 25px rgba(94, 255, 211, 0.5)' 
            }}>
              2. Reinsurance Backing
            </h3>
            <p className="text-[#5EFFD3] text-sm mb-6 brightness-100" style={{
              textShadow: '0 0 15px rgba(94, 255, 211, 0.3)'
            }}>
              Your deposits are backed by traditional reinsurance contracts from AAA-rated providers
            </p>
            <div className="flex items-center gap-2 text-[#5EFFD3] text-sm brightness-110">
              <span>Learn more</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Service 3 */}
          <div className="group p-8 bg-[#000000] rounded-2xl border border-[#5EFFD3]/30 hover:border-[#5EFFD3] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,255,211,0.4)]">
            <div className="w-16 h-16 bg-[#5EFFD3]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5EFFD3]/30 transition-colors">
              <TrendingUp className="text-[#5EFFD3]" size={32} />
            </div>
            <h3 className="text-[#5EFFD3] mb-3 text-xl brightness-110" style={{ 
              textShadow: '0 0 25px rgba(94, 255, 211, 0.5)' 
            }}>
              3. Earn Yield
            </h3>
            <p className="text-[#5EFFD3] text-sm mb-6 brightness-100" style={{
              textShadow: '0 0 15px rgba(94, 255, 211, 0.3)'
            }}>
              Receive 5-13% extra annual yield on top of your existing DeFi returns
            </p>
            <div className="flex items-center gap-2 text-[#5EFFD3] text-sm brightness-110">
              <span>Learn more</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Supported Assets */}
        <div className="mt-20 text-center">
          <h3 className="text-[#5EFFD3] mb-8 text-2xl brightness-125" style={{ 
            textShadow: '0 0 35px rgba(94, 255, 211, 0.7)' 
          }}>
            Supported Assets
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="px-8 py-4 bg-[#000000] rounded-xl border border-[#5EFFD3]/30 hover:border-[#5EFFD3] transition-all hover:scale-105">
              <span className="text-[#5EFFD3] text-base brightness-110">BTC</span>
            </div>
            <div className="px-8 py-4 bg-[#000000] rounded-xl border border-[#5EFFD3]/30 hover:border-[#5EFFD3] transition-all hover:scale-105">
              <span className="text-[#5EFFD3] text-base brightness-110">ETH</span>
            </div>
            <div className="px-8 py-4 bg-[#000000] rounded-xl border border-[#5EFFD3]/30 hover:border-[#5EFFD3] transition-all hover:scale-105">
              <span className="text-[#5EFFD3] text-base brightness-110">HYPE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}