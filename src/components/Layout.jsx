import NavBar from "./NavBar.jsx";
import FooterBar from "./FooterBar.jsx";
import "../css/base.css"
import { CartProvider } from "../Pages/CartContent.jsx";
const Layout = ({children}) =>{
    return(
        <>
        <CartProvider>
            <div>
                <NavBar/>
            </div>
            <main>{children}</main>
            <FooterBar/>
        </CartProvider>
    </>
    );
}

export default Layout;