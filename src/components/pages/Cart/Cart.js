import React from "react";
import CartSummary from "./CartSummary";
import CartItems from "./CartItems";
import "./Cart.css";

function Cart({
  smallDisplay,
  cartItems,
  decrementItemQuantity,
  incrementItemQuantity,
  totalItems,
  totalPrice,
}) {
  return (
    <div
      className={`cart-container ${
        smallDisplay ? "flex-col align-center" : "flex"
      }`}
    >
      <CartSummary
        smallDisplay={smallDisplay}
        items={cartItems}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
      <div
        className={`${
          smallDisplay ? "cart-display-sm center-items" : "cart-display"
        } flex-col align-center`}
      >
        <CartItems
          smallDisplay={smallDisplay}
          items={cartItems}
          decrementItemQuantity={decrementItemQuantity}
          incrementItemQuantity={incrementItemQuantity}
        />
      </div>
    </div>
  );
}

export default Cart;
