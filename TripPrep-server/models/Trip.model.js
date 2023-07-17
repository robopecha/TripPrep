const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tripSchema = new Schema({
  destination: String,
  country: String,
  season: String,
  date: Date,
  lists: [{ type: Schema.Types.ObjectId, ref: "List" }],
  public: Boolean
  // owner will be added later on
});

module.exports = model("Trip", tripSchema);
