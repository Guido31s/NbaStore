import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Contact from "./Views/Contact/Contact";
import About from "./Views/About/About";
import ProductDetail from "./Views/ProductDetail/ProductDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartComponent from "./Views/CartComponent/CartComponent";
import { CartProvider } from "./context/CartContext";
import { db } from "./components/Firebase/Firebase";
import { collection, query, getDocs, where } from 'firebase/firestore';


function App() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const docs = [];
    const q = query(collection(db, 'items'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push(doc.data().category);
      console.log(docs)
    });
    setCategories(docs);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
      <CartProvider>
        <Router>
          <div className="App">
            <NavBar data={categories} />
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
      </CartProvider>
  );
}

export default App;
