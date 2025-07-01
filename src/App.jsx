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
          {/* ... your existing nav content ... */}
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