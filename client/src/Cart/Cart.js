import React from "react";
import "./cart.css";
import CartProduct from "./CartProduct";
import { useStateValue } from "../Context/StateProvider";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Cart() {
  const navigate = useNavigate();
  const [{ cart }, dispatch] = useStateValue();
  const clearCart = () => {
    if (cart.length === 0) {
      console.log("Your Cart is Empty");
      alert("Your Cart is Empty");
    } else {
      dispatch({
        type: "EMPTY_CART",
      });
    }
  };
  const emptyCart = (
    <strong className="text-dark d-flex  align-items-center">
      Please add products to cart{" "}
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        size="small"
        className="text-bold text-dark m-2 bg-info pt-2"
        onClick={() => navigate("/")}
      >
        Go Shopping
      </Button>
    </strong>
  );
  return (
    <div className="cart">
      {/* heading welcome quote */}
      <h3 className="cart-heading">Welcome, Guest</h3>
      {/* heading and clear cart button */}
      <span className="removeButton-box d-flex flex-row align-items-center justify-content-between">
        <h5>Your Products....</h5>
        <button className="clear-button" onClick={clearCart}>
          Clear Cart
        </button>
      </span>
      {/* contextAPI items or cart products */}
      <div className="cart-items d-flex flex-column align-items-center justify-content-around ">
        {cart.map((item) => (
          <CartProduct
            key={item.id}
            id={item.id}
            name={item.name}
            desc={item.desc}
            image={item.image}
            price={item.price}
            newPrice={item.newPrice}
            seller={item.seller}
            stock={item.stock}
          />
        ))}
        {cart.length === 0 ? emptyCart : ""}
        {/* :'Please go shopping'} */}
      </div>
      {/* bill */}
      <div className="cart-bill d-flex flex-column align-items-start justify-content-around">
        <div className="d-flex flex-column align-items-start justify-content-around ">
          <h4>Apply Coupon Code.</h4>
          <span className="d-flex align-items-center">
            <input
              type="text"
              className="coupon-input"
              placeholder="Enter your coupon here"
            />
            <button className="coupon-button">Enter</button>
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Cart;
