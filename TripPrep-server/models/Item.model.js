const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const itemSchema = new Schema({
  content: { type: String },
  list: { type: Schema.Types.ObjectId, ref: "List" },
  public: { type: Boolean, default: true },
  packed: { type: Boolean, default: false }
});

module.exports = model("Item", itemSchema);
