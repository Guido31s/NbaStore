import React from "react";
import Card from "react-bootstrap/Card";
const ItemDetail = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.price}</Card.Text>
        <Card.Text>{data.category}</Card.Text>
        <Card.Text>{data.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
