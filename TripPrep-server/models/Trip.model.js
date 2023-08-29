const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tripSchema = new Schema({
  destination: { type: String, required: true },
  country: { type: String, required: true },
  season: { type: String, required: true },
  startDate: { type: Date, required: true },
  lists: [{ type: Schema.Types.ObjectId, ref: "List" }],
  packed: { type: Boolean, default: false },
  public: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = model("Trip", tripSchema);
