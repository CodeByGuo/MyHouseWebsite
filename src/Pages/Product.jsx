import React from 'react'; // Removed useContext import as it's not used here
import Layout from "../components/Layout.jsx";

const Product = ({ title, price, image, addToCart }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">${price}</p>
      <button 
        className="add-to-cart" 
        onClick={() => addToCart(title, price, image)} // Correct usage of addToCart
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
