import React from "react";

const Navbar = () => {

  return (
    <>
      <div className="bg-gray-800 h-16 flex items-center content-center">
        <h1 className="text-white text-3xl pl-5">
          <span className="text-blue-800">S</span>Cart
        </h1>
        <ul className="flex space-x-4 ml-auto pr-5 items-center">
          <li className="text-white hover:text-blue-500 cursor-pointer">Home</li>
          <li className="text-white hover:text-blue-500 cursor-pointer">Products</li>
          <li className="text-white hover:text-blue-500 cursor-pointer">About</li>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded position-relative">
          <li className="text-white hover:text-blue-500 cursor-pointer">Cart<span className="position-absolute top-0"></span></li>
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
