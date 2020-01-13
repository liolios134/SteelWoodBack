const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

global.Product = mongoose.model("Product", {
    title: String,
    desc: String,
    miniDesc: String,
    photo: String,
    price: Number,
    sale: Number,
    category: mongoose.Types.ObjectId
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

global.User = mongoose.model("User", {
    firstName: String,
    lastName: String,
    email: String
})

global.Category = mongoose.model("Category" , {
    title: String
});