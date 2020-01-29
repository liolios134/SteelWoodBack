const mongoose = require("mongoose");
const bcrypt = require("mongoose-bcrypt");

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
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
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
const departmentSchema = mongoose.Schema({
    department: String,
    latitude: Number,
    longitude: Number
},
{
    timestamps:true
});
global.Department = mongoose.model("Department", departmentSchema);

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, bcrypt: true},
    role:{type: String, required: true, default: "client", enum: ["client", "admin", "superUser"]}
}, 
{
    timestamps: true
});
userSchema.plugin(bcrypt);
global.User = mongoose.model("User", userSchema);


const categorySchema = mongoose.Schema({
    title: {
        type:String,
        required: true,
        unique: true
    }
}, {
    timestamps:true
});
global.Category = mongoose.model("Category" , categorySchema );