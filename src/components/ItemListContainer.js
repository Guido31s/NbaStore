import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  return (
    <div className="container">
      <h1>{props.greeting}</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
