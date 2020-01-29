const express = require("express");
const route = express.Router();
const AdminAuth = require("../../middlewares/adminAuth.js");

route.get("/", AdminAuth, (req, res) => {
    res.json({
        success:true,
        message: "Admin Area"
    });
});

route.use("/auth", require("./auth"));
route.use("/users", AdminAuth, require("./users"));
route.use("/products", AdminAuth, require("./products"));
route.use("/categories", AdminAuth, require("./categories"));
route.use("/departments", AdminAuth, require("./departments"));
route.use("/about", AdminAuth, require("./about"));
route.use("/contact", AdminAuth, require("./contact"));

module.exports = route;