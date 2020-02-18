// Required Libraries
const express = require("express");
const cors = require("cors");
const homy = require('./homy.json');
const bodyParser = require("body-parser");
require("dotenv").config();

// require mongoDB
require("./config/db.js")
require("./config/mail.js")
require("./config/multer.js")

//Initialize express server and port
const app = express();
app.listen(process.env.PORT);
app.use(express.static('public'));
app.use("/uploads", express.static('photo'));

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/homy", (req, res) => {
    res.json(homy);
});

//import application routes
app.use(require("./routes/base"));