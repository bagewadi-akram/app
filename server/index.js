require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connection = require("./models/connection");

//Connection To DataBase
connection();

//Initialization
const app = express();
const port = process.env.PORT;
const signIn = require("./routes/signIn");
const signUp = require("./routes/signUp");



//MiddleWares
app.use(express.json());
app.use(cors());
app.use("/signIn", signIn);
app.use("/signUp", signUp);

//Start Node Server
app.listen(port, console.log(`Listening to ${port} port....`));
