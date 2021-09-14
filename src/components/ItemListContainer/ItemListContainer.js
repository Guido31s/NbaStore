import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {getFirestore, collection, query, where, getDocs} from "firebase/firestore";
import {db} from "../Firebase/Firebase";
const ItemListContainer = () => {

const [items, setItems] = useState([]);
console.log(items)
const getItems = async () => {
  const docs = []
  const q = query(collection(db, "items"));
  const querySnapShot = await getDocs(q);
  querySnapShot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    docs.push({...doc.data(), id: doc.id })
    console.log(docs)
  })
  setItems(docs)
};

useEffect(()=> {
  getItems()
}, [])

  return (
    <div className="container text-left">
      <ItemList data={items} />
    </div>
  );
};

export default ItemListContainer;


