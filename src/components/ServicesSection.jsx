import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cleaning Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of cleaning services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="service-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <i className="fas fa-home text-green-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Residential Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Thorough cleaning of your home including bedrooms, bathrooms, kitchen, and living areas.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i> Dusting and vacuuming
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i> Kitchen deep clean
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i> Bathroom sanitization
                </li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <i className="fas fa-building text-green-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Commercial Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Professional cleaning services for offices, retail spaces, and commercial properties.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i> Office cleaning
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i> Window washing
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i> Floor maintenance
                </li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <i className="fas fa-broom text-green-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Deep Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Intensive cleaning service for neglected areas or before/after special events.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i> Appliance cleaning
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i> Grout and tile cleaning
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i> Baseboard cleaning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;