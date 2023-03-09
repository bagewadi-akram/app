const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: String,
  fname: String,
  lname: String,
  email: String,
  password: String,
  type: String,
  isVerified: Boolean,
});

const User = new mongoose.model("User", UserSchema);

module.exports = { User };
