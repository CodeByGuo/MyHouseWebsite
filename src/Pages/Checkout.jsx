import React from 'react';
import { CartContext } from "../Pages/CartContent.jsx";
import Layout from "../components/Layout.jsx";
const CheckoutPage = () => {
  const context = React.useContext(CartContext);
  const cartItems = context ? context.cartItems : [];

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, currentItem) => total + currentItem.price, 0);

  const handleCheckout = () => {
    // Handle the checkout action (e.g., redirect to payment page)
    console.log('Proceed to checkout');
  };

  return (
    <Layout>
      <h1 className='checkout-title'>Checkout</h1>
      <div className="checkout-items">
        {cartItems.map((item, index) => (
          <div key={index} className="checkout-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-total">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
      <button className="proceed-to-checkout-btn" onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </Layout>
  );
};

export default CheckoutPage;
