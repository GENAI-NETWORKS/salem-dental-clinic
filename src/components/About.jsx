import React from 'react';
import { Award, Shield, Heart, Star } from 'lucide-react';
import doctorImg from '../assets/Dr.G.Aarthi Ranganathan.png';

const About = () => {
  const credentials = [
    { icon: Award,  label: 'MDS Endodontics', sub: 'Master of Dental Surgery' },
    { icon: Shield, label: 'Root Canal Specialist', sub: '10+ years of focused care' },
    { icon: Heart,  label: 'Patient-First Philosophy', sub: 'Comfort above everything' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Top label ── */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-12 bg-gold"></div>
          <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">About the Doctor</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">

          {/* ── Column 1: Image block ── */}
          <div className="lg:col-span-5 relative">

            {/* Main photo with gold accent border */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5' }}>
              <img
                src={doctorImg}
                alt="Dr. G. Aarthi Ranganathan"
                className="w-full h-full object-cover object-top"
              />
              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
              {/* Name plate */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-white font-bold text-xl leading-tight">Dr. G. Aarthi Ranganathan</p>
                <p className="text-gold text-sm font-semibold mt-1">MDS · Root Canal Specialist</p>
              </div>
            </div>

            {/* Gold accent line left */}
            <div className="absolute -left-4 top-10 bottom-10 w-1.5 bg-gradient-to-b from-gold via-teal to-gold rounded-full"></div>

          

            {/* Dot grid decoration */}
            <div className="absolute -bottom-8 -right-8 w-28 h-28 pointer-events-none opacity-20"
              style={{ backgroundImage: 'radial-gradient(circle, #C9A84C 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}>
            </div>
          </div>

          {/* ── Column 2: Content ── */}
          <div className="lg:col-span-7 lg:pt-4">

            <h2 className="text-4xl md:text-5xl xl:text-6xl font-sans font-extrabold text-navy leading-[1.05] mb-6">
              Excellence in<br />
              <span className="text-teal">Painless Dentistry.</span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed text-justify mb-4">
              At Salem Dental Centre, every patient walks in as a concern and leaves as a confident smile. Led by{' '}
              <span className="text-navy font-semibold">Dr. G. Aarthi Ranganathan, MDS</span>, the clinic combines
              advanced digital technology with genuine compassion making even complex procedures comfortable and stress-free.
            </p>

            <p className="text-gray-500 leading-relaxed text-justify mb-10">
              Specializing in Endodontics (Root Canal Therapy), Dr. Aarthi brings over a decade of expertise
              to transform anxious patients into loyal, healthy smilers. From Digital Smile Designing to Invisible
              Aligners, every treatment is tailored precisely to your unique anatomy and goals.
            </p>

            {/* Credentials tile grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {credentials.map((c, i) => {
                const colors = [
                  { border: 'border-gold',  bg: 'bg-gold/10',  text: 'text-gold',  sub: 'text-gold/60' },
                  { border: 'border-teal',  bg: 'bg-teal/10',  text: 'text-teal',  sub: 'text-teal/60' },
                  { border: 'border-red-300', bg: 'bg-red-50', text: 'text-red-400', sub: 'text-red-300' },
                ];
                const col = colors[i];
                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center p-5 rounded-2xl bg-light border-t-4 ${col.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
                  >
                    <div className={`w-12 h-12 rounded-full ${col.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <c.icon className={`w-6 h-6 ${col.text}`} />
                    </div>
                    <p className={`font-extrabold text-sm ${col.text} leading-tight mb-1`}>{c.label}</p>
                    <p className="text-gray-400 text-xs leading-snug">{c.sub}</p>
                  </div>
                );
              })}
            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
