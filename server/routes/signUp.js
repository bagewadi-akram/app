const { createUser } = require("../models/CRUD_User");
const { User } = require("../models/Schema");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const { email, fname, lname, password } = req.body;
  const user = await User.findOne({ u_email: email });
  if (user) {
    return res.status(409).send({ message: "The given email already Exist!" });
  }

  const temp = await createUser({ email, fname, lname, password });
  if (!temp) {
    res.status(200).send({ message: "User Created Success" });
  }
  if (temp) {
    res.status(404).send({ message: "Internal Error!(DataBase Error)" });
  }
});
module.exports = router;
