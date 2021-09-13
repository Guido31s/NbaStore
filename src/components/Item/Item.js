import React from "react";
import Card from "react-bootstrap/Card";
const Item = ({ data }) => {
  return (
    <Card style={{ width: "20rem" }} className="col-6">
      <Card.Img variant="top" src={data.img1} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>Precio: ${data.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
