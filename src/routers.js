import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import CartPage from './pages/cartPage'


function Routers() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/cart"  component={CartPage} />
    </BrowserRouter>
  );
}

export default Routers;