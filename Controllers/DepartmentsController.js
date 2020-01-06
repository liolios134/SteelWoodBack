const list = (req, res) => {
    Department.find({}, (err, departments) => {
        res.json(departments);
    });
};

const getOne = (req, res) => {
    Department.findById(req.params.departmentId, (err, departments) => {
        res.json(departments);
    });
};

const create = (req, res) => {
    const p = new Department({
        department: req.body.department,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    });
    p.save().then(() => {
        res.json({
            message: "Department added"
        });
    });
};

const deleteDepartment = (req, res) => {
    Department.deleteOne({_id: req.params.departmentId}, (err) => {
        res.json({
            message: "Department deleted"
        });
    });
};

const updateDepartment = (req, res) => {
    Department.updateOne({_id: req.params.departmentId} , {
        department: req.body.department,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }, (err) =>{
        res.json({
            message: "Department successfully updated"
        });
    });
};


module.exports = {
    list,
    getOne,
    create,
    deleteDepartment,
    updateDepartment
};