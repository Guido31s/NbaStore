import React, { useState, useEffect} from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

import Spinner from "react-bootstrap/Spinner";
import {collection, query, getDocs } from 'firebase/firestore';
import {db} from "../../components/Firebase/Firebase";

const ProductDetail = ({
    match
  }) => {

    const [loading, setLoading] = useState(true);
    let itemID = match.params.id;

    const [items, setItems] = useState([]);
    console.log(items)
    const getItems = async () => {
      const docs = []
      const q = query(collection(db, "items"));
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        docs.push({
          ...doc.data(),
          id: doc.id
        })
      })
      setItems(docs.filter((e) => e.id === itemID))
    };
    useEffect(() => {

      getItems()
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, [itemID])

    return ( <div className = "container" > {
        loading ? < Spinner animation = "border" /> : < ItemDetail data = {
          items
        }
        />} </div>
      );
    };

    export default ProductDetail;