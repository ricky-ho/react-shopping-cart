import React, { useState } from "react";
import Modal from "../../Modal/Modal.js";
import MenuItem from "./MenuItem";
import { MenuData } from "../../Data";
import "./Menu.css";

function Menu({ smallDisplay, addToCart }) {
  const [showModal, setshowModal] = useState(false);

  const toggleModal = () => {
    setshowModal(!showModal);
  };

  const [clickedItem, setclickedItem] = useState(null);

  const clickedMenuItem = (item) => {
    setclickedItem(item);
  };

  return (
    <div className="menu-container">
      <div className={`flex ${smallDisplay && "flex-col center-items"}`}>
        {MenuData.map((item) => {
          return (
            <MenuItem
              smallDisplay={smallDisplay}
              item={item}
              toggleModal={toggleModal}
              handleClick={clickedMenuItem}
              key={item.id}
            />
          );
        })}
      </div>
      {showModal && (
        <Modal
          toggleModal={toggleModal}
          item={clickedItem}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}

export default Menu;