import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
const Home = () => {
  return (
    <div>
      <p>Home</p>
      <ItemListContainer greeting="Productos" />
      <ItemDetailContainer />
    </div>
  );
};

export default Home;
