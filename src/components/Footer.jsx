import React from 'react';
import { Heart } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-navy pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="#home" className="mb-6 block">
              <img src={logo} alt="Salem Dental Centre Logo" className="h-16 w-auto bg-white p-1.5 rounded-lg" />
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Providing premium, painless, and advanced dental care in Salem. Your smile is our passion, and your comfort is our priority.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-gold transition-colors">Patient Reviews</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Digital Smile Designing</li>
              <li className="text-gray-400">Tooth Whitening</li>
              <li className="text-gray-400">Dental Implants</li>
              <li className="text-gray-400">Invisible Clear Aligners</li>
              <li className="text-gray-400">Root Canal Treatment</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; 2025 Salem Dental Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
