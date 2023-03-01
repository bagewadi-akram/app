const router = require("express").Router();

router.post("/", async (req, res) => {
     console.log('req :>> ', req.body);
     const {email,password}=req.body
     res.status(200).send({ message: "Hii, you are reaching to server" });
});

module.exports = router;
