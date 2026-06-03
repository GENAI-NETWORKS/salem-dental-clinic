import React from 'react';
import { Heart, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-navy pt-12 pb-10 mt-10 border-t border-white/5 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <a href="#home" className="mb-6 flex items-center gap-3 w-fit">
              <img src={logo} alt="Salem Dental Centre Logo" className="h-14 w-auto bg-white p-1 rounded-lg shadow-md" />
              <span className="font-bold text-2xl text-white tracking-tight">Salem Dental Centre</span>
            </a>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Where advanced dentistry meets compassionate care. Your smile is our passion, and your comfort is our absolute priority.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 hover:bg-teal/20 hover:border-teal/30 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Call Us Today</p>
                  <a href="tel:9843308369" className="font-medium hover:text-gold transition-colors text-lg">98433 08369</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300 group cursor-pointer" onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Salem+Dental+Centre,+Omalur+Main+Rd,+Narasothipatti,+Salem,+Tamil+Nadu+636004', '_blank')}>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-teal/20 group-hover:border-teal/30 transition-colors">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Clinic Location</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Salem+Dental+Centre,+Omalur+Main+Rd,+Narasothipatti,+Salem,+Tamil+Nadu+636004" 
                    target="_blank" rel="noopener noreferrer"
                    className="font-medium text-lg group-hover:text-gold transition-colors"
                  >
                    Omalur Main Rd, Salem
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm flex items-center gap-3">
              <span className="w-8 h-px bg-gold"></span> Explore
            </h4>
            <ul className="space-y-4">
              {['Home', 'About Clinic', 'Our Services', 'Patient Success', 'Contact Us'].map((item, i) => {
                const linkMap = ['#home', '#about', '#services', '#reviews', '#contact'];
                return (
                  <li key={i}>
                    <a href={linkMap[i]} className="text-gray-400 hover:text-gold transition-colors flex items-center gap-3 group font-medium">
                      <span className="w-2 h-2 rounded-full border-2 border-teal group-hover:bg-gold group-hover:border-gold transition-colors"></span>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm flex items-center gap-3">
              <span className="w-8 h-px bg-gold"></span> Specialities
            </h4>
            <ul className="space-y-4">
              {[
                'Digital Smile Designing', 
                'Tooth Whitening', 
                'Dental Implants', 
                'Invisible Aligners', 
                'Painless Root Canal'
              ].map((service, i) => (
                <li key={i} className="text-gray-400 hover:text-gold cursor-pointer transition-colors flex items-center gap-3 group font-medium">
                  <span className="w-2 h-2 rounded-full border-2 border-teal group-hover:bg-gold group-hover:border-gold transition-colors"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Salem Dental Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
