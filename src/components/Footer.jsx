import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-broom text-green-600 text-2xl mr-2"></i>
              <span className="text-xl font-bold">Edge Cleaning</span>
            </div>
            <p className="text-gray-400">
              Professional cleaning services for homes and businesses in the Bay Area.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300">
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300">
                  Deep Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300">
                  Move In/Out Cleaning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-green-500 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-green-500 transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-green-500 transition duration-300">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-500 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-green-500 mr-2"></i> 123 Clean Street, SF, CA
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-green-500 mr-2"></i> (415) 555-1234
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-green-500 mr-2"></i> info@edgecleaning.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 Edge Cleaning Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;