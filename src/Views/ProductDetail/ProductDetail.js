import React, { useState, useEffect} from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

import Spinner from "react-bootstrap/Spinner";
import {db} from "../../components/Firebase/Firebase";

const ProductDetail = ({ match }) => {

    const [loading, setLoading] = useState(true);
    let itemID = match.params.id;

    const [items, setItems] = useState([]);
    console.log(items)

 
    useEffect(() => {
      const getItems = () => {
        db.collection('items').onSnapshot((querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            // console.log(doc.data(), doc.id);
            docs.push({ ...doc.data(), id: doc.id });
            // console.log(docs);
          });
          setItems(docs.filter((e) => e.id === itemID))
        });
      };
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