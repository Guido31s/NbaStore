import React, { useState, useEffect} from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Spinner from "react-bootstrap/Spinner";
import {db} from "../../components/Firebase/Firebase";

const ProductDetail = ({match}) => {
    let itemID = match.params.id
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
      const getItems = () => {
        db.collection('items').onSnapshot((querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setItems(docs.filter((e) => e.id === itemID))
        });
      };
      getItems()
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, [itemID])

    return ( <div className = "container mt-3"> {
        loading ? < Spinner animation = "border" /> : < ItemDetail data = {
          items
        }
        />} </div>
      );
    };

    export default ProductDetail;