const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.sendFile(__dirname + "/../views/index.html");
});

route.use("/admin", require("./admin/admin"));
route.use("/client", require("./client/client"));

module.exports = route;