import React from 'react';
import { Search, MapPin, Home, Building2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Find Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Dream Home
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
          Discover premium properties with Real estate. Your trusted partner in real estate excellence.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800">
                  <option>Select Location</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Pune</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">Property Type</label>
              <div className="relative">
                <Home className="absolute left-3 top-3 text-gray-400" size={20} />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800">
                  <option>Any Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>House</option>
                  <option>Commercial</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">Budget Range</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 text-gray-400" size={20} />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800">
                  <option>Any Budget</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>₹1Cr - ₹2Cr</option>
                  <option>₹2Cr - ₹5Cr</option>
                  <option>₹5Cr+</option>
                </select>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center space-x-2 font-medium">
              <Search size={20} />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">1000+</div>
            <div className="text-lg opacity-90">Properties Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">500+</div>
            <div className="text-lg opacity-90">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">15+</div>
            <div className="text-lg opacity-90">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
            <div className="text-lg opacity-90">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;