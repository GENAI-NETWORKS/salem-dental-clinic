import React, { useRef, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Suresh Kumar',
    date: '2 months ago',
    text: 'Excellent treatment by Dr. Aarthi. The root canal was completely painless and the clinic is very hygienic. Highly recommended!',
    rating: 5,
    color: 'bg-teal'
  },
  {
    name: 'Priya Rajan',
    date: '3 months ago',
    text: 'Very professional and polite staff. They explain the procedure clearly before starting. The best dental clinic in Salem.',
    rating: 5,
    color: 'bg-gold'
  },
  {
    name: 'Karthik N',
    date: '4 months ago',
    text: 'Got my digital smile designing done here. The results are amazing and exactly as promised. Very happy with my new smile.',
    rating: 5,
    color: 'bg-navy'
  },
  {
    name: 'Meena S',
    date: '5 months ago',
    text: 'Clean environment and advanced equipment. The doctor is very patient and listens to all our problems. Good experience.',
    rating: 4,
    color: 'bg-teal'
  },
  {
    name: 'Ramesh V',
    date: '6 months ago',
    text: 'Went for teeth whitening. The process was smooth and the outcome was brilliant. Premium service at reasonable cost.',
    rating: 5,
    color: 'bg-gold'
  }
];

const Reviews = () => {
  // Double the reviews to create a seamless infinite marquee effect
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-10 md:py-16 bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-teal font-bold text-sm uppercase tracking-wider mb-2 block">Patient Stories</span>
            <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-navy">
              Real Smiles, <br className="hidden md:block"/> Real Reviews.
            </h2>
          </div>
        </div>
      </div>

      {/* Full-width continuous marquee container */}
      <div className="flex overflow-hidden relative w-full group py-8">
        <div className="flex w-max animate-marquee gap-6 px-4">
          {doubledReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[320px] md:w-[400px] flex-shrink-0 bg-white p-8 rounded-2xl shadow-xl shadow-navy/5 border-t-4 border-gold hover:-translate-y-1 transition-transform duration-300 flex flex-col"
            >
              {/* Header: Avatar, Name, Stars, Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4 items-center">
                  <div className={`w-12 h-12 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-inner`}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg leading-tight">{review.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-gold text-gold' : 'fill-gray-200 text-gray-200'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">{review.date}</span>
                    </div>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-gray-100 flex-shrink-0" />
              </div>
              
              {/* Body: Review Text */}
              <p className="text-gray-600 leading-relaxed text-justify">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
