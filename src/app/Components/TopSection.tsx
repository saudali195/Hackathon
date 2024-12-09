import React from "react";

const TopSection = () => {
  return (
    <div className="tailwind text-sm">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto px-4 py-2">
       
        <div className="flex items-center gap-2 mb-2 sm:mb-0 text-gray-300">
          <img src="/Group.png" alt="Shipping Icon" />
          <p>Free shipping on all orders</p>
        </div>

      
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center text-gray-300">
       
          <div className="flex items-center gap-2">
            <img src="/Vector.png" alt="Icon" />
            <a href="#" className="hover:underline">
              Eng
            </a>
          </div>

        
          <a href="#" className="hover:underline">
            FAQs
          </a>
          <a href="#" className="hover:underline">
            Need Help?
          </a>
        </div>
      </div>
    </div> 
  );
};

export default TopSection;
