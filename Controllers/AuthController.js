const jwt = require('jsonwebtoken');


const adminLogin = async (req, res) => {
    const user = await User
        .findOne({ 
            role: "admin",
            email: req.body.email 
        }).exec();

    // if there is no user with this credentials
    if (user === null) {
        return res.json({
            success: false,
            message: "Wrong credentials"
        });
    }

    if (user.verifyPasswordSync(req.body.password)) {
        //success login
        //Create token

        const token = jwt.sign({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }, 
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN}
        );

        return res.json({
            success: true,
            token: token,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } else {
        //login failed
        return res.json({
            success: false,
            message: "Wrong credentials"
        });
    }
}


const login = async (req, res) => {
    const user = await User
        .findOne({ email: req.body.email }).exec();

    // if there is no user with this credentials
    if (user === null) {
        return res.json({
            success: false,
            message: "Wrong credentials"
        });
    }

    if (user.verifyPasswordSync(req.body.password)) {
        //success login
        //Create token

        const token = jwt.sign({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }, 
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN}
        );

        return res.json({
            success: true,
            token: token,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } else {
        //login failed
        return res.json({
            success: false,
            message: "Wrong credentials"
        });
    }

}

const register = async (req, res) => {
    const p = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    p.save()
        .then(() => {
            res.json({
                success: true,
                message: "New user added"
            });
        }).catch((err) => {
            res.json({
                success: false,
                message: "User not added",
            });
        });
}

module.exports = {
    login,
    register,
    adminLogin
}