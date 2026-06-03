import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are here to answer any questions you may have about our services, pricing, or availability.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Left Column: Contact Details */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 bg-navy text-white relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal rounded-full blur-3xl opacity-50"></div>
            
            <h3 className="text-3xl font-serif font-bold mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-8 relative z-10 mb-12">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=SALEM+DENTAL+CENTRE+Dr.Rangas,+Omalur+Main+Rd,+Narasothipatti,+Salem,+Tamil+Nadu+636004" 
                target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 group-hover:text-gold transition-colors">Our Location</h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                    Omalur Main Rd, Narasothipatti,<br />
                    Salem, Tamil Nadu 636004
                  </p>
                </div>
              </a>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone Number</h4>
                  <p className="text-gray-300 text-xl">98433 08369</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Working Hours</h4>
                  <p className="text-gray-300">Mon - Sat: 9:30 AM - 9:00 PM</p>
                  <p className="text-gray-400 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <a 
                href="tel:+919843308369" 
                className="flex items-center justify-center gap-2 bg-gold hover:bg-[#b89741] text-white py-3 px-6 rounded-full font-bold transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=SALEM+DENTAL+CENTRE+Dr.Rangas,+Omalur+Main+Rd,+Narasothipatti,+Salem,+Tamil+Nadu+636004" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-full font-bold transition-colors"
              >
                Get Directions
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="w-full lg:w-1/2 h-[350px] sm:h-[400px] lg:h-auto flex">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.382436440263!2d78.13606737505524!3d11.66698948854089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf0426b6f75fd%3A0xc621379373cfc2d0!2sSalem%20Dental%20Centre%20-%20Dr.%20Rangas!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Salem Dental Centre Location"
              className="w-full h-full object-cover flex-1"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
