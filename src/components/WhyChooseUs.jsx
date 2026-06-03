import React from 'react';
import { Microscope, Heart, UserCheck, Coffee, ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Advanced Equipment',
    description: 'We use the latest dental technology for precise diagnostics and effective treatments.',
    icon: Microscope
  },
  {
    title: 'Painless Procedures',
    description: 'Our techniques are designed to minimize discomfort, making your visit stress-free.',
    icon: Heart
  },
  {
    title: 'Expert Specialists',
    description: 'Highly qualified professionals led by a specialized MDS in Root Canal therapy.',
    icon: UserCheck
  },
  {
    title: 'Welcoming Atmosphere',
    description: 'A calming environment tailored to make every patient feel relaxed and valued.',
    icon: Coffee
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* ── Left side: Sticky Title & Context ── */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 self-start">
            <span className="text-gold font-bold text-xs uppercase tracking-widest mb-3 block">Our Standards</span>
            <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-navy leading-[1.1] mb-6">
              Why Choose <br className="hidden lg:block"/> Salem Dental?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              We combine cutting-edge dental technology with a compassionate, patient-first approach to deliver a pain-free and premium experience.
            </p>
            <a 
              href="#book" 
              className="inline-flex items-center gap-2 bg-navy hover:bg-teal text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-navy/20 hover:shadow-teal/30 hover:-translate-y-1"
            >
              Book Your Visit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* ── Right side: Offset Masonry Grid ── */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            
            {/* Column 1 (Pushed down slightly on desktop for staggered effect) */}
            <div className="flex flex-col gap-6 sm:mt-12">
              {[features[0], features[2]].map((feature, index) => (
                <div key={index} className="bg-light p-8 md:p-10 rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-navy/5 hover:border-teal/20 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              {[features[1], features[3]].map((feature, index) => (
                <div key={index} className="bg-light p-8 md:p-10 rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-navy/5 hover:border-teal/20 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
