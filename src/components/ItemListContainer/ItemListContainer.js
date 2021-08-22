import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => setInfo(res));
  }, []);
  return (
    <div className="container ">
      <h1>{props.greeting}</h1>
      <ItemList data={info} />
    </div>
  );
};

export default ItemListContainer;
