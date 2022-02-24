//jshint esversion:6
const express = require("express");
const app = express();

// MIDDLEWARE
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());

// ROUTER
const viewRouter = require("./router/viewRouter");
app.use("/", viewRouter);

module.exports = app;
