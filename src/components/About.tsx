import React from 'react';
import { Award, Users, Building, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Real Estate
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 15 years of excellence in the real estate industry, Real Estate has established itself as Mumbai's most trusted property consultant. We specialize in luxury residential and commercial properties, delivering exceptional service and unmatched expertise.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of certified professionals is committed to understanding your unique needs and providing personalized solutions that exceed expectations. From first-time buyers to seasoned investors, we guide you through every step of your real estate journey.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building size={32} className="text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">1000+</div>
                <div className="text-gray-600">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star size={32} className="text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">4.9</div>
                <div className="text-gray-600">Client Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Real Estate Team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-8 -right-8 bg-amber-500 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold mb-1">₹500Cr+</div>
              <div className="text-sm opacity-90">Properties Sold</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;