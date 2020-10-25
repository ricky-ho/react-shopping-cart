import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/pages/Home/Home.js";
import About from "./components/pages/About/About.js";
import Menu from "./components/pages/Menu/Menu.js";
import Cart from "./components/pages/Cart/Cart.js";
import ScrollToTop from "./components/pages/ScrollToTop";
import "./App.css";

function App() {
  const [smallDisplay, setsmallDisplay] = useState(window.innerWidth < 800);

  const updateDisplay = () => setsmallDisplay(window.innerWidth < 800);

  useEffect(() => {
    window.addEventListener("resize", updateDisplay);
    return () => window.removeEventListener("resize", updateDisplay);
  });

  const [cartItems, setCartItems] = useState([]);

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
    setCartItems([..._cartItems]);
  };

  const removeCartItem = (item) => {
    const _cartItems = [...cartItems];
    setCartItems(_cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
            />
          )}
        />
      </Switch>
      <Footer smallDisplay={smallDisplay} />
    </BrowserRouter>
  );
}

export default App;
