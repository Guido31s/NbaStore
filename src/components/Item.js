import React from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
const Item = ({ data }) => {
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.city}</Card.Text>
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
