import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container gradient-container">
      <div className="footer-links-container gradient">
        <div>
          <a
            className="footer__links-item"
            href="https://custom-mint-front-end-dom-git-master-paintincode.vercel.app/"
            rel="noreferrer"
          >
            Home
          </a>
        </div>
        <div>
          <a className="footer__links-item" href="/">
            Mint
          </a>
        </div>
        <div>
          <a
            className="footer__links-item"
            href="https://custom-mint-front-end-dom-git-master-paintincode.vercel.app/community"
            rel="noreferrer"
          >
            Community
          </a>
        </div>
        <div className="footer__button-container">
          <button className="footer__button">Connect</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
