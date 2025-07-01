import React from "react";

const services = [
  {
    icon: "fa-home",
    title: "Residential Cleaning",
    description:
      "Thorough cleaning of your home including bedrooms, bathrooms, kitchen, and living areas.",
    features: ["Dusting and vacuuming", "Kitchen deep clean", "Bathroom sanitization"],
  },
  {
    icon: "fa-building",
    title: "Commercial Cleaning",
    description:
      "Professional cleaning services for offices, retail spaces, and commercial properties.",
    features: ["Office cleaning", "Window washing", "Floor maintenance"],
  },
  {
    icon: "fa-broom",
    title: "Deep Cleaning",
    description:
      "Intensive cleaning service for neglected areas or before/after special events.",
    features: ["Appliance cleaning", "Grout and tile cleaning", "Baseboard cleaning"],
  },
];

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
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md transform hover:-translate-y-2 transition duration-300 ease-in-out"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <i className={`fas ${service.icon} text-green-600 text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-gray-600 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;