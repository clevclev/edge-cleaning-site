import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Have questions or need help? Reach out to us using the info below.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <p className="mb-4">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@edgecleaning.com" className="text-green-600 underline">
              info@edgecleaning.com
            </a>
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p>
            <strong>Address:</strong> 123 Clean Street, Neatville, ST 99999
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;