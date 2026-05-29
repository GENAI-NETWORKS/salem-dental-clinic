import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ClinicGallery from './components/ClinicGallery';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import HoursAndBooking from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="font-sans antialiased text-navy bg-white min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <ClinicGallery />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <HoursAndBooking />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
