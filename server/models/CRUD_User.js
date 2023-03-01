const mongoose = require("mongoose");

//Importing User Model/Schema
const { User } = require("./Schema");

//Create Read Update Delete Operation to DataBase
//For Create Operation
const createUser = async ({ email, fname, lname, password }) => {
  try {
    const doc = new User({
      _id: "str121",
      u_email: email,
      u_fname: fname,
      u_lname: lname,
      u_password: password,
      u_type: "buyer",
      u_isVerified: true,
      // u_cart: {
      //   product_inCart: {
      //     id: "pro1231",
      //   },
      // },
      // u_orders: {
      //   products_delivered: {
      //     id: "pro1232",
      //     payment: "UPI",
      //   },
      //   products_canceled: { id: "pro1233" },
      // },
    });
    const result = await doc.save();
    console.log(result);
  } catch (err) {
    return err;
  }
};

//For Read Operation
const getUser = async () => {
  try {
    const result = await User.find({ u_isVerified: true }).select({
      u_name: 1,
      u_email: 1,
    });
    console.log("result :>> ", result);
  } catch (error) {
    console.log("error :>> ", error.message);
  }
};

//For Update operation
const updateUser = async () => {
  try {
    const result = await User.findByIdAndUpdate(
      { _id: "str124" },
      { $set: { u_name: "Electric" } },
      { new: 1 }
    ).select({ u_name: 1 });
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

//For Delete Operation
const deleteUser = async () => {
  try {
    const result = await User.findByIdAndDelete({ _id: "str124" });
    console.log("result :>> ", result);
  } catch (error) {
    console.log(error.message);
  }
};

// Exporting Every Method
module.exports = { createUser, getUser, updateUser, deleteUser };
