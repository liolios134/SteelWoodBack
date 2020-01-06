const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

global.Product = mongoose.model("Product", {
    title: String,
    desc: String,
    photo: String,
    price: Number
});

global.About = mongoose.model("About", {
    comName: String,
    comLogo: String,
    comDesc: String,
    creator: String,
    creDesc: String,
    crePhoto: String
});

global.Contact = mongoose.model("Contact", {
    title: String,
    phone: Number,
    email: String,
    conPara: String
})

global.Department = mongoose.model("Department", {
    department: String,
    latitude: Number,
    longitude: Number
})