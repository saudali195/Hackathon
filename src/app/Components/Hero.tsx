"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Use `next/navigation` for the App Router

const HeroSection = () => {
  const router = useRouter();

  const handleShopNowClick = () => {
    router.push("/cart"); // Navigate to the cart page
  };

  return (
    <section className="bg-[#F9FAFB] py-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center">
       
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#272343]">
            Best Furniture Collection <br /> For Your Interior.
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Explore our wide range of stylish and modern furniture.
          </p>
          <button
            className="mt-6 bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700"
            onClick={handleShopNowClick} // Add onClick event
          >
            Shop Now
          </button>
        </div>

       
        <div className="flex-1 mt-8 lg:mt-0 flex justify-center">
          <img
            src="/product.png"
            alt="Furniture"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Brands Section */}
      <div className="max-w-screen-xl mx-auto px-4 mt-10 flex flex-wrap justify-center items-center gap-6">
        <img src="/Logo-6.png" alt="Brand 1" className="h-87 w-85" /> 
        <img src="/Logo-7.png" alt="Brand 2" className="h-87 w-85" />
        <img src="/Logo-8.png" alt="Brand 3" className="h-87 w-85" />
        <img src="/Logo-9.png" alt="Brand 4" className="h-87 w-85" />
        <img src="/Logo-10.png" alt="Brand 5" className="h-87 w-85" />
        <img src="/Logo-11.png" alt="Brand 5" className="h-87 w-85" />
        <img src="/Logo-12.png" alt="Brand 5" className="h-87 w-85" />
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Featured Products Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#272343]">Featured Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {/* Product Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/20.png" alt="Luxury Steel Chair" className="w-full h-312 w-312 object-cover rounded-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#272343]">Luxury Stool Chair</h3>
                <p className="text-teal-600 mt-2">$20</p>
              </div>
            </div>
            {/* Product Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/img-02.png" alt="Luxury Steel Chair" className="w-full h-312 w-312 object-cover rounded-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#272343]">Luxury Stool Chair</h3>
                <p className="text-teal-600 mt-2">$20</p>
              </div>
            </div>
            {/* Product Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/orange.png" alt="Luxury Steel Chair" className="w-full h-40h-312 w-312 object-cover rounded-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#272343]">Luxury Stool Chair</h3>
                <p className="text-teal-600 mt-2">$20</p>
              </div>
            </div>
            {/* Product Card 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/01.png" alt="Luxury Steel Chair" className="w-full h-312 w-312 object-cover rounded-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#272343]">Luxury Stool Chair</h3>
                <p className="text-teal-600 mt-2">$20</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="text-center mt-16 ">
          <h2 className="text-3xl font-semibold text-[#272343]">Top Categories</h2> 
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
           
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/img-3.png" alt="Wing Chair" className="w-full h-424 w-424  object-cover rounded-lg" />
              <h3 className="text-lg font-semibold text-[#272343] text-center mt-4">Wing Chair</h3>
            </div>
            {/* Category Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/img-4.png" alt="Wooden Chair" className="w-full h-424 w-424  object-cover rounded-lg" />
              <h3 className="text-lg font-semibold text-[#272343] text-center mt-4">Wooden Chair</h3>
            </div>
            {/* Category Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/img-5.png" alt="Deck Chair" className="w-full h-424 w-424 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold text-[#272343] text-center mt-4">Deck Chair</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/img-3.png" alt="Deck Chair" className="w-full h-424 w-424 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold text-[#272343] text-center mt-4">Deck Chair</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-50 flex flex-col lg:flex-row items-center py-20">
        <div
          className="text-lg font-roboto font-bold text-gray-800 mr-8"
          style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
        >
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Main Image */}
          <div className="rounded-lg">
            <img
              src="/orange.png"
              alt="Orange Chair"
              width={600}
              height={800}
              className="w-full"
            />
          </div>

          {/* Smaller Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg">
              <img
                src="/01.png"
                alt="White Chair 1"
                width={300}
                height={400}
                className="w-full"
              />
            </div>
            <div className="rounded-lg">
              <img
                src="/20.png"
                alt="White Chair 2"
                width={300}
                height={400}
                className="w-full"
              />
            </div>
            <div className="rounded-lg">
              <img
                src="/02.png"
                alt="Grey Chair"
                width={300}
                height={400}
                className="w-full"
              />
            </div>
            <div className="rounded-lg">
              <img
                src="/20.png"
                alt="Another Chair"
                width={300}
                height={400}
                className="w-full"
              />
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-screen-xl mx-auto px-4">
        
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#272343]">Our Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/20.png" alt="Luxury Steel Chair" className="w-312 h-312 object-cover rounded-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#272343]">Luxury Steel Chair</h3>
                <p className="text-teal-600 mt-2">$20</p>
              </div>
            </div>
          
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/img-02.png" alt="Luxury Steel Chair" className="w-312 h-312 object-cover rounded-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#272343]">Luxury Steel Chair</h3>
                <p className="text-teal-600 mt-2">$20</p>
              </div>
            </div>
           
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/orange.png" alt="Luxury Steel Chair" className="w-312 h-312 object-cover rounded-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#272343]">Luxury Steel Chair</h3>
                <p className="text-teal-600 mt-2">$20</p>
              </div>
            </div>
           
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/01.png" alt="Luxury Steel Chair" className="w-312 h-312 object-cover rounded-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#272343]">Luxury Steel Chair</h3>
                <p className="text-teal-600 mt-2">$20</p>
              </div>
            </div>
          </div>
        </div>

     
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-[#272343]"></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {/* Category Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/img-3.png" alt="Luxury Steel Chair" className="w-312 h-312 object-cover rounded-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#272343]">Liabrary Stool Chair</h3>
                <p className="text-teal-600 mt-2">$20</p>
                </div>
              </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/02.png" alt="Luxury Steel Chair" className="w-312 h-312 object-cover rounded-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#272343]">Liabrary Stool Chair</h3>
                <p className="text-teal-600 mt-2">$20</p>
                </div>
              </div>
  
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/00.png" alt="Luxury Steel Chair" className="w-312 h-312 object-cover rounded-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#272343]">Luxury Steel Chair</h3>
                <p className="text-teal-600 mt-2">$20</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="/02.png" alt="Luxury Steel Chair" className="w-312 h-312 object-cover rounded-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#272343]">Liabrary Stool Chair</h3>
                <p className="text-teal-600 mt-2">$20</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>  
  );
  
};

export default HeroSection;
