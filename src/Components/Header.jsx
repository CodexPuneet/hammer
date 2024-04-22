import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

const Header = () => {
  return (
    <div style={styles.container}>
      {/* Logo */}
      <img src={logo} alt="Logo" style={styles.logo} />

      {/* Navigation */}
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLink}>About</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/services" style={styles.navLink}>Services</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

// Styles
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 20px',
    backgroundColor: '#d9d9d9',
    color: '#fff',
  },
  logo: {
    width: '90px', // Adjust as needed
    height: '70px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
  },
};
