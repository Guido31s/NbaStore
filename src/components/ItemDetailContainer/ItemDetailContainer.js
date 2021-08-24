import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "react-bootstrap/Spinner";
const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((res) => setDetail(res));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      {isLoading ? <Spinner animation="grow" /> : <ItemDetail data={detail} />}
    </div>
  );
};

export default ItemDetailContainer;
