const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const itemSchema = new Schema({
  content: { type: String },
  list: { type: Schema.Types.ObjectId, ref: "List" },
  public: { type: Boolean, default: true }
});

module.exports = model("Item", itemSchema);
