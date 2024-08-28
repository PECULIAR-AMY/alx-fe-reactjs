import React from 'react';
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div class="footer-logo">
        {/* <img src="" alt="Logo"> */}
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
      {/* <div class="footer-social-media"> */}
        <h4>Follow Us</h4>
  <div>
<FaFacebook />

  </div>        
      </div>
  );
}
  
export default Footer; 
