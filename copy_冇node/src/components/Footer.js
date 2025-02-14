import React from "react";

export default function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link">
            home
          </a>
        </li>
        <li>
          <a href="#about" className="footer-link">
            about
          </a>
        </li>
        <li>
          <a href="#services" className="footer-link">
            services
          </a>
        </li>
        <li>
          <a href="#tours" className="footer-link">
            tours
          </a>
        </li>
      </ul>
      <ul className="footer-icons">
        <li>
          <a href="https://www.facebook.com" className="footer-icon">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" className="footer-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" className="footer-icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">
        copyright&copy; backroads travel tours company <span id="date"></span>
        all rights reserved
      </p>
    </footer>
  );
}
