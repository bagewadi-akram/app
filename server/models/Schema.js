const mongoose = require("mongoose");

// Defining the model/Document of Product DataBase
const productDetails = new mongoose.Schema({
  _id: {
    required: true,
    type: String,
  },
  name: String,
  desc: String,
  category: String,
  seller: String,
  price: Number,
  newPrice: Number,
  stock: Number,
});

const Product = new mongoose.model("Product", productDetails);

// Defining the model/Document of User DataBase
const userDetails = new mongoose.Schema({
  _id: String,
  u_email: { type: String, required: true },
  u_name: String,
  u_password: String,
  u_type: { type: String, required: true },
  u_isVerified: Boolean,
  u_cart: {
    product_inCart: {
      id: {
        type: String,
        required: true,
      },
      date: { type: String, default:new Date() }, //date when added to cart
    },
  },
  u_orders: {
    products_delivered: {
      id: { type: String, required: true },
      payment: String,
    },
    products_canceled: { id: { type: String, required: true } },
  },
});

const User = new mongoose.model("User", userDetails);

// Export Schema & Model User/Product Database
module.exports = { Product, User };
