const express = require("express");
const route = express.Router();
const ContactController = require("../../controllers/ContactController");

//Contact router
route.get("/", ContactController.list);
route.get("/:contactId", ContactController.getOne);
route.post("/", ContactController.create);
route.delete("/:contactId", ContactController.deleteContact);
route.put("/:contactId", ContactController.updateContact);

module.exports = route;

