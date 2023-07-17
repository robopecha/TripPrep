const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const itemSchema = new Schema({
  content: { type: String },
  list: { type: Schema.Types.ObjectId, ref: "List" }
  // if on pack list: public boolean
});

module.exports = model("Item", itemSchema);
