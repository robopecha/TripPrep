require("dotenv/config");
require("./db");
const express = require("express");

const app = express();

require("./config")(app);

// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const tripRouter = require("./routes/trip.routes");
app.use("/api", tripRouter);

const listRouter = require("./routes/list.routes");
app.use("/api", listRouter);

const itemRouter = require("./routes/item.routes");
app.use("/api", itemRouter);

require("./error-handling")(app);

module.exports = app;
