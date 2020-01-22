const express = require("express");
const route = express.Router();
const UsersController = require("../../controllers/UsersController");

//Users router
route.get("/", UsersController.list);
route.get("/:userId", UsersController.getOne);
route.post("/", UsersController.create);
route.delete("/:userId", UsersController.deleteUser);
route.put("/:userId", UsersController.updateUser);


module.exports = route;