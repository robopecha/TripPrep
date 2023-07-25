const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  image: { type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg' },
});

module.exports = model("User", userSchema);
