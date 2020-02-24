const list = async (req , res) => {
    const categories = await Category.find({}).exec();
        return res.json({
            success: true,
            categories: categories
    });
};

const getOne = async (req , res) => {
    const category = await Category.findById(req.params.categoryId).exec();
                     return res.json({
                        success: true,
                        category: category,
                        product: product
                     });
    };

const getCategoryProducts = async (req, res) => {
    const category = await Category.findById(req.params.categoryId).exec();
    const products = await Product.find({category: req.params.categoryId}).exec();
    return res.json({
        success:true,
        category: category,
        products: products
    });
}

const create = (req , res ) => {
    const u = new Category({
        title: req.body.title,
    });
    u.save().then(() => {
        res.json({
            success: true,
            message: "Category created"
        });
    });
};

const deleteCategory = (req , res) => {

    Category.deleteOne({_id: req.params.categoryId}, (err) => {
        res.json({
            success:true,
            message: "category deleted"
        });
    });
};

const updateCategory = (req , res) => {

    Category.updateOne({_id: req.params.categoryId}, {
        title: req.body.title,
    } , (err) => {
        res.json({
            success:true,
            message: "category updated"
        });
    });
};

module.exports = {
    list,
    getOne,
    create,
    deleteCategory,
    updateCategory,
    getCategoryProducts
};