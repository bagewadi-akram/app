import React from 'react'
import CartProduct from "./CartProduct";
import { Button } from "@mui/material";
import { useStateValue } from "../Context/StateProvider";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router";



function ReviewProducts() {
  const [{ cart }, dispatch] = useStateValue();
  const navigate = useNavigate();

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
  <strong className="text-dark d-flex flex-column align-items-center pt-4 pb-4">
    Please add products to cart
    <Button
      variant="contained"
      endIcon={<SendIcon />}
      size="small"
      sx={{
        fontWeight: 600,
        color: "#111",
        background: "#2abc",
        paddingBottom: 0,
      }}
      className='mt-2 mb-2'
      onClick={() => navigate("/")}
    >
      Go Shopping
    </Button>
  </strong>
);
const billAndCoupon=( <div className="bilCouponBox">
        <div className="coupon">
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
        </div>
        <div className="bill d-flex  justify-content-end">
          <h2>Entering total on bill</h2>
        </div>
      </div>)

  return (
    <div className="changingBox">
      <div className="cartProducts">
        <span className="d-flex justify-content-between align-items-center p-2 border-bottom">
          <h4>Your Cart Products</h4>
          <Button
            onClick={clearCart}
            variant="contained"
            size="small"
            sx={{
              fontWeight: 600,
              color: "#111",
              background: "#2abc",
              paddingBottom: 0,
            }}
          >
            Remove all
          </Button>
        </span>
        {/* map products here */}
        <div className="d-flex flex-column p-2">
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
          {cart.length === 0 &&emptyCart}
        </div>
        {cart.length !== 0&& billAndCoupon}
      </div>
     
    </div>
  );
}

export default ReviewProducts