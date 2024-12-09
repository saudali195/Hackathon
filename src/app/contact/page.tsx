// pages/contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#f9fafb]">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        {/* Contact Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#272343]">Get In Touch With Us</h2>
          <p className="text-gray-600 mt-4">
            For more information about our products & services, please feel free to drop us a line. Our staff is always here to help you out!
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Address Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-[#272343]">Address</h4>
              <p className="text-gray-600">230 5th Ave, New York, NY 10000, United States</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#272343]">Phone</h4>
              <p className="text-gray-600">
                Mobile: +1 234 567 6789 <br />
                Hotline: +1 984 456 6789
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#272343]">Working Time</h4>
              <p className="text-gray-600">
                Monday - Friday: 9:00 - 5:00 <br />
                Saturday - Sunday: 9:00 - 2:00
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@example.com"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is optional"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white rounded-lg py-3 font-semibold hover:bg-teal-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg shadow-lg py-8 px-6">
            <h4 className="text-xl font-semibold text-[#272343]">High Quality</h4>
            <p className="text-gray-600 mt-2">Crafted from top materials</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg py-8 px-6">
            <h4 className="text-xl font-semibold text-[#272343]">Warranty Protection</h4>
            <p className="text-gray-600 mt-2">Over 2 years</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg py-8 px-6">
            <h4 className="text-xl font-semibold text-[#272343]">24 / 7 Support</h4>
            <p className="text-gray-600 mt-2">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
