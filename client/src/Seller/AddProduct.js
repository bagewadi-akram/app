import "./seller.css";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function AddProduct() {
  const [name, setName] = useState("");
  console.log("name :>> ", name);

  return (
    <div className="addProduct-page d-flex flex-column align-items-center ">
      <h1 className="text-center border-bottom align-self-stretch">
        Enter the Details Of Product....
      </h1>

      <div className="">
        <TextField
          id="outlined-error-helper-text"
          label="Enter The Product Name"
          placeholder="Product Name(1-50 words)"
          helperText="Incorrect entry."
          variant="outlined"
          className="m-2"
        />
        <TextField
          id="outlined-error-helper-text"
          label="Enter The Product Category"
          placeholder="Product CAtegory(1-40 words)"
          helperText="Incorrect entry."
          variant="outlined"
          className="m-2"
        />
      </div>

      <div>
        <TextField
          id="outlined-error"
          label="Enter The Product Price"
          placeholder="Product Price(Number Only)"
          helperText="Incorrect entry."
          variant="outlined"
          className="m-2"
        />
        <TextField
          id="outlined-error-helper-text"
          label="Enter The Product Stock"
          placeholder="Product Stock (Number Only)"
          helperText="Incorrect entry."
          variant="outlined"
          className="m-2"
        />
      </div>

      <div>
        <TextField
          id="outlined-error"
          label="Enter The Product Description"
          placeholder="Description......"
          helperText="Incorrect entry."
          variant="outlined"
          fullWidth
          className="m-2"
        />
        <div className="d-flex flex-row align-items-center justify-content-between">
          <label>Product Image: </label>
          <input type="file" placeholder="Product Image" />
          <input type="file" />
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
