import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import logoImage from 'figma:asset/026f891de06f2b272124350ed2ffdb64feef8499.png';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16">
          <div>
            <form 
              className="space-y-6"
              action="https://formspree.io/f/xwpgrkva"
              method="POST"
            >

              <div>
                <label htmlFor="name" className="block text-[#5EFFD3] mb-2 text-sm brightness-110" style={{
                  textShadow: '0 0 15px rgba(94, 255, 211, 0.3)'
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#000000] border border-[#5EFFD3]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5EFFD3] focus:border-transparent text-[#5EFFD3] brightness-110"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#5EFFD3] mb-2 text-sm brightness-110" style={{
                  textShadow: '0 0 15px rgba(94, 255, 211, 0.3)'
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#000000] border border-[#5EFFD3]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5EFFD3] focus:border-transparent text-[#5EFFD3] brightness-110"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#5EFFD3] mb-2 text-sm brightness-110" style={{
                  textShadow: '0 0 15px rgba(94, 255, 211, 0.3)'
                }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#000000] border border-[#5EFFD3]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5EFFD3] focus:border-transparent resize-none text-[#5EFFD3] brightness-110"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#5EFFD3] text-[#000000] rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 text-base"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div> 

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-[#5EFFD3]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="(RE) - Amplify" 
                className="w-10 h-10 object-contain brightness-0 invert" 
                style={{ filter: 'drop-shadow(0 0 15px rgba(94, 255, 211, 0.5))' }}
              />
              <span className="text-[#5EFFD3] text-sm brightness-90" style={{
                textShadow: '0 0 15px rgba(94, 255, 211, 0.3)'
              }}>© 2025 (RE) - Amplify. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}