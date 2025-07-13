import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Real Estate</h3>
                <p className="text-xs text-gray-400">Premium Properties</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in real estate excellence. We help you find the perfect property that matches your dreams and budget.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#properties" className="text-gray-400 hover:text-white transition-colors">Properties</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-bold mb-6">Property Types</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apartments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Villas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Independent Houses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Penthouses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Plots & Lands</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investment Properties</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    Knowldege park 3<br />
                    Greater Noida - 201310, Uttar Pradesh
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+91 98765 432103</p>
                  <p className="text-gray-400">+91 87654 321093</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">info@realestate.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Real estate India. All rights reserved. | Designed with ❤️ for premium real estate experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;