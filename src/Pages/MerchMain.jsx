import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "../css/base.css";
import Layout from "../components/Layout.jsx";
import Product from "../Pages/Product";
import { useCart } from "../Pages/CartContent";
<link href="https://fonts.cdnfonts.com/css/druk-wide-bold" rel="stylesheet"></link>
const MySwal = withReactContent(Swal);

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage on mount
    const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCartItems);
  }, []);

  const addToCart = (name, price, imageName) => {
    const newCartItems = [...cartItems, { name, price, image: imageName }];
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));

    MySwal.fire({
      title: 'Product Added',
      text: `${name} has been added to the cart`,
      icon: 'success',
      timer: 1100,
      showConfirmButton: false,
      timerProgressBar: true, // Shows a timer progress bar
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer); // Stop timer on hover
        toast.addEventListener('mouseleave', Swal.resumeTimer); // Resume timer on mouse leave
      },
    });
  };

  return (
    <Layout>
      <h1 className='merchandise-title'>Merchandise</h1>
      <img src="../public/images/Line3.png" className='line-img' />
      <div className="product-grid">
        <Product 
          title="Clothing Item 1" 
          price={19.99} 
          image="../public/images/download.jpeg" 
          addToCart={addToCart} 
        />
        <Product 
          title="Clothing Item 1" 
          price={19.99} 
          image="../public/images/download.jpeg" 
          addToCart={addToCart} 
        />
        <Product 
          title="Clothing Item 1" 
          price={19.99} 
          image="../public/images/download.jpeg" 
          addToCart={addToCart} 
        />
        <Product 
          title="Clothing Item 1" 
          price={19.99} 
          image="../public/images/download.jpeg" 
          addToCart={addToCart} 
        />
        <Product 
          title="Clothing Item 1" 
          price={19.99} 
          image="../public/images/download.jpeg" 
          addToCart={addToCart} 
        />
        <Product 
          title="Clothing Item 1" 
          price={19.99} 
          image="../public/images/download.jpeg" 
          addToCart={addToCart} 
        />
        <Product 
          title="Clothing Item 1" 
          price={19.99} 
          image="../public/images/download.jpeg" 
          addToCart={addToCart} 
        />
        <Product 
          title="Clothing Item 1" 
          price={19.99} 
          image="../public/images/download.jpeg" 
          addToCart={addToCart} 
        />
        {/* ... other products ... */}
      </div>
    </Layout>
  );
}

export default App;
