
import {Routes, Route} from "react-router-dom";
//Pages
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Menu from "./Pages/Menu.jsx";
import Merch from "./Pages/MerchMain.jsx";
import Product from "./Pages/Product.jsx";
import {CartProvider} from "./Pages/CartContent.jsx";
import CheckoutPage from "./Pages/Checkout";


import Events from "./Pages/Events.jsx";
const Index =() => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home />} /> {/* Render the new HomePage component */}
                <Route path={"/menu"} element={<Menu />} />
                <Route path={"/gallery"} element={<Gallery/>}/>
                <Route path={"/merch"} element={<Merch/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"/events"} element={<Events/>}/>
                <Route path={"/checkout"} element={<CheckoutPage/>}/>
            </Routes>
        </>
    );
}

export default Index;