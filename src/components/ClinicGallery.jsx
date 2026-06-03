import React from 'react';

import img1 from '../assets/WhatsApp Image 2026-05-29 at 2.26.38 PM (1).jpeg';
import img2 from '../assets/WhatsApp Image 2026-05-29 at 2.26.38 PM.jpeg';
import img3 from '../assets/WhatsApp Image 2026-05-29 at 2.26.39 PM.jpeg';
import img4 from '../assets/WhatsApp Image 2026-05-29 at 2.26.40 PM.jpeg';

const ClinicGallery = () => {
  const photos = [
    { src: img1, alt: 'Clinic Interior 1' },
    { src: img2, alt: 'Clinic Interior 2' },
    { src: img3, alt: 'Clinic Interior 3' },
    { src: img4, alt: 'Clinic Interior 4' },
  ];

  return (
    <section id="gallery" className="py-10 md:py-16 bg-navy relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-teal/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-gold font-bold text-sm uppercase tracking-widest mb-3 block">Inside Salem Dental</span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white mb-6">Our Premium Facility</h2>
          <div className="w-16 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Take a look inside our modern, ultra-hygienic, and state-of-the-art clinic. Designed to make you feel completely relaxed and at home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[3/4] bg-white/5 cursor-pointer shadow-xl border border-white/10 hover:border-teal/50 hover:shadow-teal/20 transition-all duration-500 hover:-translate-y-2"
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              {/* Dark gradient overlay that appears on hover for a premium effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClinicGallery;
