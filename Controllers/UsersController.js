
const list = (req, res) => {
    User.find({}, (err, users) => {
        res.json(users);
    });
};

const getOne = (req, res) => {

    User.findById(req.params.userId, (err, users) => {
        res.json(users);
    });
};



const create = (req, res) => {
    const p = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });
    p.save().then(() => {
        res.json({
            message: "New user added"
        });
    }).catch((err) => {
        res.json({
            message: "New user not added",
            error: err
        });
    });
};

const deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.userId }, (err) => {
        res.json({
            message: "User deleted"
        });
    });
};

const updateUser = (req, res) => {
    User.updateOne({ _id: req.params.userId }, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }, (err) => {
        res.json({
            message: "User successfully updated"
        });
    });
};


module.exports = {
    list,
    getOne,
    create,
    deleteUser,
    updateUser
};