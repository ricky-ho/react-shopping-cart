import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/pages/Home/Home.js";
import About from "./components/pages/About/About.js";
import Menu from "./components/pages/Menu/Menu.js";
import Cart from "./components/pages/Cart/Cart.js";
import ScrollToTop from "./components/pages/ScrollToTop";
import "./App.css";

function App() {
  /* Display */
  const [smallDisplay, setsmallDisplay] = useState(window.innerWidth < 800);
  const updateDisplay = () => setsmallDisplay(window.innerWidth < 800);
  useEffect(() => {
    window.addEventListener("resize", updateDisplay);
    return () => window.removeEventListener("resize", updateDisplay);
  });

  /* Cart Functionality */
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item, quantity) => {
    const _cartItems = [...cartItems];
    let inCart = false;
    _cartItems.forEach((cartItem) => {
      if (cartItem.id === item.id) {
        if (cartItem.count + quantity < 10) {
          cartItem.count += quantity;
        } else {
          cartItem.count = 10;
        }
        inCart = true;
      }
    });
    if (!inCart) {
      _cartItems.push({ ...item, count: quantity });
    }
    calculateTotals(_cartItems);
    setCartItems(_cartItems);
  };

  const removeCartItem = (item) => {
    const _cartItems = [...cartItems].filter(
      (cartItem) => cartItem.id !== item.id
    );
    calculateTotals(_cartItems);
    setCartItems(_cartItems);
  };

  const calculateTotals = (cartItems) => {
    let runningPrice = 0;
    let runningItems = 0;
    cartItems.forEach((item) => {
      runningPrice += item.count * item.price;
      runningItems += item.count;
    });
    setTotalItems(runningItems);
    setTotalPrice(runningPrice);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar smallDisplay={smallDisplay} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home smallDisplay={smallDisplay} />}
        />
        <Route
          path="/about"
          render={() => <About smallDisplay={smallDisplay} />}
        />
        <Route
          path="/menu"
          render={() => (
            <Menu smallDisplay={smallDisplay} addToCart={addToCart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              smallDisplay={smallDisplay}
              cartItems={cartItems}
              removeCartItem={removeCartItem}
              totalItems={totalItems}
              totalPrice={totalPrice}
            />
          )}
        />
      </Switch>
      <Footer smallDisplay={smallDisplay} />
    </>
  );
}

export default App;
