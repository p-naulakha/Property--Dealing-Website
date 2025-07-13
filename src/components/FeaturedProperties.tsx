import React from 'react';
import { MapPin, Bed, Bath, Square, Heart, Eye, MessageCircle } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    location: "Bandra West, Mumbai",
    price: "₹2.5 Crore",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 3,
    baths: 2,
    area: "1,450 sq ft",
    type: "Apartment",
    featured: true
  },
  {
    id: 2,
    title: "Modern Villa with Garden",
    location: "Juhu, Mumbai",
    price: "₹8.5 Crore",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 4,
    baths: 3,
    area: "3,200 sq ft",
    type: "Villa",
    featured: true
  },
  {
    id: 3,
    title: "Spacious 2BHK Flat",
    location: "Andheri East, Mumbai",
    price: "₹1.8 Crore",
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 2,
    baths: 2,
    area: "1,100 sq ft",
    type: "Apartment",
    featured: false
  },
  {
    id: 4,
    title: "Premium Penthouse",
    location: "Worli, Mumbai",
    price: "₹12 Crore",
    image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 5,
    baths: 4,
    area: "4,500 sq ft",
    type: "Penthouse",
    featured: true
  },
  {
    id: 5,
    title: "Cozy 1BHK Studio",
    location: "Powai, Mumbai",
    price: "₹95 Lakh",
    image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 1,
    baths: 1,
    area: "650 sq ft",
    type: "Studio",
    featured: false
  },
  {
    id: 6,
    title: "Independent House",
    location: "Versova, Mumbai",
    price: "₹4.2 Crore",
    image: "https://images.pexels.com/photos/1396133/pexels-photo-1396133.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 3,
    baths: 3,
    area: "2,800 sq ft",
    type: "House",
    featured: false
  }
];

const FeaturedProperties = () => {
  const handleWhatsAppInquiry = (propertyTitle: string) => {
    const phoneNumber = "919876543210"; // Replace with your actual WhatsApp number
    const message = `Hi! I'm interested in the property: ${propertyTitle}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties that offer exceptional value and luxury living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  {property.featured && (
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart size={16} className="text-gray-600" />
                  </button>
                  <button className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                    <Eye size={16} className="text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center">
                      <Square size={16} className="mr-1" />
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    {property.price}
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleWhatsAppInquiry(property.title)}
                      className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
                      title="Inquire on WhatsApp"
                    >
                      <MessageCircle size={16} />
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-medium">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;