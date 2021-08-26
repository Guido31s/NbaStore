import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [info, setInfo] = useState([]);
  const categoryId = useParams();

  useEffect(() => {
    if (categoryId.id === undefined) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => setInfo(res));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) =>
          setInfo(res.filter((e) => e.category === categoryId.id))
        );
    }
  }, [categoryId]);
  return (
    <div class="d-flex justify-content-between">
      <h1>{props.greeting}</h1>
      <ItemList data={info} />
    </div>
  );
};

export default ItemListContainer;
