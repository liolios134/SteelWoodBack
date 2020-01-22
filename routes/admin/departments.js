const express = require("express");
const route = express.Router();
const DepartmentsController = require("../../controllers/DepartmentsController");


//Departments router
route.get("/", DepartmentsController.list);
route.get("/:departmentId", DepartmentsController.getOne);
route.post("/", DepartmentsController.create);
route.delete("/:departmentId", DepartmentsController.deleteDepartment);
route.put("/:departmentId", DepartmentsController.updateDepartment);

module.exports = route;