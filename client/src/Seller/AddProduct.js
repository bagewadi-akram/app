import "./seller.css";
import * as React from "react";
import {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function AddProduct() {
  const [name, setName] =useState('');
  console.log('name :>> ', name);

  return (
    <div className="addProduct-page d-flex flex-column align-items-center ">
      <h1 className="text-center border-bottom align-self-stretch">
        Enter the Details Of Product....
      </h1>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "125ch" },
        }}
        Validate
        autoComplete="on"
      >
        <div>
          <TextField
            label="Enter The Product Name"
            // defaultValue="Product Name"
            placeholder="Product Name (1-20 words)" 
            value={name}
            onChange={(e) =>setName( e.target.value)}
            color={
              name != null ? "error" : "success"
            }
            variant="standard"
            required={true}
          />
          <br />
          <TextField
            id="standard-error-helper-text"
            label="Enter The Product Details"
            // defaultValue="Product Details"
            placeholder="Product Details(1-100 words)"
            helperText="Incorrect entry."
            variant="standard"
          />
        </div>
      </Box>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "61ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="standard-error"
            label="Enter The Product Price"
            // defaultValue="Product Name"
            placeholder="Product Price(Number Only)"
            helperText="Incorrect entry."
            variant="standard"
          />
          <TextField
            id="standard-error-helper-text"
            label="Enter The Product Stock"
            // defaultValue="Product Details"
            placeholder="Product Stock (Number Only)"
            helperText="Incorrect entry."
            variant="standard"
          />
        </div>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "61ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="standard-error"
            label="Enter The Product Category"
            // defaultValue="Product Category"
            placeholder="Product Category"
            helperText="Incorrect entry."
            variant="standard"
          />
          <TextField
            id="standard-error-helper-text"
            label="Enter The Product Sub Category"
            // defaultValue="Product Sub Category"
            placeholder="Product Sub-Category"
            helperText="Incorrect entry."
            variant="standard"
          />
        </div>
      </Box>
    </div>
  );
}

export default AddProduct;
