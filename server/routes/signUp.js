const { createUser } = require("../models/CRUD_User");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const { email, fname, lname, password } = req.body;
  const temp = await createUser({ email, fname, lname, password });
  console.log(temp);
  // if (!temp.error) {
    res.status(200).send({ message: "Hii, Your are reaching to server" });
  // }
});
module.exports = router;
