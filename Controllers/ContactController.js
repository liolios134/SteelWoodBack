const list = (req, res) => {
    Contact.find({}, (err, contacts) => {
        res.json(contacts);
    });
};

const getOne = (req, res) => {
    Contact.findById(req.params.contactId, (err, contacts) => {
        res.json(contacts);
    });
};

const create = (req, res) => {
    const p = new Contact({
        title: req.body.title,
        phone: req.body.phone,
        email: req.body.email,
        conPara: req.body.conPara
    });
    p.save().then(() => {
        res.json({
            message: "Contact content added"
        });
    });
};

const deleteContact = (req, res) => {
    Contact.deleteOne({_id: req.params.contactId}, (err) => {
        res.json({
            message: "Contact deleted"
        });
    });
};

const updateContact = (req, res) => {
    Contact.updateOne({_id: req.params.contactId} , {
        title: req.body.title,
        phone: req.body.phone,
        email: req.body.email,
        conPara: req.body.conPara
    }, (err) =>{
        res.json({
            message: "Contact successfully updated"
        });
    });
};


module.exports = {
    list,
    getOne,
    create,
    deleteContact,
    updateContact
};