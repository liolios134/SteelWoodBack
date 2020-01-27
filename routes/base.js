const express = require("express");
const path = require("path");
const route = express.Router();

route.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/../views/index.html"));
});

route.use("/admin", require("./admin/admin"));
route.use("/client", require("./client/client"));

module.exports = route;