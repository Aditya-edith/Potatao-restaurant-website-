import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  const handleLinkedInRedirect = () => {
    window.location.href = "https://www.linkedin.com/in/aditya-sanwal-83b65331a/";
  };
  
  return (
    <div id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad
            voluptate quos quae corrupti totam alias eos? Ipsam dicta molestiae
            eligendi. Eveniet ipsum consequatur inventore officiis perferendis
            ut fuga autem!
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} 
            onClick={handleLinkedInRedirect}
            alt="LinkedIn Profile"
            className="linkedin-icon"
            />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 7906657793</li>
            <li>adityasanwal1@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 c Tomato.com -All right Reserved
      </p>
    </div>
  );
};

export default Footer;
