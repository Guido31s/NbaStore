import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, collection, query, where, getDocs} from "firebase/firestore";
import {db} from "../Firebase/Firebase";
const ItemListContainer = (props) => {
  // const [info, setInfo] = useState([]);
  const categoryId = useParams();

  // useEffect(() => {
  //   if (categoryId.id === undefined) {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((res) => setInfo(res));
  //   } else {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((res) =>
  //         setInfo(res.filter((e) => e.category === categoryId.id))
  //       );
  //   }
  // }, [categoryId]);

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
    <div className="container text-center">
      <ItemList data={items} />
    </div>
  );
};

export default ItemListContainer;


