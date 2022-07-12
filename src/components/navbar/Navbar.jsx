import React from "react";
import logo from "../../assets/DD-logo-2.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo-container">
        <img className="navbar__logo" src={logo} alt="logo" />
      </div>
      <div className="navbar__links-container">
        <div>
          <a
            className="navbar__links-item"
            href="https://custom-mint-front-end-2.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Home
          </a>
        </div>
        <div>
          <div to="/mint" className="navbar__links-item">
            Mint
          </div>
        </div>
        <div>
          <a
            className="navbar__links-item"
            href="https://custom-mint-front-end-2.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Community
          </a>
        </div>
        <button className="navbar__button">Connect</button>
      </div>
    </div>
  );
};

export default Navbar;
