
const userModel = require("../mongo_db/user_model");
const jwt = require('jsonwebtoken');


// create new user
async function createNewUser(req, res) {
    var { userName, email, password } = req.body;

    if (!userName || typeof userName !== 'string' || userName.trim() === '') {
        return res.status(400).json({ error: 'Username is required and must be a non-empty string.' });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Email is required and must be a valid email address.' });
    }

    if (password === undefined || typeof password !== 'string') {
        return res.status(400).json({ error: 'Enter password' });
    } else if (password.length < 8) {
        return res.status(400).json({ error: 'Password length grater then 8 char' });
    }

    var response = await userModel.create({
        userName: userName,
        email: email,
        password: password,
    });
    // const io = req.app.io;


    return res.status(200).json({ "status": "success" });
}

// create new user
async function loginUser(req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email }).select(["email", "password"]);

    if (user.password != password) {
        return res.status(400).json({ status: "fail", data: "wrong password" });

    }
    // console.log(process.env)
    const jwtToken = jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
    return res.status(200).json({ status: "success", data: jwtToken });



}


module.exports = {
    createNewUser,
    loginUser
};