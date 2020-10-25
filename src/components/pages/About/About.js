import React, { useState } from "react";
import Banner from "../../../images/banner.jpeg";
import "./About.css";

function About({ smallDisplay }) {
  const [loadedImage, setloadedImage] = useState(false);

  return (
    <div className="about-content">
      <div className="banner">
        <img
          src={Banner}
          alt="Omomo home page banner"
          onLoad={() => setloadedImage(true)}
        />
      </div>
      {loadedImage ? (
        <div className="about-omomo flex-col center-items">
          <h1
            className={`font-brown comm-text ${
              smallDisplay ? "section-header-sm" : "section-header-med"
            }`}
          >
            ABOUT OMOMO
          </h1>
          <p
            className={`comm-text ${
              smallDisplay ? "section-text-sm" : "section-text-med"
            }`}
          >
            Our mission is to create high quality drinks without compromising
            quality. All of our drinks come with a guarantee that the finest
            ingredients are being used. Pure, honest, and simple.
          </p>
        </div>
      ) : (
        <div className="blank"></div>
      )}
    </div>
  );
}

export default About;
