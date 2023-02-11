import React from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";

function Header() {
  const [{ cart }] = useStateValue();
  return (
    <div className="header bg-light d-flex flex-wrap justify-content-around align-items-center">
      <div className=" logo-container">
        <Link to="/">
          <img
            className="header-logo"
            src="https://www.dreamhost.com/assets/domains/logo.store.color-b8b6423a038c3ba1b637f437c7b861bd7001bdffb7ecc9c4f39e12203e4122f7.svg"
            alt=""
            width="130"
            height="50"
          />
        </Link>
      </div>
      <div className="search-container d-flex align-items-center justify-content-center">
        <input
          type="search"
          className="search-bar .text-muted"
          placeholder="What are you looking For ?"
        />
        <SearchIcon fontSize="medium" />
      </div>
      <div className="icon-container d-flex align-items-center">
        <Link
          to="/seller"
          style={{ color: "black", fontWeight: 700, textDecoration: "none" }}
        >
          <span className="seller-container d-flex align-items-center">
            <PermIdentityIcon />
            Seller
          </span>
        </Link>
        {/* cart button styling */}
        <Link
          to="/cart"
          style={{ color: "black", fontWeight: 700, textDecoration: "none" }}
        >
          <span className="cart-container d-flex align-items-center">
            <ShoppingCart />
            Cart :
            {cart.length >= 1 ? (
              <span className="cartLength-box ">{cart.length}</span>
            ) : (
              "Cart is Empty"
            )}
            <div className="cartProducts-hover">
              
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex flex-row align-items-center bg-light border m-2"
                >
                  <img src={item.image} alt={item.name} height={50} />
                    <small className="d-flex flex-column p-1 ml-1">
                      <strong>{item.name}</strong>
                      <strong>{item.newPrice}</strong>
                    </small>
                </div>
              ))}
            </div>
          </span>
        </Link>
        {/* login button styling */}
        <Link
          to="/cart"
          style={{ color: "black", fontWeight: 700, textDecoration: "none" }}
        >
          <span className="login-container d-flex align-items-center">
            <AccountCircleIcon />
            login
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
