import Link from 'next/link';
import React from 'react';
import { FaShoppingCart, } from 'react-icons/fa';

const NextSection: React.FC = () => {
  return (
    <div className="bg-[#f0f2f3] w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-4">
        {/* Logo and Heading */}
        <div className="flex items-center gap-4">
          <img src="/Logo.png" alt="Comforty Logo" className="h-8" />
          <div className="text-2xl font-semibold text-[#272343]">Comforty</div>
        </div>

        <div className="flex items-center gap-6">
          {/* Cart Button with Navigation */}
          <Link href="/cart">
            <div className="relative flex items-center bg-white text-[#272343] rounded-lg px-4 py-2 gap-3 shadow-md cursor-pointer">
              <FaShoppingCart size={20} />
              <span>Cart</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                2
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-white w-full border-b">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-teal-600 font-medium hover:underline">
              Home
            </Link>
            <Link href="/contact" className="text-gray-700 hover:underline">
              Shop
            </Link>
            <Link href="/Products" className="text-gray-700 hover:underline">
            Products
            </Link>
            <Link href="/pages" className="text-gray-700 hover:underline">
              Pages
            </Link>
            <Link href="/about" className="text-gray-700 hover:underline">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextSection;
