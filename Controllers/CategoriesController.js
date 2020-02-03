const list = (req , res) => {
    Category.find({}, (err, categories) => {
        res.json({
            success: true,
            categories: categories
        });
    });
};

const getOne = (req , res) => {

    Category.findById(req.params.categoryId, (err, category) => {
        res.json({
            success: true,
            category: category
        });
    });
};

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
    updateCategory
};