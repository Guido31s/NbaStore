import React from 'react'
import { useCartContext } from "../../context/CartContext";
import Item from "../../components/Item/Item"
const CartComponent = () => {
    
    const { cart, removeItem, clear } = useCartContext();

    return (
        <div className="container row text-center justify-content-between m-auto">
           {cart.map((cart) => {
               return (
                   <div className="col-4 justify-items-center">
                   <Item data={cart}/>
                   <button className="btn btn-outline-secondary rounded-0 col-4" onClick={removeItem}>Remove</button>
                   </div>
               )
           })}
           <button className="btn btn-sm btn-outline-secondary rounded-0" onClick={clear}>Limpiar Carrito</button>
        </div>
    )
}

export default CartComponent
