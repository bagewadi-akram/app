import React from 'react'
import './seller.css'
import CurrencyFormat from "react-currency-format";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Close } from '@mui/icons-material';

function ListedProduct({ name, desc, image, price, newPrice, seller }) {
  return (
    <div className="ListedProduct ">
      <img className="listedProduct-image" src={image} alt="Product name"  height={180} />
      <span className="del-button">
        <Close fontSize="large" />
      </span>
      <div>
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
      </div>
    </div>
  );
}

export default ListedProduct