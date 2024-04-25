import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'; // Importing CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>DS Ayurveda Pvt. Ltd.</p>
          <p>12, Herbal Store, Kangra</p>
          <p>Himanchal Pradesh, India</p>
          <p>Email: <a href="mailto:info@dsayurveda.com">info@dsayurveda.com</a></p>
          <p>Phone: <a href="tel:+91-8744857352">+91-8744857352</a></p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61555058949751"><i className="fab fa-facebook"><FacebookIcon/></i></a>
            {/* <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 DS Ayurveda Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
