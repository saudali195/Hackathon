import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b pb-6">
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Comforty</h2>
            <p className="text-sm">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="flex mt-4 space-x-3">
              <a href="/Logo.png" className="text-gray-500 hover:text-teal-900">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/g2.png" className="text-gray-500 hover:text-teal-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/g3.png" className="text-gray-500 hover:text-teal-900">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/g4.png" className="text-black-500 hover:text-teal-900">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="/g5.png" className="text-gray-500 hover:text-teal-900">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Sofa</a></li>
              <li><a href="#" className="hover:text-gray-900">Armchair</a></li>
              <li><a href="#" className="hover:text-gray-900">Wing Chair</a></li>
              <li><a href="#" className="hover:text-gray-900">Desk Chair</a></li>
              <li><a href="#" className="hover:text-gray-900">Wooden Chair</a></li>
              <li><a href="#" className="hover:text-gray-900">Park Bench</a></li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Help & Support</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Help</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">
            © 2024 - Blogy - Designed & Developed by <a href="#" className="text-blue-500 hover:underline">XYRON</a>
          </p>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <img src="/123.png" alt="Paypal" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
