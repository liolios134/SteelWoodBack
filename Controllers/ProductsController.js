const list = (req, res) => {
    Product.find({}, (err, products) => {
        res.json(products);
    });
};

const getOne = (req, res) => {
    Product.findById(req.params.productId, (err, products) => {
        res.json(products);
    });
};

const create = (req, res) => {
    const p = new Product({
        title: req.body.title,
        desc: req.body.desc,
        photo: req.body.photo,
        price: req.body.price
    });
    p.save().then(() => {
        res.json({
            message: "New product added"
        });
    });
};

const deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.productId}, (err) => {
        res.json({
            message: "Product deleted"
        });
    });
};

const updateProduct = (req, res) => {
    Product.updateOne({_id: req.params.productId} , {
        title: req.body.title,
        desc: req.body.desc,
        photo: req.body.photo,
        price: req.body.price
    }, (err) =>{
        res.json({
            message: "Product successfully updated"
        });
    });
};

const getCategoryProduct = (req , res) => {

    Product.find({category: req.params.categoryId}, (err, products) => {
        res.json(products);
    });
};

module.exports = {
    list,
    getOne,
    create,
    deleteProduct,
    updateProduct,
    getCategoryProduct
};