import React, { useState, useEffect, useContext } from 'react'; // Added useContext here
import logo from '../assets/images/my-house-logo.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../Pages/CartContent.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../css/base.css'; 

const NavBar = () => {
    const [opacity, setOpacity] = useState(1);
    const { cartItems } = useContext(CartContext); 
    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const scrollPercentage = currentScroll / scrollHeight;
        const newOpacity = 1 - (scrollPercentage * 1.333);
        setOpacity(Math.max(0, newOpacity));
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header style={{ opacity }}>
            <nav className="navBar hover-underline-animation">
                <img className="navLogo" src={logo} alt="Logo" />
                <section>
                    <ul>
                        <li><Link to ={"/"}>HOME</Link></li>
                        <li><Link to={"/menu"}>MENU</Link></li>
                        <li><Link to={"/events"}>EVENTS</Link></li>
                        <li><Link to={"/gallery"}>GALLERY</Link></li>
                        <li><Link to={"/merch"}>MERCH</Link></li>
                        <li><Link to={"/contact"}>CONTACT</Link></li>
                        <li className='cart-icon'>
                            <Link to="/checkout">
                            <FontAwesomeIcon icon={faShoppingCart} className="icon-small"/>
                            {cartItems.length > 0 && <span>
                            ({cartItems.length})
                            </span>}
                            </Link>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
    );
}

export default NavBar;