const list = (req, res) => {
    Product.find({}).populate("category").exec((err, products) => {
        res.json(products);
    });
};

const getOne = (req, res) => {
    Product
    .findById(req.params.productId)
    .populate("category")
    .exec( (err, product) => {
        res.json(product);
    });
};

const create = (req, res) => {
    const p = new Product({
        category: req.body.category,
        title: req.body.title,
        desc: req.body.desc,
        miniDesc: req.body.miniDesc,
        photo: req.body.photo,
        price: req.body.price,
        sale: req.body.sale
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
        category: req.body.category,
        title: req.body.title,
        desc: req.body.desc,
        miniDesc: req.body.miniDesc,
        photo: req.body.photo,
        price: req.body.price,
        sale: req.body.sale
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