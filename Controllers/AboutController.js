const list = (req, res) => {
    About.find({}, (err, abouts) => {
        res.json(abouts);
    });
};

const getOne = (req, res) => {
    About.findById(req.params.aboutId, (err, abouts) => {
        res.json(abouts);
    });
};

const create = (req, res) => {
    const p = new About({
        comName: req.body.comName,
        comLogo: req.body.comLogo,
        comDesc: req.body.comDesc,
        creator: req.body.creator,
        creDesc: req.body.comDesc,
        crePhoto: req.body.crePhoto
    });
    p.save().then(() => {
        res.json({
            message: "About content created"
        });
    });
};

const deleteAbout = (req, res) => {
    About.deleteOne({_id: req.params.aboutId}, (err) => {
        res.json({
            message: "About content deleted"
        });
    });
};

const updateAbout = (req, res) => {
    Product.updateOne({_id: req.params.aboutId} , {
        comName: req.body.comName,
        comLogo: req.body.comLogo,
        comDesc: req.body.comDesc,
        creator: req.body.creator,
        creDesc: req.body.comDesc,
        crePhoto: req.body.crePhoto
    }, (err) =>{
        res.json({
            message: "About successfully updated"
        });
    });
};


module.exports = {
    list,
    getOne,
    create,
    deleteAbout,
    updateAbout
};