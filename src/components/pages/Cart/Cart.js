import React, { useEffect } from "react";
import "./Cart.css";

function Cart({
  smallDisplay,
  cartItems,
  removeCartItem,
  totalItems,
  totalPrice,
}) {
  return (
    <div className="cart-container flex">
      <div className="cart-display flex-col">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <div className="cart-item flex" key={item.id}>
                <div className="cart-item-image-container">
                  <img src={item.imgPath} alt={item.name} />
                </div>
                <div className="cart-item-information comm-text flex-col">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-quantity-container flex">
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={item.count}
                      placeholder="Quantity"
                      readOnly
                    />
                  </div>
                  <div className="cart-item-price">{`$${item.price}`}</div>
                </div>
                <div
                  className="cart-item-remove flex"
                  onClick={() => {
                    removeCartItem(item);
                  }}
                >
                  <i
                    className="fa fa-minus"
                    style={{ fontSize: "20px", color: "red" }}
                  ></i>
                </div>
              </div>
            );
          })
        ) : (
          <div className="cart-container flex">
            <p className="empty-cart-message">Your cart is empty</p>
          </div>
        )}
      </div>
      <div className="cart-summary comm-text flex-col">
        <h2>Order Summary</h2>
        <div className="total-items flex">
          <p>Total Drinks:</p>
          <p>{`${totalItems}`}</p>
        </div>
        <div className="total-price flex">
          <p>Total: </p>
          <p>{`$${totalPrice}`}</p>
        </div>
        {totalItems === 0 ? null : (
          <button type="button" className="checkout">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
