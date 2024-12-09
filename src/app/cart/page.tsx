"use client";
import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Library Stool Chair",
      image: "/images/orange-chair.png",
      price: 99,
      size: "L",
      quantity: 1,
    },
    {
      id: 2,
      name: "Library Stool Chair",
      image: "/images/brown-chair.png",
      price: 99,
      size: "L",
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id: number, increment: boolean) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-100">
      {/* Bag Section */}
      <div className="flex-1 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Bag</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src="/orange.png"
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, true)}
                    className="text-sm text-teal-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleQuantityChange(item.id, false)}
                    className="text-sm text-teal-600"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-sm text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <p className="font-medium">MRP: ${item.price}</p>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <div className="flex justify-between text-gray-600 mb-2">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-gray-600 mb-2">
          <p>Estimated Delivery & Handling</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between text-gray-800 font-semibold text-lg mb-4">
          <p>Total</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <button className="w-full bg-teal-600 text-white py-3 rounded-md text-lg hover:bg-teal-700 transition duration-300">
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
