import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Replace with your actual WhatsApp number
    const message = "Hi! I'm interested in your real estate services. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-800 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@realestate.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>Greater Noida , Uttar Pradesh, India</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg"></span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-800">Real Estate</h1>
              <p className="text-xs text-gray-600">Premium Properties</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#properties" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Properties</a>
            <a href="#services" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Contact</a>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </button>
            <button className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors font-medium">
              List Property
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium">Home</a>
              <a href="#properties" className="text-gray-800 hover:text-blue-600 font-medium">Properties</a>
              <a href="#services" className="text-gray-800 hover:text-blue-600 font-medium">Services</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium">About</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</a>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center space-x-2 w-fit"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </button>
              <button className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors font-medium w-fit">
                List Property
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;