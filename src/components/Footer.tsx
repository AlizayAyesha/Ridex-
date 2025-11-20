import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="/assets/images/logo.svg" alt="Ridex logo" />
            </a>
            <p className="footer-text">
              Search for cheap rental cars in New York. With a diverse fleet of 19,000 vehicles, Waydex offers its
              consumers an attractive and fun selection.
            </p>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <a href="#" className="footer-link">About us</a>
            </li>
            <li>
              <a href="#" className="footer-link">Pricing plans</a>
            </li>
            <li>
              <a href="#" className="footer-link">Our blog</a>
            </li>
            <li>
              <a href="#" className="footer-link">Contacts</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Support</p>
            </li>
            <li>
              <a href="#" className="footer-link">Help center</a>
            </li>
            <li>
              <a href="#" className="footer-link">Ask a question</a>
            </li>
            <li>
              <a href="#" className="footer-link">Privacy policy</a>
            </li>
            <li>
              <a href="#" className="footer-link">Terms & conditions</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Neighborhoods in New York</p>
            </li>
            <li>
              <a href="#" className="footer-link">Manhattan</a>
            </li>
            <li>
              <a href="#" className="footer-link">Central New York City</a>
            </li>
            <li>
              <a href="#" className="footer-link">Upper East Side</a>
            </li>
            <li>
              <a href="#" className="footer-link">Queens</a>
            </li>
            <li>
              <a href="#" className="footer-link">Theater District</a>
            </li>
            <li>
              <a href="#" className="footer-link">Midtown</a>
            </li>
            <li>
              <a href="#" className="footer-link">SoHo</a>
            </li>
            <li>
              <a href="#" className="footer-link">Chelsea</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                {React.createElement('ion-icon', { name: 'logo-facebook' })}
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                {React.createElement('ion-icon', { name: 'logo-instagram' })}
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                {React.createElement('ion-icon', { name: 'logo-twitter' })}
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                {React.createElement('ion-icon', { name: 'logo-linkedin' })}
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                {React.createElement('ion-icon', { name: 'logo-skype' })}
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                {React.createElement('ion-icon', { name: 'mail-outline' })}
              </a>
            </li>
          </ul>
          <p className="copyright">
            &copy; 2025 <a href="#">Alizay Ayesha</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
