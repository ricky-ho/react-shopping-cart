import React from "react";

function MenuItem({ smallDisplay, item, toggleModal, handleClick }) {
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
          toggleModal();
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
