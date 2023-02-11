import "./footer.css";
import React from "react";

import mastercard from "./images/mastercard.png";
import visa from "./images/visa.png";
import americanexprs from "./images/americanexprs.png";
import cod from "./images/cod.png";
import paypal from "./images/paypal.png";
import phonepe from "./images/phonepe.png";
import paytm from "./images/paytm.png";
import banktransfer from "./images/banktransfer.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer bg-light">
      <div className=" d-flex flex-row  justify-content-around">
        <div className="footer-logo-box d-flex flex-column align-items-center justify-content-around">
          <Link to="/">
            <img
              src="https://www.dreamhost.com/assets/domains/logo.store.color-b8b6423a038c3ba1b637f437c7b861bd7001bdffb7ecc9c4f39e12203e4122f7.svg"
              alt=""
              width="200"
            />
          </Link>
          <div className="about-box">
            <p className="about-text">
              <strong>Store</strong>
            </p>
          </div>
        </div>

        <div className="footer-options-box p-3">
          <h5 className="footer-heading">Information</h5>
          <ul>
            <li>Payment</li>
            <li>About Us</li>
            <li>Shipping </li>
            <li>Return & Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-options-box d-flex flex-column justify-content-around p-3">
          <div>
            <h5 className="footer-heading">My Account</h5>
            <ul>
              <li>My Account</li>
              <li>Order History</li>
              <li>Wishlist</li>
            </ul>
          </div>
          <div>
            <h5 className="footer-heading">Help & Support</h5>
            <ul>
              <li>+91-Phone Number</li>
              <li>Email here</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border m-2">
        <h3 className="text-center text-muted">Payments Secured By....</h3>
        <div className="d-flex flex-wrap align-items-center justify-content-around m-2">
          <img src={mastercard} alt="Master Card" width={70} />
          <img src={visa} alt="Visa" width={70} />
          <img src={americanexprs} alt="American Express" width={70} />
          <img src={paypal} alt="Paypal" width={70} />
          <img src={paytm} alt="PayTM" width={70} />
          <img src={phonepe} alt="PhonePe" width={70} />
          <img src={banktransfer} alt="Bank Transfer" width={70} />
          <img src={cod} alt="Cash On Delivery" width={70} />
        </div>
      </div>
      <div className="m-0">
        <p className="text-end text-muted m-0">
          feel free to contact Us <strong>support@store.com </strong>
        </p>
      </div>
    </div>
  );
}

export default Footer;
