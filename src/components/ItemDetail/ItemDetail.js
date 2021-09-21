import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom"
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

const ItemDetail = ({ data }) => {

  const [cart, setCart] = useState(0)
  const { addToCart} = useCartContext()
  
  const onAdd = (quantity) => {
    setCart((addToCart (data[0], quantity)), cart);
  }
  
    return (
      <div className="container-fluid justify-content-center">
        <div className="d-flex align-items-center row">
          <div className="col-12 col-xl-6"><img className="img-fluid" src={data[0].img2} alt={data[0].title}></img></div>
            <Card.Body className="col-12 col-xl-6 mt-4">
              <Card.Title>{data[0].title}</Card.Title>
              <Card.Text>Precio: ${data[0].price}</Card.Text>
              <Card.Text>{data[0].category}</Card.Text>
              <Card.Text >{data[0].description}</Card.Text>
              { cart < 1 ? <ItemCount
              initial="1"
              stock="10"
              onAdd={onAdd}
            /> :
          <div style={{display: "inline"}}> 
          
            <Link to="/cart">
              <button className="btn btn-outline-secondary rounded-0 mt-1">Comprar</button>
            </Link>
            </div>}
            </Card.Body>
          
        </div>
      </div>
    );
  };
  
  export default ItemDetail;