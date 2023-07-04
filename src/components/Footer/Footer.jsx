import { FaMapMarkerAlt } from 'react-icons/fa';
import footlogo from "../../assets/auto-avenue.png"
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src={footlogo} alt="Logo" />
        </div>
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="#">Models</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Drive Now</a>
            </li>
          </ul>
        </nav>
        <div className="footer-info">
          <div className="location">
            <FaMapMarkerAlt />
            <span>123 Street, Chandigarh, India</span>
            <br/>
            <br/>
          </div>
          <div className="credits">
            <span><strong>Designed by Vaibhav</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
