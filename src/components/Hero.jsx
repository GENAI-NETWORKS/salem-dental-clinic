import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import heroBg from '../assets/herosection.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex flex-col overflow-hidden">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Premium Dental Clinic in Salem - State of the art facility"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay to ensure text is readable against the busy background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/30"></div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-8 inline-block bg-white text-navy font-bold text-xs md:text-sm px-6 py-2.5 rounded-full tracking-wider uppercase">
            4.7 Stars · Trusted by 500+ Patients in Salem
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white leading-[1.1] mb-6">
            Painless Dentistry <br />
            by the Best Dentist
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Expert Root Canal Therapy, Dental Implants & Cosmetic Dentistry.<br />
            Salem's most trusted dental clinic led by Dr. G. Aarthi Ranganathan, MDS.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="#book"
              aria-label="Book a dental appointment in Salem"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-3.5 rounded-full text-base transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <a
              href="tel:+919843308369"
              aria-label="Call Salem Dental Centre at 9843308369"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-3.5 rounded-full text-base transition-all"
            >
              <Phone className="w-5 h-5" />
              98433 08369
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
