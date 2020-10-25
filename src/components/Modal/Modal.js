import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";

function PopUp({ item, toggleModal, addToCart }) {
  const modalRef = useRef();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      toggleModal();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="modal flex center-items"
    >
      <div className="modal-content">
        <div className="close" onClick={() => toggleModal()}>
          <i className="fa fa-times" style={{ fontSize: "30px" }}></i>
        </div>
        <div className="item-information flex">
          {item.imgPath ? (
            <img src={item.imgPath} alt={item.name}></img>
          ) : (
            <div className="load-image-failed flex center-items">
              Image could not be displayed
            </div>
          )}
        </div>
        <div className="modal-actions flex">
          <form className="quantity-form flex">
            <button
              type="button"
              onClick={decrement}
              className="btn decrement-btn"
              disabled={quantity <= 1}
            >
              -
            </button>
            <div className="quantity-container">
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="quantity"
                min={1}
                max={10}
                value={quantity}
                readOnly
              ></input>
            </div>
            <button
              type="button"
              onClick={increment}
              className="btn increment-btn"
              disabled={quantity >= 10}
            >
              +
            </button>
          </form>
          <form className="add-to-cart-form">
            <div className="add-to-cart-container">
              <button
                type="button"
                className="add-to-cart-btn"
                onClick={() => {
                  toggleModal();
                  addToCart(item, quantity);
                }}
              >
                Add to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
