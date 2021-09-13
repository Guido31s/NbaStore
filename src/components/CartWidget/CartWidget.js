import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {cart} = useCartContext()

const totalItem = cart.reduce((acc, item) => {
  return acc + item.quantity
}, 0)

  return ( <div>
    {totalItem > 1 ?  
      <><FontAwesomeIcon icon={faShoppingCart} style={{ color: "black", marginRight: "5px" }} />{totalItem}</> : <></>
    }
    </div>
  );
};

export default CartWidget;
