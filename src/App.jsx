import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import OurSpace from './components/OurSpace';
import ServiceFeatures from './components/ServiceFeatures';

function App() {
  return (
    <div className="font-sans antialiased bg-cafe-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <OurSpace />
      <ServiceFeatures />
      <Services />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
