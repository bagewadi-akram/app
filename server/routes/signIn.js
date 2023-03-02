const router = require("express").Router();
const { getUser } = require("../models/CRUD_User");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await getUser({ email, password });
  // Validation
  if (user) {
    bcrypt.compare(password, user.u_password, (err, success) => {
      if (err) {
        console.log("error :>> ", err);
        res.status(409).send({ message: err });
      } else {
        if (success === true) {
          console.log("Node :>> Password match..");
          res.status(200).send({ message: "User Found.." });
        } else {
          console.log("Node :>> Password Mismatch !!");
          res.status(409).send({ message: "Password mismatch" });
        }
      }
    });
  } else {
    console.log("Node :>> User Database Not Found");
    res.status(404).send({ message: "User Not Found..!" });
  }
});

module.exports = router;
