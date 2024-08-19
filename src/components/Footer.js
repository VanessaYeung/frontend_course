import React from "react";
import PageLinks from "./PageLinks.js";
import SocialLinks from "./SocialLinks.js";
export default function Footer() {
  return (
    <footer className="section footer">
      <PageLinks groupClass="footer-links" itemClass="footer-link" nav_id="" />
      <SocialLinks groupClass="footer-icons" itemClass="footer-icon" />
      <p className="copyright">
        copyright&copy; smile duck travel tours company{" "}
        <span id="date">{new Date().getFullYear()} </span>
        all rights reserved
      </p>
    </footer>
  );
}
// line11 add {new Date().getFullYear()} to get the current year because it is a javascript function so we don't need to add details in the code
