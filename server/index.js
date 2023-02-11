const connection = require("./models/connection");
const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("./models/CRUD_Product");
const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("./models/CRUD_User");

//Connection To DataBase
connection();

// createProduct();
// createUser();

// getProduct();
// getUser();

// updateProduct();
// updateUser();

// deleteProduct();
// deleteUser();
