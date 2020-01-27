const { validationResult } = require('express-validator');

const checkErrors = (req, res, next) => {
    //check validator 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            errors: errors.array()
        });
    }

    next();
};

module.exports = checkErrors;