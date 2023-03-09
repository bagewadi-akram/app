require("dotenv").config();
const mongoose = require("mongoose");

// To Ignore DeprecationWarning (True/False)
mongoose.set("strictQuery", false);

//Initializing URL of MongoDB Running Server From .ENV file
const url = process.env.DB_URL;

//Connecting to mongo DB server
mongoose
  .connect(`${url}/store`)
  .then((result) => console.log("Mongo Is Ready For Operations...."))
  .catch((err) => console.log("Mongo Error :>> ", err.message));
