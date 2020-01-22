const express = require("express");
const route = express.Router();
const ProductsController = require("../../controllers/ProductsController");

//products router
route.get("/", ProductsController.list);
route.post("/cart", ProductsController.cartList);
route.get("/:productId", ProductsController.getOne);
route.post("/", ProductsController.create);
route.delete("/:productId", ProductsController.deleteProduct);
route.put("/:productId", ProductsController.updateProduct);
route.get("/category/:categoryId" , ProductsController.getCategoryProduct);

module.exports = route;