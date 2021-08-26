import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

import axios from "axios";
const ProductDetail = ({ match }) => {
  console.log("que pija sos", match);
  const [detail, setDetail] = useState([]);
  let prodID = match.params.id;
  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${prodID}`).then((res) =>
      setDetail(res.data)
    );
  }, [prodID]);
  return (
    <div className="container">
      <ItemDetail data={detail} />
    </div>
  );
};

export default ProductDetail;
