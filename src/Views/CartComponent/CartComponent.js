import React from 'react'
import { useCartContext } from "../../context/CartContext";
import {Link} from "react-router-dom"
const CartComponent = () => {
    
    const { cart, removeItem, clear } = useCartContext();
    const totalPrice = cart.reduce((acc, item) => { return parseInt(acc + (item.quantity * item.price)) }, 0)
    const cartLength = cart.reduce((acc, item) => { return acc + item.quantity }, 0);

    return (
<>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio por unidad</th>
      <th scope="col">Precio total</th>
    </tr>
  </thead>
           {cart.map((cart) => {
               return (

                   
  <tbody>
    <tr>
      <th scope="row">{cart.id}</th>
      <td>{cart.title}</td>
      <td>{cart.quantity}</td>
      <td>${cart.price}</td>
      <td>${cart.price * cart.quantity}</td>
      <button className="btn btn-warning rounded-0 mt-1" onClick={() => {removeItem(cart.id)}}>🗑</button>
    </tr>

  </tbody>)
})}
           </table>
           <h3>Total a pagar: ${totalPrice}</h3>
           {cartLength ? <div><button className="btn btn-md btn-danger rounded-0 m-3" onClick={clear}>Limpiar Carrito</button>
           <Link to="/contact"><button className="btn btn-md btn-success rounded-0 m-3">Confirmar Compra</button></Link></div> : 
           <Link to="/">
           <h3>No hay productos</h3> </Link>}
          </>
    )
}

export default CartComponent
