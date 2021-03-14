import React from "react";
import "./style.css";

const CartItems = ({
  smallDisplay,
  items,
  incrementItemQuantity,
  decrementItemQuantity,
}) => {
  return items.map((item) => {
    return (
      <div
        className={`flex ${smallDisplay ? "cart-item-sm" : "cart-item"}`}
        key={item.id}
      >
        <div className="cart-item-image-container">
          <img src={item.imgMenu} alt={item.name} />
        </div>
        <div className="cart-item-info comm-text flex-col">
          <div>{item.name}</div>
          <div className="cart-item-quantity flex">
            <input
              type="number"
              min={1}
              max={10}
              value={item.count}
              placeholder="Quantity"
              readOnly
            />
          </div>
          <div className="font-brown">{`$${item.price.toFixed(2)}`}</div>
        </div>
        <div
          className="cart-item-btn increment flex"
          onClick={() => {
            incrementItemQuantity(item);
          }}
        >
          <i
            className="fa fa-plus"
            style={{ fontSize: "20px", color: "#596c5a" }}
          ></i>
        </div>
        <div
          className="cart-item-btn decrement flex"
          onClick={() => {
            decrementItemQuantity(item);
          }}
        >
          <i
            className="fa fa-minus"
            style={{ fontSize: "20px", color: "#f00" }}
          ></i>
        </div>
      </div>
    );
  });
};

export default CartItems;
