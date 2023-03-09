const express = require("express");
const { upload } = require("../helpers/imageStorage");
const { saveProduct } = require("../helpers/product");

const router = express.Router();

router.post("/addProduct", upload.single("image1"), async (req, res) => {
  const img = req.file.filename;
  const {
    title,
    seller,
    description,
    category,
    delivery,
    stock,
    price,
    discount,
  } = req.body;
  const productInfo = {
    title,
    seller,
    description,
    category,
    delivery,
    stock,
    price,
    discount,
    img,
  };
  const saved = await saveProduct(productInfo);
  console.log("saved :>> ", saved);
  res.send("image saved");
  // console.log("img :>> ", img);
  // res.send("file found");
  // const saveImage = new Product({
  //   title: req.body.title,
  //   image: {
  //     data: fs.readFileSync("images/" + req.file.filename),
  //     contentType: "image/png",
  //   },
  // });
  // saveImage
  //   .save()
  //   .then((result) => console.log("Image Saved..", result))
  //   .catch((err) => console.log("Error", err));
  // res.send("image saved");
});

module.exports = router;
