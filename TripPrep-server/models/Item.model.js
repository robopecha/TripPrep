const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const itemSchema = new Schema({
  content: { type: String },
  trip: { type: Schema.Types.ObjectId, ref: "Trip" },
  public: { type: Boolean, default: true },
  packed: { type: Boolean, default: false },
  listType: { type: String, enum: ['todo', 'tobuy', 'topack'] }
});

module.exports = model("Item", itemSchema);
