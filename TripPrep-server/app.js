require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();

require("./config")(app);


const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

const tripRouter = require("./routes/trip.routes");
app.use("/api", isAuthenticated, tripRouter);

const listRouter = require("./routes/list.routes");
app.use("/api", isAuthenticated, listRouter);

const itemRouter = require("./routes/item.routes");
app.use("/api", isAuthenticated, itemRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

require("./error-handling")(app);


module.exports = app;
