import React from "react";
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="feastify-logo" className="logo" src="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
