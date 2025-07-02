import React from "react";
import "../index.css"; // Ensure fade-in and hero-bg are defined in your CSS

const HeroSection = () => {
  return (
    <section id="home" className="hero-bg text-white py-20 md:py-32 fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professional Cleaning Services
          </h1>
          <p className="text-lg md:text-xl mb-8">
            We provide top-quality cleaning services for homes and offices. Our team of
            professionals will leave your space sparkling clean.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300"
            >
              Book Now
            </a>
            <a
              href="#services"
              className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 border-2 border-white rounded-lg text-center transition duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;