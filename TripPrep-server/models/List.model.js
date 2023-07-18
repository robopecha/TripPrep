const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const listSchema = new Schema({
  listType: { type: String, enum: ['To Do', 'To Buy', 'To Pack'] },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  trip: { type: Schema.Types.ObjectId, ref: "Trip" },
  packed: { type: Boolean, default: false }
});

module.exports = model("List", listSchema);
