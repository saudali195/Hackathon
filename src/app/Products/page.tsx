// pages/products.tsx

import React from 'react';

const Products: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        <div>
          <img
            src="/Image-4.png"
            alt="Library Stool Chair"
            className="rounded-lg shadow-md"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Library Stool Chair</h1>
          <p className="text-2xl text-teal-600 font-semibold mb-4">$20.00 USD</p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim, sit amet consectetur adipiscing.
          </p>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-teal-700 transition">
            Add To Cart
          </button>
        </div>
        </div>
        <div className="text-center mb-20">
  <h2 className="text-3xl font-semibold text-[#272343] m-20">Our Products</h2>
</div>

<div className="flex flex-wrap justify-center gap-6">
  {/* Product 1 */}
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-72">
    <img src="/img-3.png" alt="Luxury Steel Chair" className="w-full h-72 object-cover rounded-lg" />
    <div className="mt-4 text-center">
      <h3 className="text-lg font-semibold text-[#272343]">Library Stool Chair</h3>
      <p className="text-teal-600 mt-2">$20</p>
    </div>
  </div>

  {/* Product 2 */}
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-72">
    <img src="/02.png" alt="Luxury Steel Chair" className="w-full h-72 object-cover rounded-lg" />
    <div className="mt-4 text-center">
      <h3 className="text-lg font-semibold text-[#272343]">Library Stool Chair</h3>
      <p className="text-teal-600 mt-2">$20</p>
    </div>
  </div>

  {/* Product 3 */}
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-72">
    <img src="/101.png" alt="Luxury Steel Chair" className="w-full h-72 object-cover rounded-lg" />
    <div className="mt-4 text-center">
      <h3 className="text-lg font-semibold text-[#272343]">Luxury Steel Chair</h3>
      <p className="text-teal-600 mt-2">$20</p>
    </div>
  </div>

  {/* Product 4 */}
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-72">
    <img src="/20.png" alt="Luxury Steel Chair" className="w-full h-72 object-cover rounded-lg" />
    <div className="mt-4 text-center">
      <h3 className="text-lg font-semibold text-[#272343]">Library Stool Chair</h3>
      <p className="text-teal-600 mt-2">$20</p>
    </div>
  </div>
</div>

      
      
    </section>
  );
};

export default Products;
