import React, { useState, useEffect } from "react";
import ItemDetailList from "../ItemDetailList/ItemDetailList";
import Spinner from "react-bootstrap/Spinner";
const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => setDetail(res));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Spinner animation="grow" />
      ) : (
        <ItemDetailList data={detail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
