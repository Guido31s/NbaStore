import React from "react";
import Card from "react-bootstrap/Card";
const Item = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>Precio: ${data.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
