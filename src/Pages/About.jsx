import React from 'react';
import './AboutUs.css'; // Importing CSS file for styling
import logo from '../Assets/DS_logo.png'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="header">
        <h1><span className="company-name">DS Ayurveda</span></h1>
        <img className="logo" src={logo} alt="DS Ayurveda Logo" />
      </div>
      <div className="company-details">
        <p><strong>Company Name:</strong> DS Ayurveda</p>
        <p><strong>Email:</strong> <a href="mailto:dsayurveda01@gmail.com">dsayurveda01@gmail.com</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/8744857352">8744857352</a></p>
      </div>
      <div className="company-description">
        <p>Welcome to DS Ayurveda, where tradition meets innovation. We are dedicated to harnessing the power of Ayurveda to promote holistic wellness and vitality.</p>
        <p>At DS Ayurveda, we believe in the timeless wisdom of Ayurveda and its ability to enhance every aspect of life. Our mission is to provide high-quality Ayurvedic products and services that empower individuals to achieve optimal health and well-being.</p>
        <p>With a commitment to authenticity and excellence, we carefully source the finest herbs and ingredients to create formulations that are both effective and safe. Our products undergo rigorous quality control processes to ensure purity and potency.</p>
        <p>Whether you are seeking natural remedies for specific health concerns or simply striving to maintain balance and vitality, DS Ayurveda is here to support you on your wellness journey.</p>
        <p>Thank you for choosing DS Ayurveda as your trusted partner in health and wellness.</p>
      </div>
    </div>
  );
}

export default AboutUs;
