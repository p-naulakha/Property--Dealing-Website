import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProperties />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;