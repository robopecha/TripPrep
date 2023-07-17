const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tripSchema = new Schema({
  destination: { type: String },
  country: { type: String, required: true },
  season: { type: String, required: true },
  startDate: { type: Date },
  lists: [{ type: Schema.Types.ObjectId, ref: "List" }],
  public: { type: Boolean, default: false }
  // owner will be added later on
});

module.exports = model("Trip", tripSchema);
