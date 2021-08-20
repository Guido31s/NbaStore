import React from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
const Item = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.status}</Card.Text>
        <ItemCount
          initial="1"
          stock="10"
          onAdd={() => console.log(`Se han añadido los productos`)}
        />
      </Card.Body>
    </Card>
  );
};

export default Item;
