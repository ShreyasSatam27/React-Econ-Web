import React from "react";

const Navbar = () => {

  return (
    <>
      <div className="bg-gray-800 h-16 flex items-center content-center">
        <h1 className="text-white text-3xl pl-5">
          <span className="text-blue-800">S</span>Cart
        </h1>
        <ul className="flex space-x-4 ml-auto pr-5 items-center">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search products..."
              className="px-5 py-2 rounded-md border text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer ml-2">
              Search
            </button>
          </div>
          <li className="text-white hover:text-blue-500 cursor-pointer">Products</li>
          <li className="text-white hover:text-blue-500 cursor-pointer">About</li>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded position-relative">
          <li className="text-white cursor-pointer">Cart</li>
          </button>
          <span className="CharIcon">0</span>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
