import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="#home" className="flex items-center gap-2 sm:gap-3">
                <img src={logo} alt="Salem Dental Centre Logo" className="h-10 sm:h-12 w-auto transition-all bg-white p-1 rounded-md shadow-sm" />
                <span className={`font-bold text-[15px] sm:text-xl tracking-tight ${scrolled ? 'text-navy' : 'text-white'}`}>Salem Dental Centre</span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    scrolled ? 'text-navy hover:text-teal' : 'text-white hover:text-gold'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#book"
                className="bg-gold hover:bg-[#b89741] text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-md shadow-gold/20"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open main menu"
                className={`focus:outline-none transition-colors ${
                  scrolled ? 'text-navy hover:text-teal' : 'text-white hover:text-gold'
                }`}
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-50 md:hidden transition-opacity" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Drawer (Right side, half screen on mobile) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[60%] sm:w-[50%] min-w-[240px] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-5">
          <button 
            onClick={() => setIsOpen(false)} 
            aria-label="Close menu"
            className="text-gray-400 hover:text-teal bg-gray-50 hover:bg-teal/10 rounded-full p-2 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex flex-col px-8 space-y-6 mt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-navy hover:text-teal font-bold text-lg border-b border-gray-100 pb-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            className="mt-6 w-full text-center bg-gold hover:bg-[#b89741] text-white px-5 py-4 rounded-full font-bold shadow-lg shadow-gold/30 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
