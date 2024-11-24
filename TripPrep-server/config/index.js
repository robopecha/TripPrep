// const express = require("express");
// const logger = require("morgan");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// module.exports = (app) => {

//   app.set("trust proxy", 1);

//   console.log("CORS Origin:", process.env.ORIGIN);

//   app.use(
//     cors({
//       origin: "https://tripprep.netlify.app" || process.env.ORIGIN,
//       methods: ['GET', 'POST', 'PUT', 'DELETE'],
//       allowedHeaders: ['Content-Type', 'Authorization']
//     })
//   );

//   app.use(logger("dev"));
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: false }));
//   app.use(cookieParser());
// };


const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");


module.exports = (app) => {

  app.use(
    cors({
      origin: [process.env.ORIGIN],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    })
  );

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
