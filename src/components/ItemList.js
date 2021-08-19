import React, { useState, useEffect } from "react";
import Item from "./Item";
const ItemList = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setInfo(res));
  }, []);

  return (
    <div className="container d-flex">
      {info.map((data) => {
        return <Item className="col-4" key={data.id} data={data} />;
      })}
    </div>
  );
};

export default ItemList;
