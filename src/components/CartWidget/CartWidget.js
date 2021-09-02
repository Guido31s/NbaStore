import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {cart} = useCartContext()

const totalItem = cart.reduce((acc, item) => {
  return acc + item.quantity
}, 0)
  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} style={{ color: "white" }} /> {totalItem}
    </>
  );
};

export default CartWidget;
