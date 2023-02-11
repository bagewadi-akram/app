import React from "react";
import "./cart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseRoundedIcon from "@mui/icons-material/Close";
import { useStateValue } from "../Context/StateProvider";
import { useNavigate } from "react-router-dom";

function CartProduct({ name, desc, image, price, newPrice, seller, id }) {

  // bellow line ignores the warning given -cart value is not used-
  // eslint-disable-next-line
  const [{ cart }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const removeProduct = () => {
    //Remove the product from reducer Context API
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
      name: name,
    });
  };
  const productDetails = () => {
    // open productDetails page which shows product details
    navigate("/detailedProduct", {
      state: {
        id: id,
        name: name,
        desc: desc,
        image: image,
        price: price,
        newPrice: newPrice,
        seller: seller,
        stock: 1,
      },
    });
  };
  return (
    <div className="cartProduct d-flex flex-wrap align-items-center justify-content-around p-2 m-2">
      <img src={image} alt={name} className="" height={180} />
      <div className="p-2" onClick={productDetails}>
        <h5>{name}</h5>
        <p className="mb-0 text-secondary text-sm">{desc}</p>
        <small>{seller}</small>
        <span className="d-flex flex-row align-items-center ">
          <s className="p-1">{price}</s>
          <strong className="p-1">{newPrice}</strong>
        </span>
        <p>Free Delivery Above $499 </p>
        <span className="d-flex flex-row align-items-center justify-content-around">
          <RemoveIcon />1<AddIcon />
        </span>
      </div>
      <span className="close-icon" onClick={removeProduct}>
        <CloseRoundedIcon fontSize="medium" />
      </span>
    </div>
  );
}

export default CartProduct;
