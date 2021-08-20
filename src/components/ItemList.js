import React, { useState, useEffect } from "react";
import Item from "./Item";
const ItemList = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((res) => setInfo(res));
  }, []);

  return (
    <div className="container row text-center">
      {info.map((data) => {
        return <Item key={data.id} data={data} />;
      })}
    </div>
  );
};

export default ItemList;
