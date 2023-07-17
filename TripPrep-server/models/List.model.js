const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const listSchema = new Schema({
  name: { type: String, enum: ['To Do', 'To Buy', 'To Pack'] },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  trip: { type: Schema.Types.ObjectId, ref: "Trip" }
  // if to pack: packed boolean
});

module.exports = model("List", listSchema);
