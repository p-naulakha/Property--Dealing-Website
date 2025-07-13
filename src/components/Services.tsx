import React from 'react';
import { Home, DollarSign, Key, FileText, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Property Buying",
    description: "Expert guidance in finding and purchasing your dream property with complete legal assistance."
  },
  {
    icon: DollarSign,
    title: "Property Selling",
    description: "Get the best market value for your property with our strategic marketing and negotiation skills."
  },
  {
    icon: Key,
    title: "Property Rental",
    description: "Comprehensive rental services for both landlords and tenants with hassle-free management."
  },
  {
    icon: FileText,
    title: "Legal Documentation",
    description: "Complete legal documentation support with verified lawyers and transparent processes."
  },
  {
    icon: Users,
    title: "Investment Consulting",
    description: "Strategic real estate investment advice to maximize your returns and portfolio growth."
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "In-depth market research and property valuation to make informed decisions."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet all your property needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 group hover:shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <IconComponent size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;