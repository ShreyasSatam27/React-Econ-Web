import { useState } from 'react'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./App.css";
import Products from "./Components/Products";

function App() {
const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    alert(`${product.title} has been added to the cart!`);
    setCart((prevCart) => [...prevCart, product]);
  }
  return (
    <>
    <Navbar cart={cart}/>
    <Products onAddToCart={handleAddToCart}/>
    <Footer />
    </>
  );
}

export default App;
