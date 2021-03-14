import React, { useState } from "react";
import { Link } from "react-router-dom";

import OmomoLogo from "../../images/omomo-logo-blk.svg";
import { MenuLinkData } from "../Links.js";

import "./style.css";

const Navbar = ({ smallDisplay }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return smallDisplay ? (
    <header>
      <div className="navbar flex">
        <div className="nav-logo">
          <Link to="/">
            <img src={OmomoLogo} alt="Omomo Tea Shoppe Logo" />
          </Link>
        </div>
        <div className="menu-icon flex center-items">
          <i
            className="fa fa-bars"
            onClick={showSidebar}
            style={{ fontSize: "50px" }}
          ></i>
        </div>
      </div>
      <nav className={`nav-menu flex ${sidebar && "active"}`}>
        <ul className="comm-text">
          <li id="nav-menu-toggle">
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
                  <p>{item.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  ) : (
    <header>
      <nav className="navbar flex">
        <div className="nav-logo">
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
          <div id="cart-link" className="flex center-items">
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
    </header>
  );
};

export default Navbar;
