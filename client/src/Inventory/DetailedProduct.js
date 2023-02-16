import "./detailedProduct.css";
import { useLocation } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import Section from "./Section";
import { useState } from "react";
import { Button } from "@mui/material";

function DetailedProduct() {
  const location = useLocation();
  const [image, setImage] = useState(location.state.image);
  let discount = location.state.price - location.state.newPrice;
  discount = discount / location.state.price;
  discount = Math.round(discount * 100);
  let stock = parseInt(location.state.stock);

  return (
    <div className="detailedProduct">
      <div className="d-flex flex-wrap align-items-center">
        <div className="left  d-flex flex-column ">
          {/* image container */}
          <div className="img-box d-flex flex-row align-items-center p-2">
            <div>
              <img
                className="border m-1"
                src={image}
                alt={location.state.image}
                height={425}
                width={490}
              />
            </div>
            <div className="d-flex flex-column align-content-center justify-content-between ">
              <img
                className="border m-1"
                src={location.state.image}
                alt={location.state.image}
                height={100}
                onClick={() => setImage(location.state.image)}
              />
              <img
                className="border m-1"
                src={location.state.image}
                alt={location.state.image}
                height={100}
                onClick={() => setImage(location.state.image)}
              />
              <img
                className="border m-1"
                src={location.state.image}
                alt={location.state.image}
                height={100}
                onClick={() => setImage(location.state.image)}
              />
              <img
                className="border m-1"
                src={location.state.image}
                alt={location.state.image}
                height={100}
                onClick={() => setImage(location.state.image)}
              />
            </div>
          </div>
        </div>
        <div className="right d-flex flex-column ">
          {/* heading text */}
          <h3 className="product-name">{location.state.name}</h3>
          <small className="seller-name text-muted">
            sold by {location.state.seller}
          </small>

          {/* availability text */}
          {stock > 0 ? (
            <p className="m-0 p-0">
              <strong className="text-success stock-available">
                Available
              </strong>{" "}
              Delivered in 3-4 working days
            </p>
          ) : (
            <p className="stock-empty text-danger m-0 p-0">Out Of stock</p>
          )}

          {/* price container */}
          <div className="price-box">
            <div className="d-flex align-items-end">
              <CurrencyFormat
                renderText={(value) => <p className="new-price"> {value}</p>}
                decimalScale={2}
                value={location.state.newPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"\u20B9"}
              />
              <CurrencyFormat
                renderText={(value) => (
                  <p className=" text-muted old-price">
                    <s>{value}</s>
                  </p>
                )}
                decimalScale={2}
                value={location.state.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"\u20B9"}
              />
              <CurrencyFormat
                renderText={(value) => (
                  <p className=" text-success discount-per"> ({value} % OFF)</p>
                )}
                decimalScale={2}
                value={discount}
                displayType={"text"}
                thousandSeparator={true}
              />
            </div>
            <p className="text-success tax-text">
              <strong>.</strong>inclusive of all taxes
            </p>
          </div>
          <p className="desc-text">{location.state.desc}</p>
          <div className="downloadSheet-box d-flex flex-row border align-items-center justify-content-around  ">
            <span>
              <h5 className="">Download Data Sheet Here</h5>
              <p className="p-0 m-0">Product Code: 2012</p>
            </span>
            <Button
              variant="contained"
              size="small"
              sx={{
                letterSpacing: 1.5,
                fontWeight: 700,
                color: "#111",
                background: "#2abc",
                padding: "10px 35px 3px",
                fontSize: 14,
              }}
              className="download-button"
              // onClick={}
            >
              Download
            </Button>
          </div>
          <div className="d-flex align-items-center justify-content-around buy-buttons">
            <Button
              variant="contained"
              size="small"
              sx={{
                letterSpacing: 1.5,
                fontWeight: 700,
                color: "#111",
                background: "#2abc",
                padding: "10px 35px 3px",
                fontSize: 14,
              }}
              // onClick={}
            >
              Add to Cart
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                letterSpacing: 1.5,
                fontWeight: 700,
                color: "#111",
                background: "#2abc",
                padding: "10px 35px 3px",
                fontSize: 14,
              }}
              // onClick={}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div className="border-bottom p-1">
        <h3 className="text-center p-2 border bg-light">
          {location.state.name}
        </h3>
        <h5 className="p-2 border-bottom">Product Code: 2102</h5>
        <p className="m-0 p-1">
          {location.state.desc}
          {location.state.desc}
        </p>
        <p className="m-0 p-1">
          <strong>Dimensions:</strong>11mm X 10.5mm X 7.5mm
        </p>
        <p className="m-0 p-1">
          <strong>Weight:</strong>1 Gram
        </p>
        <p className="p-1">Pins 2.54MM pitch</p>
      </div>
      <Section title="Related Products" />
    </div>
  );
}

export default DetailedProduct;
