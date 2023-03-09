const mongoose = require("mongoose");
const { User } = require("../models/user");

//Find User
const getUser = async (email) => {
  try {
    const result = await User.findOne({ email: email });
    return result;
  } catch (error) {
    console.log("Mongo_ERROR :>> ", err);
  }
};

// password handler
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
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
};

//generate a random id to save customer id
const userId = require("shortid").generate();

//save user
const saveUser = async (hashedPassword, fname, lname, email) => {
  try {
    const document = new User({
      _id: `#str${userId}`,
      fname: fname,
      lname: lname,
      email: email,
      password: hashedPassword,
      type: "buyer",
      isVerified: false,
    });
    document
      .save()
      .then((result) => {
        return result;
      })
      .catch((err) => console.log("Mongo ERROR :>> ", err));
  } catch (error) {
    console.log("Mongo ERROR :>> ", error);
  }
};

module.exports = { getUser, hashPassword, saveUser };
