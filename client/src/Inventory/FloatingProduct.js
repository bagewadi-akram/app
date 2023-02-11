import React from "react";
import './product.css'
import { useStateValue } from "../Context/StateProvider";

function FloatingProduct() {
  const [{ cart }] = useStateValue();
  return (
    <>
      {cart.map((item) => (
        <div className="floatingProduct-box" key={item.id}>
          <div
            className="d-flex flex-row align-items-center justify-content-between "
            
          >
            <img src={item.image} alt={item.image} height={60} className="" />
            <span className="p-1 m-1 d-flex flex-column  ">
              <strong>{item.name}</strong>
              <strong>{item.newPrice}</strong>
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default FloatingProduct;
