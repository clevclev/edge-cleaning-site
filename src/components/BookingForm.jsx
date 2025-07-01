import React, { useState } from "react";

const BookingForm = ({ handleSubmit }) => {
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);     // Call the App's handler
    setSuccess(true);
    e.target.reset();
    setTimeout(() => {
      const el = document.getElementById("successMessage");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="booking" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Cleaning Service</h2>
          <p className="text-lg text-gray-600">
            Fill out the form below to schedule your cleaning appointment
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" required className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" required className="w-full px-4 py-2 border rounded-md" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" required className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select required className="w-full px-4 py-2 border rounded-md">
                  <option value="">Select a service</option>
                  <option>Residential Cleaning</option>
                  <option>Commercial Cleaning</option>
                  <option>Deep Cleaning</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input type="date" required className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                <select required className="w-full px-4 py-2 border rounded-md">
                  <option value="">Select a time</option>
                  <option>8:00 AM - 10:00 AM</option>
                  <option>10:00 AM - 12:00 PM</option>
                  <option>12:00 PM - 2:00 PM</option>
                  <option>2:00 PM - 4:00 PM</option>
                  <option>4:00 PM - 6:00 PM</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Address</label>
              <textarea rows="3" required className="w-full px-4 py-2 border rounded-md"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
              <textarea rows="2" className="w-full px-4 py-2 border rounded-md"></textarea>
            </div>
            <div className="flex items-center">
              <input type="checkbox" required className="h-4 w-4 text-green-600 border-gray-300 rounded" />
              <label className="ml-2 text-sm text-gray-700">
                I agree to the <a href="#" className="text-green-600">terms and conditions</a>
              </label>
            </div>
            <div>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                Book Cleaning Service
              </button>
            </div>
          </form>

          {success && (
            <div id="successMessage" className="mt-6 p-4 bg-green-100 border text-green-700 rounded">
              <p className="font-bold">Thank you for your booking!</p>
              <p>We’ll contact you shortly to confirm your appointment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;