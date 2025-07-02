import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for any questions or special requests
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <i className="fas fa-map-marker-alt text-green-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900">Address</h4>
                    <p className="text-sm text-gray-600">
                      123 Clean Street, Suite 100<br />San Francisco, CA 94107
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <i className="fas fa-phone-alt text-green-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900">Phone</h4>
                    <p className="text-sm text-gray-600">(415) 555-1234</p>
                    <p className="text-sm text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <i className="fas fa-envelope text-green-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900">Email</h4>
                    <p className="text-sm text-gray-600">info@edgecleaning.com</p>
                    <p className="text-sm text-gray-600">bookings@edgecleaning.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-bold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-green-100 p-3 rounded-full transition duration-300">
                    <i className="fab fa-facebook-f text-gray-600 hover:text-green-600"></i>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-green-100 p-3 rounded-full transition duration-300">
                    <i className="fab fa-twitter text-gray-600 hover:text-green-600"></i>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-green-100 p-3 rounded-full transition duration-300">
                    <i className="fab fa-instagram text-gray-600 hover:text-green-600"></i>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-green-100 p-3 rounded-full transition duration-300">
                    <i className="fab fa-linkedin-in text-gray-600 hover:text-green-600"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="contact-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="contact-email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="contact-subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="contact-message"
                    name="contact-message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;