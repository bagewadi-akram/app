require("dotenv").config();
const mongoose = require("mongoose");

// To Ignore DeprecationWarning (True/False)
mongoose.set("strictQuery", false); 

//Initializing URL of MongoDB Running Server From .ENV file
const url = process.env.DB_URL

// Connecting to DataBase Using Async/Await 
module.exports = async () => {
  try {
    await mongoose.connect(url);
    console.log("DataBase Connection Successful");
  } catch (err) {
    console.log(err.message);
  }
};
