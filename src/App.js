import "./App.css";
import React from "react"
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./Views/Category/Category";
import ProductDetail from "./Views/ProductDetail/ProductDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartComponent from "./Views/CartComponent/CartComponent";
import { CartProvider } from "./context/CartContext";
import Formulario from "./Views/Formulario/Formulario";


function App() {


  return (
      <CartProvider>
        <Router>
          <div className="App">
            <NavBar/>
            <Switch>
              <Route path="/" component={ItemListContainer} exact/>
              <Route path="/checkout" component={Formulario} />
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
