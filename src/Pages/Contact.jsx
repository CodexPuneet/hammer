import React from 'react';
import './ContactUs.css'; // Import CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="header">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We'd love to hear from you!</p>
      </div>
      <div className="contact-details">
        <h2>Reach Out to Us</h2>
        <p><strong>Email:</strong> <a href="mailto:dsayurveda01@gmail.com">dsayurveda01@gmail.com</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/8744857352">8744857352</a></p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Ayurveda Street, Herbal City, Ayurville, ABC-12345</p>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
