import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import Index from './Index'
import { CartProvider } from './Pages/CartContent';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CartProvider>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
      </CartProvider>
  </React.StrictMode>,
)
