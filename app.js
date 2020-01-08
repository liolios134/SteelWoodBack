// Required Libraries
const express = require("express");
const cors = require("cors");
const homy = require ('./homy.json');
const bodyParser = require("body-parser");
require("dotenv").config();


// require mongoDB
require("./config/db.js")

//require Controllers
const ProductsController = require("./controllers/ProductsController");
const AboutController = require("./controllers/AboutController");
const ContactController = require("./controllers/ContactController");
const DepartmentsController = require("./controllers/DepartmentsController");
const UsersController = require("./controllers/UsersController");
const CategoriesController = require("./controllers/CategoriesController");


//Initialize express server and port
const app = express();
app.listen(process.env.PORT);
app.use(express.static('public'));


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

//products router
app.get("/products", ProductsController.list);
app.get("/products/:productId", ProductsController.getOne);
app.post("/products", ProductsController.create);
app.delete("/products/:productId", ProductsController.deleteProduct);
app.put("/products/:productId", ProductsController.updateProduct);
app.get("/products/category/:categoryId" , ProductsController.getCategoryProduct);


app.get("/homy", (req, res) => {
    res.json(homy);
});

//About router
app.get("/about", AboutController.list);
app.get("/about/:aboutId", AboutController.getOne);
app.post("/about", AboutController.create);
app.delete("/about/:aboutId", AboutController.deleteAbout);
app.put("/about/:aboutId", AboutController.updateAbout);

//Contact router
app.get("/contact", ContactController.list);
app.get("/contact/:contactId", ContactController.getOne);
app.post("/contact", ContactController.create);
app.delete("/contact/:contactId", ContactController.deleteContact);
app.put("/contact/:contactId", ContactController.updateContact);

//Departments router
app.get("/departments", DepartmentsController.list);
app.get("/departments/:departmentId", DepartmentsController.getOne);
app.post("/departments", DepartmentsController.create);
app.delete("/departments/:departmentId", DepartmentsController.deleteDepartment);
app.put("/departments/:departmentId", DepartmentsController.updateDepartment);

//Users router
app.get("/users", UsersController.list);
app.get("/users/:userId", UsersController.getOne);
app.post("/users", UsersController.create);
app.delete("/users/:userId", UsersController.deleteUser);
app.put("/users/:userId", UsersController.updateUser);

// Categories Routes
app.get("/categories" , CategoriesController.list );
app.get("/categories/:categoryId" , CategoriesController.getOne );
app.post("/categories", CategoriesController.create );
app.delete("/categories/:categoryId" , CategoriesController.deleteCategory );
app.put("/categories/:categoryId" , CategoriesController.updateCategory );