import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './FollowUs.css'
const FollowUsSection = () => {
  return (
    <div className="follow-us-section">
      <div className="follow-us-content">
        <h2>Follow Us</h2>
        <ul className="follow-us-icons">
          <li>
            <a href="https://instagram.com/bigboytoyz_india" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/BBToyz" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/bigboytoyzindia" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div className="subscribe-form">
        <h3>Subscribe for Updates</h3>
        <form method="post" action="https://www.bigboytoyz.com/newsletterform">
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FollowUsSection;
