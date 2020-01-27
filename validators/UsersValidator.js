// ...rest of the initial code omitted for simplicity.
const { check } = require('express-validator');
const checkErrors = require('./result');

const create = [
    // username must be an email
    check("email").isEmail(),
      // password must be at least 5 chars long
    check('password').isLength({ min: 3 }),
    check("firstName").isAlpha(),
    check("lastName").isAlpha(),
    checkErrors
];

const getOne = [
  check("userId").isMongoId().withMessage("Have to provide MongoId"),
  checkErrors
];

module.exports = {
    create,
    getOne
}