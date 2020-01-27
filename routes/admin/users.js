const express = require("express");
const route = express.Router();
const UsersController = require("../../controllers/UsersController");
const UsersValidator = require("../../validators/UsersValidator");

//Users router
route.get("/", UsersController.list);
route.get("/:userId", UsersValidator.getOne, UsersController.getOne);
route.post("/", UsersValidator.create, UsersController.create);
route.delete("/:userId", UsersController.deleteUser);
route.put("/:userId", UsersController.updateUser);


module.exports = route;