import "./seller.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import axios from "axios";

function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    seller: "",
    description: "",
    category: "",
    delivery: "",
    stock: "",
    price: "",
    discount: "",
    image1: "",
  });
  const url = "http://localhost:8080/product/addProduct";
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    console.log("fromData :>> ", formData);
    try {
      const result = await axios.post(url, formData);
      console.log("result :>> ", result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="addProduct-page d-flex flex-column align-items-center ">
      <h1 className="text-center border-bottom align-self-stretch">
        Enter the Details Of Product....
      </h1>

      <form method="post" enctype="multipart/form-data">
        <div className="d-flex justify-content-between">
          <TextField
            sx={{ width: 600, margin: 2 }}
            margin="normal"
            helperText="Enter the product name..."
            variant="standard"
            name="title"
            label="Product Name"
            onChange={handleChange}
            value={formData.title}
            required="true"
          />
          <TextField
            sx={{ width: 600, margin: 2 }}
            margin="normal"
            helperText="Enter the product title..."
            variant="standard"
            name="seller"
            label="Seller Name *"
            onChange={handleChange}
            value={formData.seller}
            required="true"
          />
        </div>
        <div className="d-flex flex-column  justify-content-between">
          <TextField
            sx={{ margin: 2 }}
            margin="normal"
            helperText="Tell few lines about your product to customers"
            variant="standard"
            name="description"
            label="Product Description*"
            onChange={handleChange}
            value={formData.description}
            required="true"
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextField
            sx={{ width: 400, margin: 2 }}
            margin="normal"
            helperText="Some important text"
            variant="standard"
            name="category"
            label="Product Category *"
            value={formData.category}
            onChange={handleChange}
            required="true"
          />
          <TextField
            sx={{ width: 400, margin: 2 }}
            margin="normal"
            helperText="Some important text"
            variant="standard"
            name="delivery"
            label="Delivery Duration"
            onChange={handleChange}
            value={formData.delivery}
          />
          <TextField
            sx={{ width: 400, margin: 2 }}
            margin="normal"
            helperText="Some important text"
            variant="standard"
            name="stock"
            label="Stock Available"
            onChange={handleChange}
            value={formData.stock}
            required="true"
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextField
            sx={{ width: 500, margin: 2 }}
            margin="normal"
            helperText="Some important text"
            variant="standard"
            name="price"
            label="Seller Price (Numbers Only)*"
            onChange={handleChange}
            value={formData.price}
            required="true"
          />{" "}
          <TextField
            sx={{ width: 450, margin: 2 }}
            margin="normal"
            helperText="Some important text"
            variant="standard"
            name="discount"
            label="Discount Price (If Any)*"
            onChange={handleChange}
            value={formData.discount}
          />
          <Button variant="standard" component="label">
            <UploadIcon /> Upload DataSheet
            <input type="file" hidden />
          </Button>
        </div>
        <div className="d-flex justify-content-between mt-4 border p-2">
          <h4>Upload Product Images</h4>
          {/* <Button variant="standard" component="label"> */}
            {/* <UploadIcon /> <strong>Image 1</strong> */}
            <input
              type="file"
              name="image1"
              onChange={handleChange}
              value={formData.image1}
            />
          {/* </Button> */}
        </div>
        <div className="d-flex justify-content-end">
          <Button
            margin="normal"
            variant="contained"
            size="small"
            sx={{
              letterSpacing: 1.5,
              fontWeight: 700,
              color: "#111",
              background: "#2abc",
              padding: "10px 35px 3px",
              margin: 2,
              fontSize: 14,
            }}
            onClick={handleClick}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
