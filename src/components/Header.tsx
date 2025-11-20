declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any;
    }
  }
}

import 'ionicons';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(prev => !prev);
  };

  return (
    <header className={`header ${navActive ? 'active' : ''}`} data-header>
      <div className="container">
        <div className="overlay" data-overlay onClick={toggleNav}></div>
        <a href="#" className="logo">
          <img src="./backup/assets/images/logo.svg" alt="Ridex logo" />
        </a>
        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>
            <li>
              <a href="#featured-car" className="navbar-link" data-nav-link>
                Explore cars
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link" data-nav-link>
                About us
              </a>
            </li>
            <li>
              <a href="#blog" className="navbar-link" data-nav-link>
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <div className="header-contact">
            <a href="tel:88002345678" className="contact-link">
              8 800 234 56 78
            </a>
            <span className="contact-time">Mon - Sat: 9:00 am - 6:00 pm</span>
          </div>
          <a href="#featured-car" className="btn" aria-labelledby="aria-label-txt">
            <ion-icon name="car-outline"></ion-icon>
            <span id="aria-label-txt">Explore cars</span>
          </a>
          <a href="#" className="btn user-btn" aria-label="Profile">
            <ion-icon name="person-outline"></ion-icon>
          </a>
          <button
            className="nav-toggle-btn"
            data-nav-toggle-btn
            aria-label="Toggle Menu"
            onClick={toggleNav}
          >
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
