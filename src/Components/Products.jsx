import React from "react";
import { useState, useEffect } from "react";

const Products = () => {
  const [Products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
  async function fetchProducts() {
    let url = "https://dummyjson.com/products?limit12";
    let response = await fetch(url);
    try {
      if (response.ok) {
        let data = await response.json();
        console.log(data.products);
        setProducts(data.products);
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  return (
      <>
        <div className="flex flex-wrap">
      {Products.map((products) => (
        <div className="card gap-4 p-5" style={{ width: "25%"}} >
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div key={products.id} className="mb-4">
              <div className="flex justify-center items-center h-64 mb-4 bg-gray-300 rounded-t-lg">
                <img
                src={products.images[0]}
                alt={products.title}
                className="mb-4 h-50"
              />
              </div>
              <h2 className="text-xl font-bold mb-2">{products.title}</h2>
              <p className="text-gray-700 mb-4 line-clamp-3">{products.description}</p>
              <button  className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer border">
                Add to Cart
              </button>
               <button className="bg-white-500 cursor-pointer text-blue-500 font-bold py-2 px-4 rounded ml-5 border hover:bg-blue-500 hover:text-white">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Products;
