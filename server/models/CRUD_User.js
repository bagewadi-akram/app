const mongoose = require("mongoose");
const shortid = require("shortid");
const bcrypt = require("bcrypt");

//Importing User Model/Schema
const { User } = require("./Schema");

//Create Read Update Delete Operation to DataBase
//For Create Operation
const createUser = async ({ email, fname, lname, password }) => {
  const customerId = shortid.generate();
  async function hashPassword(password) {
    const saltRounds = 10;
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });
  }
  const hashedPassword = await hashPassword(password);
  try {
    const doc = new User({
      _id: `#str${customerId}`,
      u_fname: fname,
      u_lname: lname,
      u_email: email,
      u_password: hashedPassword,
      u_type: "buyer",
      u_isVerified: false,
    });
    const result = await doc.save();
    console.log(result);
    console.log("Logged In Successfully");
  } catch (error) {
    console.log("Mongo Error :>> ", error);
    return error;
  }
};

//For Read Operation
const getUser = async ({ email, password }) => {
  try {
    const result = await User.findOne({ u_email: email });
    console.log("MongoDb :>> ", "User dataBase Found");
    return result;
  } catch (error) {
    console.log("error :>> ", error);
    return error;
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
