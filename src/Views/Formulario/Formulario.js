import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import { db } from "../../components/Firebase/Firebase";
import firebase from "firebase/app"
import { useCartContext } from "../../context/CartContext";
const Formulario = () => {

  const {cart, totalPrice, updateItemStock} = useCartContext();

const [ name, setName] = useState("");
const [ email, setEmail] = useState("");
const [ phone, setPhone] = useState("");


const handleOnChange = (e) => {
  if (e.target.name === "name") {
    setName(e.target.value)
  } else if (e.target.name === "email") {
    setEmail(e.target.value)
  } else if (e.target.name === "phone") {
    setPhone(e.target.value)
  }
}

const endBuy = async (e) => {
  e.preventDefault();
  const newOrder = {
    buyer: {
      Nombre: name,
      Correo: email,
      Telefono: phone,
    },
    items: cart,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: totalPrice,
  };
  const resp = await db.collection("compras").add(newOrder);
  alert(resp.id)
  cart.map((item) => {
    return updateItemStock(item.id, item.stock - item.quantity)
  })
};


  return (
          <> <Form className="container w-25" onSubmit={endBuy}>
            
  <Form.Group className="m-3">
  <Form.Label htmlFor="name">Nombre</Form.Label>
    <Form.Control type="text" placeholder="Nombre..." name="name" id="name" value={name} onChange={handleOnChange}/>
    <Form.Label htmlFor="email">Email</Form.Label>
    <Form.Control type="email" placeholder="Email..." name="email" id="email" value={email} onChange={handleOnChange}/>
    <Form.Label htmlFor="phone">Telefono</Form.Label>
    <Form.Control type="number" placeholder="Telefono..." name="phone" id="phone" value={phone} onChange={handleOnChange}/>
  </Form.Group>

  
 <button className="btn btn-outline-primary rounded-0" type="submit">
    Continuar
  </button> 
</Form>
</>
  );
};

export default Formulario;
