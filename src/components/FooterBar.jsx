import logo from '../assets/images/my-house-logo.svg'
import {Link} from 'react-router-dom'
  
const FooterBar = () =>{
    return (
        <footer>
            <nav className="footerBar">
                <img className="footerLogo" src={logo} alt = "My House Logo"/>
                    <div className="footerLists">
                        <ul className="footerList">
                            <li><Link to={"/"}>HOME</Link></li>
                            <li><Link to={"/events"}>EVENTS</Link></li>
                            <li><Link to={"/gallery"}>GALLERY</Link></li>
                        </ul>
                        <ul className="footerList">
                            <li><Link to={"/contact"}>CONTACT</Link></li>
                            <li><Link to={"/menu"}>MENU</Link></li>
                            <li><Link to={"/merch"}>MERCH</Link></li>
                        </ul>
                    </div>
            </nav>
        </footer>

    );
}

export default FooterBar;