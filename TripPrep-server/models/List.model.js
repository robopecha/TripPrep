const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const listSchema = new Schema({
  toDo: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  toBuy: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  toPack: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  trip: { type: Schema.Types.ObjectId, ref: "Trip" },
  packed: { type: Boolean, default: false }
});

module.exports = model("List", listSchema);
