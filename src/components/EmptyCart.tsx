import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Cart.css";
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart">
      <img
        src={require("../assets/empty-cart.png")}
        alt="empty-cart-icon"
        className="empty-cart-icon"
      />
      <p className="empty-cart-heading">Your cart is empty.</p>
      <button onClick={() => navigate("/products")}>Find products</button>
    </div>
  );
};

export default EmptyCart;
