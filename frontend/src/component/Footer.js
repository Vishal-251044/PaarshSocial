import '../component_CSS/Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo">
        <Link to="/">
          <span className="logo-part FP">Paarsh</span>
          <span className="logo-part way">Social</span>
        </Link>
      </div>

      {/* Sections with info */}
      <div className="footer-sections">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            PaarshSocial is a platform to connect, share, and engage with people worldwide. 
            Our mission is to bring communities closer and build meaningful connections.
          </p>
        </div>

        <div className="footer-section">
          <h4>Privacy Policy</h4>
          <p>
            We respect your privacy and are committed to protecting your personal data. 
            Learn how we collect, use, and safeguard your information.
          </p>
        </div>

        <div className="footer-section">
          <h4>Terms of Service</h4>
          <p>
            By using PaarshSocial, you agree to our community guidelines and fair use terms. 
            Read the details to understand your rights and responsibilities.
          </p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            Have questions or feedback? Reach out anytime at 
            <a href="mailto:support@paarshsocial.com"> support@paarshsocial.com</a>.
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; 2024 PaarshSocial. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
