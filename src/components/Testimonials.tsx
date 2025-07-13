import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    text: "Real Estate made my home buying journey incredibly smooth. Their expertise and dedication helped me find the perfect property within my budget."
  },
  {
    name: "Rajesh Kumar",
    location: "Pune",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    text: "Exceptional service and professional approach. They handled all the legal formalities and made the entire process hassle-free."
  },
  {
    name: "Anita Desai",
    location: "Mumbai",
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    text: "Highly recommend Real estate for their transparency and honest guidance. They truly understand client needs and deliver excellent results."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Hear from our satisfied clients who found their dream homes with Real Estate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-blue-200">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-amber-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote size={24} className="text-amber-400 mb-4" />
                <p className="text-lg leading-relaxed opacity-90">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;