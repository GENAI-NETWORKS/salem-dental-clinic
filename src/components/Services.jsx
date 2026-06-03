import React from 'react';
import { Smile, Sparkles, Activity, Eye, ShieldAlert, Sparkle } from 'lucide-react';

const servicesList = [
  {
    title: 'Digital Smile Designing',
    description: 'Customized digital planning to create your perfect, natural-looking smile with precision.',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1606142979064-349704d230e3?w=500&auto=format&fit=crop&q=60',
    tag: 'Cosmetic',
    tagColor: 'bg-blue-500',
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional, safe whitening treatments that brighten your teeth by multiple shades instantly.',
    icon: Sparkles,
    image: 'https://media.istockphoto.com/id/475063916/photo/before-and-after-whitening.webp?a=1&b=1&s=612x612&w=0&k=20&c=Sv3ZTkEuAUsCp5qG035SFw5xtRD1hIpBXutTaPv7_h0=',
    tag: 'Cosmetic',
    tagColor: 'bg-purple-500',
  },
  {
    title: 'Dental Implants in Salem',
    description: 'Permanent, secure replacements for missing teeth that look and function like natural teeth.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&auto=format&fit=crop&q=60',
    tag: 'Restorative',
    tagColor: 'bg-teal',
  },
  {
    title: 'Invisible Clear Aligners',
    description: 'Discreet, comfortable orthodontic treatment to straighten your teeth without traditional braces.',
    icon: Eye,
    image: 'https://plus.unsplash.com/premium_photo-1673773401710-d23ef113e06f?w=500&auto=format&fit=crop&q=60',
    tag: 'Orthodontic',
    tagColor: 'bg-amber-500',
  },
  {
    title: 'Painless Root Canal Treatment',
    description: 'Expert, painless therapy by our specialist to save infected teeth and relieve severe pain.',
    icon: ShieldAlert,
    image: 'https://plus.unsplash.com/premium_photo-1744142824792-ea371bd1783d?w=500&auto=format&fit=crop&q=60',
    tag: 'Specialist',
    tagColor: 'bg-red-500',
  },
  {
    title: 'Gummy Smile Correction',
    description: 'Advanced reshaping of gum tissue to create a more balanced, aesthetically pleasing smile.',
    icon: Sparkle,
    image: 'https://images.unsplash.com/photo-1660732205525-eb180e4d29f8?w=500&auto=format&fit=crop&q=60',
    tag: 'Cosmetic',
    tagColor: 'bg-rose-500',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-10 md:py-16 bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-navy mt-2 mb-4">Premium Dental Services in Salem</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-gray-500 leading-relaxed">
            Comprehensive dental care powered by advanced technology, delivered with compassion.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag pill */}
                <span className={`absolute top-3 left-3 ${service.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {service.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-teal/10 text-teal flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-navy">{service.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
