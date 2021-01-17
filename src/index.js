import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter basename={"/shopping-cart"}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
