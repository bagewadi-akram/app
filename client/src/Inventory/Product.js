import "./product.css";
import AddIcon from "@mui/icons-material/Add";
import CurrencyFormat from "react-currency-format";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";


function Product({ name, desc, image, price, newPrice, seller }) {
  // bellow line ignores the warning given -cart value is not used-
  // eslint-disable-next-line
  const [{ cart }, dispatch] = useStateValue();
  const navigate = useNavigate();
  let id = Math.random() * (2 - 1) + 1;
  id = Math.round(id);

  const addCart = () => {
    // add product to context api and database if user is logged in
    // dispatch the item into the data layer

    dispatch({
      type: "ADD_TO_CART",
      item: {
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
  //set timeout in react
  const productDetails = () => {
    // open productDetails page which shows product details
    navigate("/detailedProduct", {
      state: {
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

  const buy = () => {
    //navigate to cart page and add product to context api
  };
  return (
    <div>
      <figure className="product-box">
        <img className="product-image" src={image} alt="Product name" />
        <div className="add-to-cart d-flex align-items-center">
          <AddIcon />
          <span>Wishlist</span>
        </div>
        <figcaption onClick={productDetails}>
          <h4 className="product-name d-flex flex-column">{name}</h4>
          <p className="text-muted mb-0">{seller}</p>
          <p className="product-info text-justify">{desc}</p>
          <div className="price d-flex align-items-center">
            <s className="d-flex align-items-center">
              <CurrencyRupeeIcon fontSize="small" />
              {price}
            </s>
            <small className="d-flex align-items-center">
              <CurrencyRupeeIcon fontSize="small" />
              <CurrencyFormat
                value={newPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
              />
            </small>
          </div>
        </figcaption>

        <div className="d-flex align-items-center justify-content-between ">
          <button className="button" onClick={addCart}>
            Add to cart
          </button>
          <button className="button" onClick={buy}>
            Buy Now
          </button>
        </div>
      </figure>
    </div>
  );
}

export default Product;
