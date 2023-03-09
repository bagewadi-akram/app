//Connection to database
require("./config/database");

require("dotenv").config();
const cors = require("cors");
const express = require("express");

//Initialization
const app = express();
const port = process.env.PORT;

//require router **
const UserRouter = require("./routes/user");
const ProductRouter = require("./routes/product");

//express config cors and body parser
app.use(express.json());
app.use(cors());

//MiddleWares
app.use("/user", UserRouter);
app.use("/product", ProductRouter);

//Start Node Server
app.listen(port, console.log(`localhost:${port} >> Running Node Server`));
