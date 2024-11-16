const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const itemSchema = new Schema({
  content: { type: String },
  trip: { type: Schema.Types.ObjectId, ref: "Trip" },
  done: { type: Boolean, default: false },
  backgroundColor: { type: String, default: '#fff' },
  listType: { type: String, enum: ['do', 'buy', 'pack'] }
});

module.exports = model("Item", itemSchema);
