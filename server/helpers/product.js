const mongoose = require("mongoose");
const { Product } = require("../models/product");
const productId = require("shortid").generate();
const fs = require("fs");
const upload = require("../helpers/imageStorage");

const saveProduct = async (productInfo) => {
  try {
    const document = new Product({
      _id: `pro${productInfo.seller}&?=${productId}`,
      title: productInfo.title,
      seller: productInfo.seller,
      description: productInfo.description,
      category: productInfo.category,
      delivery: productInfo.delivery,
      stock: productInfo.stock,
      price: productInfo.price,
      discount: productInfo.discount,
      image: {
        data: fs.readFileSync("images/" + productInfo.img),
        contentType: "image/png",
      },
    });
    document
      .save()
      .then((result) => {
        return result;
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("Mongo Error !", error);
  }
};

const getProduct = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    console.log("Mongo Error.!", error);
  }
};

module.exports = { saveProduct, getProduct };
