const express = require("express");
const route = express.Router();
const AboutController = require("../../controllers/AboutController");

//About router
route.get("/", AboutController.list);
route.get("/:aboutId", AboutController.getOne);
route.post("/", AboutController.create);
route.delete("/:aboutId", AboutController.deleteAbout);
route.put("/:aboutId", AboutController.updateAbout);

module.exports = route;