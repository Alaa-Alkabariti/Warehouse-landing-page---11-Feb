import React, { useState } from "react";
import "./index.css";
import hero from "../../Images/hero.png";
import SocialIcon from "../socialIcon";
import Navbar from "../../Components/Navbar/index.js";

function Hero() {
  const [heroImage, setHeroImage] = useState(hero);
  return (
    <>
      <div className="hero">
        <img class src={heroImage} />
        <div className="social">
          <SocialIcon iconClass="fa-solid fa-phone fa-beat-fade" />
          <SocialIcon iconClass="fa-solid fa-envelope fa-beat-fade" />
          <SocialIcon iconClass="fa-solid fa-fax fa-beat-fade" />
          </div>
          <div className="textSection">
          <h1>Gaza Central Company</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem
          </p>
          <span>Let’s create your first order</span>
          <button className="orderNow">Order Now <i class="fa-solid fa-forward"></i> </button>
        </div>
        </div>
       
  
      <Navbar />
    </>
  );
}

export default Hero;
