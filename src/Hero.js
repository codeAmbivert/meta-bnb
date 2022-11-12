import React from "react";
import heroImg from "./images/hero-images.png";
import MBTlogo from "./images/MBToken-logo.png";
import MMlogo from "./images/metamask-logo.png";
import OSlogo from "./images/opensea-logo.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__bold_text">
            Rent a <span className="bold_text_span">Place</span> away from
            <br /> <span className="bold_text_span">Home</span> in the{" "}
            <span className="bold_text_span">Metaverse</span>
          </p>
          <p className="hero__normal_text">
            we provide you access to luxury and affordable houses
            <br /> in the metaverse, get a chance to turn your
            <br /> imagination to reality at your comfort zone
          </p>
          <div className="hero__input">
            <input type="text" placeholder="Search for location" />
            <button>Search</button>
          </div>
        </div>
        <div className="hero__images">
          <img src={heroImg} alt="hero images" />
        </div>
      </div>
      <div className="hero__logos">
        <img src={MBTlogo} alt="metabnb token logo" />
        <img src={MMlogo} alt="metamask logo" />
        <img src={OSlogo} alt="opensea logo" />
      </div>
    </div>
  );
}

export default Hero;
