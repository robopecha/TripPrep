const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const listSchema = new Schema({
  do: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  buy: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  pack: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  trip: { type: Schema.Types.ObjectId, ref: "Trip" },
});

module.exports = model("List", listSchema);
