const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: String,
  title: String,
  seller: String,
  description: String,
  category: String,
  delivery: String,
  stock: Number,
  price: Number,
  discount: Number,
  image: { data: Buffer, contentType: String },
});

const Product = new mongoose.model("Product", ProductSchema);

module.exports = { Product };
