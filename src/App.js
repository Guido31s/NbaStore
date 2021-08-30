import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Views/Home/Home";
import Contact from "./Views/Contact/Contact";
import About from "./Views/About/About";
import ProductDetail from "./Views/ProductDetail/ProductDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartComponent from "./Views/CartComponent/CartComponent";
function App() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    axios("https://fakestoreapi.com/products/categories").then((res) =>
      setCat(res.data)
    );
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar data={cat} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ProductDetail} />
          <Route path="/cart" component={CartComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
