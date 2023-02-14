import "./seller.css";
import React from "react";
import Track from "./Track-Box";
import CurrencyFormat from "react-currency-format";
import Stock from "./Stock";
import ListedProduct from "./ListedProduct";
import { AddSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Seller() {
  const navigate = useNavigate();
  const addProduct = () => {
    navigate("/addProduct");
  };
  return (
    <div className="seller m-2 p-2">
      {/* welcome quote */}
      <div className="seller-heading p-2 ">
        <h5>Hii, Welcome Back </h5>
        <p>Your Sales Monitor Dashboard</p>
      </div>
      {/* sales monitor container */}
      <div className="salesMonitor-box border p-2 mt-3">
        <h4 className=" content-heading p-2">This Months Analytics</h4>
        <div className=" d-flex flex-row align-center-center justify-content-around p-2">
          <Track
            heading="Sales"
            total="10,200"
            percentage="10.3"
            overview="down"
          />
          <Track
            heading="Order Received"
            total="10"
            percentage="4"
            overview="up"
          />
          <Track
            heading="Return & Cancelled"
            total="1"
            percentage="0.1"
            overview="down"
          />
          <Track
            heading="Order Delivered"
            total="6"
            percentage="3"
            overview="up"
          />
        </div>

        <div className="d-flex flex-row align-items-center justify-content-around p-2">
          <Track
            heading="Total Products"
            total="1000"
            percentage="30"
            overview="up"
          />{" "}
          <Track
            heading="Payment Settlements"
            total="12,000"
            percentage="3"
            overview="down"
          />{" "}
          <Track
            heading="Total Payment Settlements"
            total="12,00"
            percentage="5.2"
            overview="down"
          />
        </div>
      </div>
      {/* orders container == ongoing and Received orders */}
      <div className="orders d-flex flex-wrap mt-3 ">
        <div className="ongoing-orders d-flex flex-column p-2">
          <h2 className="border-bottom">Ongoing Orders</h2>
          <table>
            <tr>
              <th> Product-Name</th>
              <th>Price</th>
              <th>Date </th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Spacer 2mm</td>
              <td>
                <CurrencyFormat
                  decimalScale={2}
                  value={22}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"\u20B9"}
                />
              </td>
              <td>02/12/2022</td>

              <td>Pre-Paid</td>
              <td className="text-danger dark-text"> Cancelled</td>
            </tr>
            <tr>
              <td>Spacer 2mm</td>
              <td>
                <CurrencyFormat
                  decimalScale={2}
                  value={22}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"\u20B9"}
                />
              </td>
              <td>02/12/2022</td>
              <td>Pre-Paid</td>
              <td className="text-success dark-text"> Delivered</td>
            </tr>
            <tr>
              <td>Spacer 2mm</td>
              <td>
                <CurrencyFormat
                  decimalScale={2}
                  value={22}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"\u20B9"}
                />
              </td>
              <td>02/12/2022</td>
              <td>Pre-Paid</td>
              <td className="text-warning dark-text"> On Way</td>
            </tr>
            <tr>
              <td>Spacer 2mm</td>
              <td>
                <CurrencyFormat
                  decimalScale={2}
                  value={22}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"\u20B9"}
                />
              </td>
              <td>02/12/2022</td>
              <td>Pre-Paid</td>
              <td className="text-danger dark-text"> Cancelled</td>
            </tr>
            <tr>
              <td>Spacer 2mm</td>
              <td>
                <CurrencyFormat
                  decimalScale={2}
                  value={22}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"\u20B9"}
                />
              </td>
              <td>02/12/2022</td>
              <td>Pre-Paid</td>
              <td className="text-success dark-text"> Delivered</td>
            </tr>
          </table>
        </div>
        {/* accept upcoming order  */}
        <div className="accept-orders d-flex flex-column  p-2">
          <h2 className="border-bottom">Accept Orders</h2>
          <div className="border p-2 ">
            <div className="bg-light border m-2 p-1 d-flex align-items-center justify-content-between">
              <div className="">
                <h5 className="p-0 m-0">Spacer ask adsjksd asjkasjak </h5>
                <p className="p-0 m-0">
                  Quantity: <strong> 2</strong>, Payment: <strong> Paid</strong>
                </p>
              </div>
              <small>View buyer details....</small>

              <button>Accept</button>
            </div>
            <div className="bg-light border m-2 p-1 d-flex align-items-center justify-content-between">
              <div className="">
                <h5 className="p-0 m-0">Spacer ask adsjksd asjkasjak </h5>
                <p className="p-0 m-0">
                  Quantity: <strong> 2</strong>, Payment: <strong> Paid</strong>
                </p>
              </div>
              <small>View buyer details....</small>

              <button>Accept</button>
            </div>
            <div className="bg-light border m-2 p-1 d-flex align-items-center justify-content-between">
              <div className="">
                <h5 className="p-0 m-0">Spacer ask adsjksd asjkasjak </h5>
                <p className="p-0 m-0">
                  Quantity: <strong> 2</strong>, Payment: <strong> Paid</strong>
                </p>
              </div>
              <small>View buyer details....</small>

              <button>Accept</button>
            </div>
          </div>
        </div>
      </div>
      {/* stock edit view */}
      <div>
        <h2 className="border-bottom mt-3">Stock Available</h2>
        <Stock />
      </div>
      {/* add Products remove Products */}
      <div>
        <h2 className="border-bottom mt-3">List Of Products</h2>
        <div className="d-flex flex-wrap  align-items-center justify-content-around listed-products p-4 m-4">
          <ListedProduct
            name="Spacer 2mm Inside"
            desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
            image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
            price="24"
            newPrice="22"
            seller="ElectroPotent-InfoTech"
          />
          <ListedProduct
            name="Spacer 2mm Inside"
            desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
            image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
            price="24"
            newPrice="22"
            seller="ElectroPotent-InfoTech"
          />
          <ListedProduct
            name="Spacer 2mm Inside"
            desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
            image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
            price="24"
            newPrice="22"
            seller="ElectroPotent-InfoTech"
          />
          <ListedProduct
            name="Spacer 2mm Inside"
            desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
            image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
            price="24"
            newPrice="22"
            seller="ElectroPotent-InfoTech"
          />
          <ListedProduct
            name="Spacer 2mm Inside"
            desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
            image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
            price="24"
            newPrice="22"
            seller="ElectroPotent-InfoTech"
          />
          <ListedProduct
            name="Spacer 2mm Inside"
            desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
            image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
            price="24"
            newPrice="22"
            seller="ElectroPotent-InfoTech"
          />
          <ListedProduct
            name="Spacer 2mm Inside"
            desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
            image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
            price="24"
            newPrice="22"
            seller="ElectroPotent-InfoTech"
          />
          <button className="border addProductIcon" onClick={addProduct}>
            <AddSharp fontSize="large" className="text-dark" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Seller;
