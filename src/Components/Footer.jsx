import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="bg-gray-800 h-16 flex items-center content-center position-fixed bottom-0">
        <h1 className="text-white text-3xl pl-5">
          <span className="text-blue-800">S</span>Cart
          </h1>
        <ul className="flex space-x-4 ml-auto pr-5 items-center">
          <li className="text-white hover:text-blue-500 cursor-pointer">Home</li>
          <li className="text-white hover:text-blue-500 cursor-pointer">Products</li>
          <li className="text-white hover:text-blue-500 cursor-pointer">About</li>
          
        </ul>
      </div>
    
    </>
  )
}

export default Footer