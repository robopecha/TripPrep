const mongoose = require("mongoose");
require('dotenv').config();


const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/TripPrep-server";


mongoose
  .connect(process.env.MONGODB_URI)
  .then(x => console.log(`Connected the Database: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


