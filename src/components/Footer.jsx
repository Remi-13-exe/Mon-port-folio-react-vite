import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Remi. Tous droits réservés.</p>
        <div className="footer-links">
          <a
            href="https://github.com/Remi-13-exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
