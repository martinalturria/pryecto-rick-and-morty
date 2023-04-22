const users = require("../utils/users");

const login = (req, res) => {
    const { email, password } = req.query;

    if(email && password){
        let access = false;
        users.forEach((user) => {
            user.email === email && user.password === password && (access = true)
        })

        res.status(200).json({access})
    }
};

module.exports = login;
