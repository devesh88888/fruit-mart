// src/components/Cart.js

import React from "react";
import "./Cart.css";
import products from "../data/products"; // Import the products data

const Cart = ({ cart, removeFromCart, calculateTotalPrice }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {Object.keys(cart).map((productId) => {
          const product = products.find(
            (p) => p.id === parseInt(productId, 10)
          );
          if (product) {
            return (
              <li key={product.id}>
                {product.name} - ${product.price.toFixed(2)} (Quantity:{" "}
                {cart[productId]})
                <button onClick={() => removeFromCart(productId)}>
                  Remove
                </button>
              </li>
            );
          }
          return null;
        })}
      </ul>
      <div className="total-price">
        <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
