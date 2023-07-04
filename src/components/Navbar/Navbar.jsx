import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../../assets/auto-avenue.png"
import { CiLocationOn } from "react-icons/ci";
import { PiSteeringWheelLight } from "react-icons/pi"
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="left-section">
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/models" className="nav-link">
              Models
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-link">
              Brands
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/store" className="nav-link">
              Store
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li> */}
        </ul>

        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>
        </div>
        <div className="center-section">
        <Link to="/" className="navbar-logo">
          <img className="img-logo" src={logo} alt=" " />
        </Link>
        </div>
        <div className="right-section">
            <ul className='nav-menu'>
            <li className="nav-item"><CiLocationOn /></li>
            <li className='nav-item'><PiSteeringWheelLight /></li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
