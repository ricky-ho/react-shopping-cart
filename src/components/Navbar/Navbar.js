import React, { useState } from "react";
import { Link } from "react-router-dom";
import OmomoLogo from "../../images/omomo-logo-blk.svg";
import { MenuLinkData } from "../LinkData.js";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "./Navbar.css";

function Navbar({ smallDisplay }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return smallDisplay ? (
    <>
      <div className="navbar flex">
        <div className="nav-logo-container">
          <Link to="/">
            <img src={OmomoLogo} alt="Omomo Tea Shoppe Logo" />
          </Link>
        </div>
        <div className="menu-icon-container flex center-items">
          <i
            className="fa fa-bars menu-icon"
            onClick={showSidebar}
            style={{ fontSize: "50px" }}
          ></i>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active flex" : "nav-menu flex"}>
        <ul className="nav-menu-links comm-text">
          <li className="nav-menu-toggle">
            <i
              className="fa fa-times"
              onClick={showSidebar}
              style={{ fontSize: "40px" }}
            ></i>
          </li>
          {MenuLinkData.map((item, index) => {
            return (
              <li className="nav-menu-link" key={index}>
                <Link to={item.path} onClick={showSidebar} style={item.style}>
                  <p className="nav-menu-text">{item.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  ) : (
    <>
      <nav className="navbar flex">
        <div className="nav-logo-container">
          <Link to="/">
            <img src={OmomoLogo} alt="Omomo Tea Shoppe Logo" />
          </Link>
        </div>
        <ul className="nav-links comm-text flex">
          <Link to="/about" className="link center-items link-black flex">
            <li>About</li>
          </Link>
          <Link to="/menu" className="link center-items link-brown flex">
            <li>Menu</li>
          </Link>
          <div className="cart flex center-items">
            <Link to="/cart">
              <li>
                <i
                  className="fa fa-shopping-cart"
                  style={{ fontSize: "25px" }}
                ></i>
              </li>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
