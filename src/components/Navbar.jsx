import React, { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-broom text-green-600 text-2xl mr-2"></i>
              <span className="text-xl font-bold text-gray-900">Edge Cleaning</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Home</a>
            <a href="#services" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Services</a>
            <a href="#booking" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Book Now</a>
            <a href="#contact" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-900 hover:text-green-600">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">Home</a>
            <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">Services</a>
            <a href="#booking" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">Book Now</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}