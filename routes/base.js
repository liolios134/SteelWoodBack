const express = require("express");
const path = require("path");
const route = express.Router();
const MailController = require("../controllers/MailController");
const UploadController = require("../controllers/UploadController");


route.get("/", (req, res) => {
    //res.sendFile(path.join(__dirname, "/../views/index.html"));
    res.json({
        success:true,
        message: "Home Page"
    });
});

route.use("/admin", require("./admin/admin"));
route.use("/client", require("./client/client"));

route.get("/mail", MailController.mailSend);
route.post("/upload", upload.single("avatar"), UploadController.uploadPhoto);

route.use((req, res) => {
    return res.json({
        success: false,
        message: "Page not found"
    })
})

module.exports = route;