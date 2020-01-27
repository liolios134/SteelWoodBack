const express = require("express");
const route = express.Router();

route.use("/users", require("./users"));
route.use("/auth", require("./auth"));
route.use("/products", require("./products"));
route.use("/categories", require("./categories"));
route.use("/departments", require("./departments"));
route.use("/about", require("./about"));
route.use("/contact", require("./contact"));

module.exports = route;