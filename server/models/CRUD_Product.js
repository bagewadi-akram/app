const mongoose = require("mongoose");

//Importing Product Model/Schema
const { Product } = require("./Schema");

//Create Read Update Delete Operation to DataBase
//For Create Operation
const createProduct = async () => {
  try {
    const result = await new Product({
      _id: "pro1234",
      name: "Spacer 2mm",
      desc: "this is description about spacer",
      category: "SpacerCategory",
      seller: "E",
      price: 21,
      newPrice: 18,
      stock: 107,
    }).save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};

//For Read Operation
const getProduct = async () => {
  try {
    const result = await Product.find()
      .select({
        name: 1,
        price: 1,
        newPrice: 1,
      })
      .sort({ name: 1 });
    // .countDocuments();
    console.log("result :>> ", result);
  } catch (error) {
    console.log("error :>> ", error.message);
  }
};

//For Update operation
const updateProduct = async () => {
  try {
    const result = await Product.findByIdAndUpdate(
      { _id: "pro1234" },
      { $set: { name: "spacer 2mm" } },
      { new: 1 }
    ).select({ name: 1 });
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

//For Delete Operation
const deleteProduct = async () => {
  try {
    const result = await Product.findByIdAndDelete({ _id: "pro1234" });
    console.log("result :>> ", result);
  } catch (error) {
    console.log(error.message);
  }
};

// Exporting Every Method 
module.exports = { createProduct, getProduct, updateProduct, deleteProduct };
