/* to manage all the route */
const express = require("express");
const userRoute = require("./userRoute");
const rootRoute = express.Router();

rootRoute.use("/user", userRoute);

module.exports = { rootRoute };
