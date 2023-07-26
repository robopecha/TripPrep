const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const itemSchema = new Schema({
  content: { type: String },
  trip: { type: Schema.Types.ObjectId, ref: "Trip" },
  public: { type: Boolean, default: true },
  done: { type: Boolean, default: false },
  backgroundColor: { type: String, default: '#fff' },
  listType: { type: String, enum: ['todo', 'tobuy', 'topack'] }
});

module.exports = model("Item", itemSchema);
