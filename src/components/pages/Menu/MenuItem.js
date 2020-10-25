import React, { useState, useEffect } from "react";

function MenuItem({ item, toggle, handleClick }) {
  const [smallDisplay, setsmallDisplay] = useState(window.innerWidth < 615);

  const updateDisplay = () => setsmallDisplay(window.innerWidth < 615);

  useEffect(() => {
    window.addEventListener("resize", updateDisplay);
    return () => window.removeEventListener("resize", updateDisplay);
  });

  return (
    <div
      className={`menu-item ${
        smallDisplay ? "margin-bot-50" : "margin-right-25 margin-bot-25"
      }`}
    >
      <img
        src={item.imgPath}
        alt={item.name}
        onClick={() => {
          toggle();
          handleClick(item);
        }}
      />
      <div className="menu-item-description comm-text">
        <p className="menu-item-name">{item.name}</p>
        <p className="menu-item-price font-brown">{item.price}</p>
      </div>
    </div>
  );
}

export default MenuItem;
