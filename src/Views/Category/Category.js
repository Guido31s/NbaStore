import React, {useEffect, useState} from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../components/Firebase/Firebase";
import Item from "../../components/Item/Item";
import {Link} from "react-router-dom"
const Category = ({match}) => {
  const [cat, setCat] = useState([]);
  const catID = match.params.id;

  useEffect(() => {
    const getCategory = async () => {
      const docs = [];
      const q = query(collection(db, "items"), where("category", "==", catID));
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      })
      setCat(docs);
    };
    getCategory();
  }, [catID])
  return (    <div className="container d-flex">
<div className="row justify-content-center">
    {cat.map((category) => {
     return (
      <div className="col-12 col-md-6 col-lg-4 col-xl-4 mt-5" key={category.id}>
        <Link to={`/item/${category.id}`}>
          <Item data={category} />
        </Link>
      </div>
    );
    })}
</div>
</div>)
};

export default Category;
