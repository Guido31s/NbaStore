import React, {useEffect, useState} from "react";
import { db } from "../../components/Firebase/Firebase";
import Item from "../../components/Item/Item";
import {Link} from "react-router-dom"
import "../../App.css"
const Category = ({match}) => {
  const [cat, setCat] = useState([]);
  const catID = match.params.id;

  useEffect(() => {
    const getCategory = () => {
      db.collection('items').where("category", "==", catID).onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setCat(docs);
      });
    };
    getCategory();
  }, [catID])
  return (    <div className="container d-flex">
<div className="row justify-content-center">
    {cat.map((category) => {
     return (
      <div className="col-12 col-md-6 col-lg-4 col-xl-4" key={category.id}>
        <Link to={`/item/${category.id}`} className="navItems">
          <Item data={category} />
        </Link>
      </div>
    );
    })}
</div>
</div>)
};

export default Category;
