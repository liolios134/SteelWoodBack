const list = async (req, res) => {
    const products = await Product.find({})
    .populate("category")
    .exec();
  res.json(products);
};

const cartList = async (req, res) => {
    const products = await Product.find({_id: req.body.productIds}, "title price photo")
    .exec();
  res.json(products);
};

const getOne = async (req, res) => {
    const products = await Product
    .findById(req.params.productId)
    .populate("category")
    .exec();
    res.json(products);
};

const create = async (req, res) => {
    const p = new Product({
        category: req.body.category,
        title: req.body.title,
        desc: req.body.desc,
        miniDesc: req.body.miniDesc,
        photo: req.body.photo,
        price: req.body.price,
        sale: req.body.sale
    });
    await p.save();
        res.json({
            message: "New product added"
        });
};

const deleteProduct = async (req, res) => {
     await Product
     .deleteOne({_id: req.params.productId})
     .exec();
     
     res.json({
            message: "Product deleted"
    });
};

const updateProduct = async (req, res) => {
     await Product.updateOne({_id: req.params.productId} , {
        category: req.body.category,
        title: req.body.title,
        desc: req.body.desc,
        miniDesc: req.body.miniDesc,
        photo: req.body.photo,
        price: req.body.price,
        sale: req.body.sale
    }).exec();

    res.json({message: "Product successfully updated"});
};

const getCategoryProduct = async (req , res) => {

    const products = await Product.find({category: req.params.categoryId}, (err, products) => {
        res.json(products);
    });
};

module.exports = {
    list,
    getOne,
    create,
    deleteProduct,
    updateProduct,
    getCategoryProduct,
    cartList
};