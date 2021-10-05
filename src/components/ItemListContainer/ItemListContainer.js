import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {db} from "../Firebase/Firebase";
const ItemListContainer = () => {

const [items, setItems] = useState([]);
console.log(items)
const getItems = () => {
  db.collection('items').onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data(), doc.id);
      docs.push({ ...doc.data(), id: doc.id });
      // console.log(docs);
    });
    setItems(docs);
  });
};

useEffect(()=> {
  getItems()
}, [])

  return (
    <div className="container">
      <ItemList data={items} />
    </div>
  );
};

export default ItemListContainer;


