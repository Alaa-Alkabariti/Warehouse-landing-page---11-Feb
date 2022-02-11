import React, { useState } from "react";
import "./index.css";
import logo from "../../Images/logo.png";
import SocialIcon from "../socialIcon";

function Navbar() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="leftNav">
            <img className="logo" src={logo} />
            <ul>
              <li>Home</li>
              <li>Founder</li>
              <li>About Us</li>
              <li>Mission&Vision</li>
              <li>Our Values</li>
              <li>Our Team</li>
              <li>Our Customers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="menu">
            <button className="orderNow">Order Now</button>
            <button className="signIn">
              Sign in {/* <FontAwesomeIcon icon="fa-solid fa-phone" /> */}
            </button>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Navbar;
