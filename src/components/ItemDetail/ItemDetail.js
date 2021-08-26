import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>Precio: ${data.price}</Card.Text>
        <Card.Text>{data.category}</Card.Text>
        <Card.Text>{data.description}</Card.Text>
      </Card.Body>
      <ItemCount
        initial="1"
        stock="10"
        onAdd={() => console.log(`Se han añadido los productos`)}
      />
    </Card>
  );
};

export default ItemDetail;
