import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";

function Modal({ smallDisplay, item, toggleModal, addToCart }) {
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
        <div id="close-btn" onClick={() => toggleModal()}>
          <i className="fa fa-times" style={{ fontSize: "30px" }}></i>
        </div>
        <div id="item-cover" className="flex">
          <img src={item.imgModal} alt={item.name}></img>
        </div>
        <div id="modal-actions" className="flex">
          <div id="quantity-form" className="flex">
            <button
              type="button"
              onClick={decrement}
              className="btn"
              disabled={quantity <= 1}
            >
              -
            </button>
            <div id="quantity-display">
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
              className="btn"
              disabled={quantity >= 10}
            >
              +
            </button>
          </div>
          <div id="add-to-cart">
            <button
              type="button"
              onClick={() => {
                toggleModal();
                addToCart(item, quantity);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
