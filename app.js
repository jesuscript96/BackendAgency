const express = require("express");
const app = express();
const router = require("./router");
const cors = require('cors');
app.use(cors(corsOptions));
app.use(express.json());

// Config Cors Options
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};


app.use(router);


module.exports = app;