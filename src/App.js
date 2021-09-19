import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Contact from "./Views/Contact/Contact";
import Category from "./Views/Category/Category";
import ProductDetail from "./Views/ProductDetail/ProductDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartComponent from "./Views/CartComponent/CartComponent";
import { CartProvider } from "./context/CartContext";


function App() {


  return (
      <CartProvider>
        <Router>
          <div className="App">
            <NavBar/>
            <Switch>
              <Route path="/" exact component={ItemListContainer} />
              <Route path="/contact" component={Contact} />
              <Route path="/category/:id" component={Category} />
              <Route path="/item/:id" component={ProductDetail} />
              <Route path="/cart" component={CartComponent} />
            </Switch>
          </div>
        </Router>
      </CartProvider>
  );
}

export default App;
