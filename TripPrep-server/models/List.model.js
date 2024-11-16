const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const listSchema = new Schema({
  todo: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  tobuy: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  topack: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  trip: { type: Schema.Types.ObjectId, ref: "Trip" },
});

module.exports = model("List", listSchema);
