const express = require("express");
const app = express();

const sendMail = async ({ token, temp }) => {
  await app.get(`/${temp.u_fname}?token=${token}&&=${temp._id}`, (req, res) => {
    res.status(200).send({ message: "User Verified" });
  });
};
module.exports = sendMail;
