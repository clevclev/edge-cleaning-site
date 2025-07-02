import React, { useState } from 'react';
import './App.css';
import ServicesSection from "./components/ServicesSection";
import BookingForm from "./components/BookingForm";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Booking submitted:', data);
    console.log('Email notification sent to business@edgecleaning.com with booking details');
    setSuccess(true);
    form.reset();
    setTimeout(() => {
      document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleMobileMenu = () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('mobile-menu').classList.add('hidden');
    }
  };

  return (
    <div className="font-sans bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold text-green-600">Edge Cleaning</span>
              </div>
              <div className="hidden md:flex space-x-4">
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-gray-700 hover:text-green-600">Home</a>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="text-gray-700 hover:text-green-600">Services</a>
                <a href="#booking" onClick={(e) => scrollToSection(e, '#booking')} className="text-gray-700 hover:text-green-600">Book Now</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="text-gray-700 hover:text-green-600">Contact</a>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:text-green-600 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu dropdown */}
          <div id="mobile-menu" className="hidden md:hidden px-4 pb-4">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="block py-2 text-gray-700 hover:text-green-600">Home</a>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="block py-2 text-gray-700 hover:text-green-600">Services</a>
            <a href="#booking" onClick={(e) => scrollToSection(e, '#booking')} className="block py-2 text-gray-700 hover:text-green-600">Book Now</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="block py-2 text-gray-700 hover:text-green-600">Contact</a>
          </div>
        </nav>

        {/* Success message */}
        {success && (
          <div
            id="successMessage"
            className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded text-center"
        >
            <p className="font-bold">Thank you for your booking!</p>
            <p>
              We've received your cleaning service request and will contact you
              shortly to confirm your appointment.
            </p>
          </div>
        )}

        {/* Hero / Home Section */}
        <section id="home" className="py-20 text-center bg-white">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Edge Cleaning Services</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Professional and reliable home & office cleaning tailored to your needs.
        </p>
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Booking Form Section */}
      <section id="booking">
        <BookingForm handleSubmit={handleSubmit} />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;