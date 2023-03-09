const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: String,
});

module.exports = Image = new mongoose.model("Image", ImageSchema);
