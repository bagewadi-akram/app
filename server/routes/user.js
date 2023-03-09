const router = require("express").Router();
const { getUser, hashPassword, saveUser } = require("../helpers/user");
const bcrypt = require("bcrypt");

//sign in route
router.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  if (email || password) {
    const user = await getUser(email);
    if (user) {
      console.log("Email Check :>> Match");
      bcrypt.compare(password, user.password, (err, success) => {
        if (err) {
          console.log("Err While Decrypting :>> ", err);
          res.status(409).send({ message: "An Error Occurred!!" });
        } else {
          if (success === true) {
            console.log("Pass Check :>>  Match..");
            res.status(200).send({ message: "Log In Success.." });
          } else {
            console.log("Pass Check :>> Not Match  !!");
            res.status(409).send({ message: "Enter A Valid Password.." });
          }
        }
      });
    } else {
      console.log("Email Check :>> Not Match");
      res.status(404).send({ message: "Enter A Valid Email...." });
    }
  } else {
    res.status(409).send({ message: "Input Fields Empty.." });
  }
});

//sign up route
router.post("/signUp", async (req, res) => {
  const { email, fname, lname, password } = req.body;

  if (fname || lname || email || password) {
    //Checking if user already exist
    const user = await getUser(email);
    if (user) {
      console.log("Email Check :>> Match");
      res.status(409).send({ message: "User Already Exists... " });
    } else {
      console.log("Email Check :>> Not Match ...Staring to save database");
      // encrypted password
      hashPassword(password)
        .then((hashedPassword) => {
          //save user
          saveUser(hashedPassword, fname, lname, email)
            .then((result) => {
              console.log("User Saved Success  :>> ", result);
              res.status(200).send({ message: "User Created Success" });
            })
            .catch((err) => {
              console.log("Error While Saving... :>> ", object);
              res
                .status(409)
                .send({ message: "Internal Error..!, Please try again!!" });
            });
        })
        .catch((err) => {
          console.log("Error While Hashing.. :>> ", object);
          res
            .status(409)
            .send({ message: "Internal Error..!, Please try again" });
        });
    }
  } else {
    res.status(404).send({ message: "Input Fields Empty..!" });
  }
});

module.exports = router;
