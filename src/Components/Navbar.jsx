import React, { useState, useEffect } from 'react';

function Navbar() {
  const texts = [
    "50,000+ Happy Customers",
    "Free Shipping This Week On Every Order",
    "Summer Sale is Live!"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar" style={{ backgroundColor: '#333', padding: '10px' }}>
      <div className="navbar-brand">
        <span className="navbar-item" style={{ fontWeight: 'bold', color: '#fff' }}>{texts[currentTextIndex]}</span>
      </div>
    </nav>
  );
}

export default Navbar;
