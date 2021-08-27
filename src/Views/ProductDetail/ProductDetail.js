import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const ProductDetail = ({ match }) => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInfoID = async () => {
    setLoading(true);
    const data = await axios(
      `https://fakestoreapi.com/products/${prodID}`
    ).then((res) => setDetail(res.data));
    setLoading(false);
  };

  let prodID = match.params.id;
  useEffect(() => {
    getInfoID();
  }, [prodID]);
  return (
    <div className="container">
      {loading ? <Spinner animation="border" /> : <ItemDetail data={detail} />}
    </div>
  );
};

export default ProductDetail;
