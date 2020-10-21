import React, { useState, useEffect } from "react";
import PopUp from "../PopUp";
import MenuItem from "../MenuItem";
import { MenuData } from "./MenuData";
import "./Menu.css";

function Menu() {
  const [smallDisplay, setsmallDisplay] = useState(window.innerWidth < 615);

  const updateDisplay = () => setsmallDisplay(window.innerWidth < 615);

  useEffect(() => {
    window.addEventListener("resize", updateDisplay);
    return () => window.removeEventListener("resize", updateDisplay);
  });

  const [showModal, setshowModal] = useState(false);

  const toggleModal = () => {
    setshowModal(!showModal);
  };

  const [clickedItem, setclickedItem] = useState(null);

  const clickedImage = (e) => {
    setclickedItem(e.target);
  };

  return (
    <div className="menu-container">
      <div
        className={`menu ${smallDisplay ? "flex-col center-items" : "flex"}`}
      >
        {MenuData.map((item, index) => {
          return (
            <MenuItem
              item={item}
              toggle={toggleModal}
              handleClick={clickedImage}
              key={index}
            />
          );
        })}
      </div>
      {showModal ? <PopUp toggle={toggleModal} item={clickedItem} /> : null}
    </div>
  );
}

export default Menu;
