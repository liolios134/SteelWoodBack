const express = require("express");
const route = express.Router();
const AdminAuth = require("../../middlewares/adminAuth.js");

route.get("/", AdminAuth, (req, res) => {
    res.json({
        success:true,
        message: "Admin Area"
    });
});
route.get("/stats", AdminAuth, async (req, res) => {
    const categories = await Category.find({}).exec();
    const labels = [];

    
    const counts = [];
    for(let cat of categories) {
        const num = await Product.count({category: cat._id});
        counts.push(num);
        labels.push(cat.title);
    }

    res.json({
        success:true,
        data: {
        labels: labels,
        datasets: [
          {
            label: "My First dataset",
            data: counts
          }
        ]
      }
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