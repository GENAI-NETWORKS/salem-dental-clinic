import React, { useState } from 'react';
import { MessageCircle, HelpCircle, X, Phone, MapPin, Calendar } from 'lucide-react';

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile view: Bottom Static Action Bar (hidden on md and up) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-2 z-50 flex justify-between gap-2 md:hidden shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.1)]">
        <a 
          href="#book" 
          className="flex-[1.25] flex items-center justify-center gap-1.5 bg-teal text-white py-3 px-1 rounded-[14px] text-[11px] sm:text-[13px] font-semibold active:scale-95 transition-transform"
        >
          <Calendar className="w-[15px] h-[15px] shrink-0" />
          <span className="truncate">Book Appointment</span>
        </a>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=SALEM+DENTAL+CENTRE+Dr.Rangas,+Omalur+Main+Rd,+Narasothipatti,+Salem,+Tamil+Nadu+636004" 
          target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-teal text-white py-3 px-1 rounded-[14px] text-[12px] sm:text-[13px] font-semibold active:scale-95 transition-transform"
        >
          <MapPin className="w-[15px] h-[15px] shrink-0" />
          <span>Location</span>
        </a>
        <a 
          href="tel:+919843308369" 
          className="flex-[0.85] flex items-center justify-center gap-1.5 bg-teal text-white py-3 px-1 rounded-[14px] text-[12px] sm:text-[13px] font-semibold active:scale-95 transition-transform"
        >
          <Phone className="w-[15px] h-[15px] shrink-0" />
          <span>Call</span>
        </a>
      </div>

      {/* Laptop & Tablet view: Expanding Widget (hidden on mobile, shown on md and up) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-center">
        
        {/* Expanded Menu Items */}
        <div 
          className={`absolute bottom-[72px] flex flex-col gap-4 transition-all duration-300 origin-bottom ${
            isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
          }`}
        >
          {/* Calendar (Book) */}
          <a 
            href="#book" 
            className="w-14 h-14 bg-white text-teal rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300" 
            aria-label="Book Appointment"
            onClick={() => setIsOpen(false)}
          >
            <Calendar className="w-6 h-6" />
          </a>
          
          {/* Location (Contact) */}
          <a 
            href="https://www.google.com/maps/search/?api=1&query=SALEM+DENTAL+CENTRE+Dr.Rangas,+Omalur+Main+Rd,+Narasothipatti,+Salem,+Tamil+Nadu+636004" 
            target="_blank" rel="noopener noreferrer"
            className="w-14 h-14 bg-white text-teal rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300" 
            aria-label="Location"
            onClick={() => setIsOpen(false)}
          >
            <MapPin className="w-6 h-6" />
          </a>
          
          {/* Phone (Call) */}
          <a 
            href="tel:+919843308369" 
            className="w-14 h-14 bg-white text-teal rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300" 
            aria-label="Call Us"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>

        {/* Main Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-teal text-white rounded-full flex items-center justify-center shadow-lg shadow-teal/30 hover:scale-110 transition-transform duration-300 z-10 relative"
          aria-label="Toggle Contact Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <HelpCircle className="w-7 h-7" />}
        </button>

      </div>
    </>
  );
};

export default FloatingCTA;
