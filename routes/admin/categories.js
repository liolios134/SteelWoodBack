const express = require("express");
const route = express.Router();
const CategoriesController = require("../../controllers/CategoriesController");

// Categories Routes
route.get("/" , CategoriesController.list );
route.get("/:categoryId" , CategoriesController.getOne );
route.post("/", CategoriesController.create );
route.delete("/:categoryId" , CategoriesController.deleteCategory );
route.put("/:categoryId" , CategoriesController.updateCategory );

module.exports = route;