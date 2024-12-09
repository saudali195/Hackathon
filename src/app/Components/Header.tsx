"use client";
import { FaCheck } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="bg-black text-white text-sm py-2">
      <div className="container mx-auto flex justify-between items-center px-1">

        <div className="flex items-center space-x-2">
          <FaCheck />
          <span className="font-semibold">Summer Sale:</span> Free Delivery on Orders Over $50!
        </div>


        <div className="flex items-center space-x-4">

          <select className="bg-black text-white border-none outline-none">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>

          <button className="hover:underline p-2 rounded transition duration-200">FAQs</button>
          <button className="hover:underline p-2 rounded transition duration-200">Help</button>
        </div>
      </div>
    </div>
  );
}