import React, { useState } from "react";
const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(1);

  const incrementOption = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrementOption = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container justify-content-center d-flex">
      <div className="row">
        <button
          className="btn btn-outline-secondary rounded-0 col-4"
          onClick={decrementOption}
        >
          -
        </button>
        <p className="col-4" id="products">
          {counter}
        </p>
        <button
          className="btn btn-outline-secondary rounded-0 col-4"
          onClick={incrementOption}
        >
          +
        </button>
        <div>
          <button
            className="btn btn-outline-secondary rounded-0 mt-1"
            onClick={onAdd}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
