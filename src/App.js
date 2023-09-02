// src/App.js

import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./data/products";

function App() {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    const productId = product.id.toString();
    setCart({
      ...cart,
      [productId]: (cart[productId] || 0) + 1,
    });
  };

  const removeFromCart = (productId) => {
    const updatedCart = { ...cart };
    if (updatedCart[productId] > 1) {
      updatedCart[productId] -= 1;
    } else {
      delete updatedCart[productId];
    }
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return Object.keys(cart).reduce((total, productId) => {
      const product = products.find((p) => p.id === parseInt(productId, 10));
      if (product) {
        return total + product.price * cart[productId];
      }
      return total;
    }, 0);
  };

  return (
    <div className="App">
      <h1>Fruit Mart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        calculateTotalPrice={calculateTotalPrice}
      />
    </div>
  );
}

export default App;
