import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-[#f8f9fa] py-12">
      {/* About Us Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6 md:px-12">
        {/* Left Column */}
        <div className="bg-teal-700 text-white p-6 rounded-lg flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
          <p className="text-lg mb-6 leading-relaxed">
            At Comforty, we believe that the right chair can transform any space. We craft timeless designs with precision and style, offering chairs that seamlessly blend style with functionality.
          </p>
          <button className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition">
            View Collection
          </button>
        </div>

        {/* Right Column */}
        <div>
          <img
            src="/20.png"
            alt="Chair"
            className="rounded-lg shadow-md h-619 w-478"
          />
        </div>
      </div>

      {/* Brand Features Section */}
      <div className="text-center mt-16 mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">
          What Makes Our Brand Different
        </h3>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-12">
        {/* Feature Cards */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-teal-700">Next day delivery</h4>
          <p className="text-gray-700 mt-2">
            Order before noon to get your product the next day on standard delivery.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-teal-700">Made by true artisans</h4>
          <p className="text-gray-700 mt-2">
            Our chairs are handcrafted with passion and expert craftsmanship.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-teal-700">Unbeatable prices</h4>
          <p className="text-gray-700 mt-2">
            We offer chairs at the best prices anywhere in the market.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-teal-700">Recycled packaging</h4>
          <p className="text-gray-700 mt-2">
            Sustainability is key — all of our packaging is recycled.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="text-center mt-16 mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">Our Popular Products</h3>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12">
        {/* Product Cards */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="/Large.png"
            alt="The Popular suede sofa"
            className="rounded-lg w-full h-64 object-cover"
          />
          <h4 className="text-lg font-semibold text-gray-800 mt-8 h-630 w-375">
            The Popular suede sofa
          </h4>
          <p className="text-teal-700 font-bold mt-2">$99.00</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center h-305 w-462">
          <img
            src="/Parent.png"
            alt="The Dandy chair"
            className="rounded-lg w-full h-64 object-cover"
          />
          <h4 className="text-lg font-semibold text-gray-800 mt-4">The Dandy chair</h4>
          <p className="text-teal-700 font-bold mt-2">$99.00</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center h-305 w-462">
          <img
            src="/Parent1.png"
            alt="The Dandy chair"
            className="rounded-lg w-full h-64 object-cover h-630 w-375"
          />
          <h4 className="text-lg font-semibold text-gray-800 mt-4">The Dandy chair</h4>
          <p className="text-teal-700 font-bold mt-2">$99.00</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
