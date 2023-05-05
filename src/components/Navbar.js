import {useRef} from "react";
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import "../Styles/main.css";
import logo from '../images/logo.png';
function Navbar() {
const navRef = useRef();

const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
}
    return (
      <header>
        <img src={logo} alt="logo"/>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/aboutus">About Us</a>
            <a href="/#">Products</a>
            <a href="/#">Clients</a>
            <a href="/#">Success Stories</a>
            <Link to= "/contactus">Contact Us</Link>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
      </header>
    );
  }
  
  export default Navbar;