import React from "react";
import { Link } from "react-router-dom";
import OmomoLogo from "../images/omomo-logo-blk.svg";
import "./Navbar.css";

function Navbar() {
  return (
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
  );
}

export default Navbar;
