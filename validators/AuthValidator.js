// ...rest of the initial code omitted for simplicity.
const { check } = require('express-validator');
const checkErrors = require('./result');



const login = [
    // username must be an email
    check("email").isEmail(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 3 }),
    checkErrors
];

const register = [
    // username must be an email
    check("email").isEmail(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 3 }),
    //check('passwordConfirm').matches('password'),
    check("firstName").isAlpha(),
    check("lastName").isAlpha(),
    checkErrors
];

module.exports = {
    register,
    login
}