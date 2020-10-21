import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeMenuData } from "./MenuData";
import OmomoVideo from "../../videos/omomo.mp4";
import "./Home.css";

function Home() {
  const [smallDisplay, setsmallDisplay] = useState(window.innerWidth < 900);

  const updateDisplay = () => {
    setsmallDisplay(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDisplay);
    return () => window.removeEventListener("resize", updateDisplay);
  });

  return (
    <>
      <div className="home-container center-items flex-col">
        <div className="home-video-container flex">
          <video autoPlay loop muted>
            <source src={OmomoVideo} type="video/mp4"></source>
          </video>
        </div>
        <div className="home-text-container center-items flex">
          <p
            className={`cpm-text ${
              smallDisplay ? "home-text-sm" : "home-text-med"
            }`}
          >
            We're a tea shop specializing in bringing you the best quality teas,
            creating memorable experiences with every sip.
          </p>
        </div>
        <div className="home-container center-items flex">
          <div className="gallery flex-col">
            {HomeMenuData.map((item, index) => {
              return (
                <div className="gallery-item" key={index}>
                  <img src={item.imgPath} alt={item.name} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-container center-items margin-bot-100 flex-col">
          <p className="home-text-menu margin-bot-25 cpm-text font-brown">
            VIEW OUR FULL MENU
          </p>
          <Link className="link link-black" to="/menu">
            <div className="menu-link comm-text">Menu</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
