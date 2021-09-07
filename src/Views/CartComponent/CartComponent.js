import React from 'react'
import { useCartContext } from "../../context/CartContext";
import Item from "../../components/Item/Item"
import {Link} from "react-router-dom"
const CartComponent = () => {
    
    const { cart, removeItem, clear } = useCartContext();
    const totalPrice = cart.reduce((acc, item) => { return acc + (item.quantity * item.price) }, 0)
    const cartLength = cart.reduce((acc, item) => { return acc + item.quantity }, 0);
    return (
        <div className="container row text-center justify-content-between m-auto">
           {cart.map((cart) => {
               return (
                   <div className="col-4 justify-content-center">
                   <Item data={cart}/>
                   <button className="btn btn-outline-secondary rounded-0" onClick={() => {removeItem(cart.id)}}>Remove</button>
                   </div>
               )
           })}
           <h3>Total a pagar: ${totalPrice}</h3>
           {cartLength ? <button className="btn btn-sm btn-outline-secondary rounded-0" onClick={clear}>Limpiar Carrito</button> : 
           <Link to="/">
           <h3>No hay productos</h3> </Link>}
          
        </div>
    )
}

export default CartComponent
