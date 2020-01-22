const login = async (req, res) => {
    const user = await User
    .findOne({email: req.body.email})
    .exec();
    
    // if there is no user with this credentials
    if(user === null) {
        return res.json({
            message: "Wrong credentials"
        });
    }

    if (user.verifyPasswordSync(req.body.password)) {
        //success login
        return res.json(user);
    } else {
        //login failed
        return res.json({
            message: "Wrong credentials"
        });
    }

}

module.exports = {
    login
}