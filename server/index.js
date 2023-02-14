require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connection = require("./models/connection");

//Connection To DataBase
connection();

//Initialization
const app = express();
const port = process.env.PORT;

//MiddleWares
app.use(express.json());
app.use(cors());

//Start Node Server
app.listen(port, console.log(`Listening to ${port} port....`));
