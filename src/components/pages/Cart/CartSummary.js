import React from "react";

const CartSummary = ({ smallDisplay, items, totalItems, totalPrice }) => {
  return (
    <div
      className={`${
        smallDisplay ? "cart-summary-sm" : "cart-summary"
      } comm-text flex-col`}
    >
      <h2 className="cart-summary-title">ORDER SUMMARY</h2>
      <div className="flex-col">
        {items.map((item) => {
          return (
            <div className="flex-col">
              <div className="item-breakdown flex">
                <div>{item.count} x</div>
                <div style={{ textAlign: "left", width: "150px" }}>
                  {item.abbr}
                </div>
                <div>${(item.count * item.price).toFixed(2)}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <p>SUBTOTAL: ({totalItems} items)</p>
        <p>{`$${totalPrice}`}</p>
      </div>
      {totalItems === 0 ? null : (
        <button type="button" className="checkout">
          PLACE ORDER
        </button>
      )}
    </div>
  );
};

export default CartSummary;
