// const userModel = require("../mongo_db/user_model");


// // get all the user 
// async function getAllUsers(req, res) {
//     var data = await userModel.find({});

//     return res.status(200).json({ "status": "success", "data": data });
// }

// // get user by id
// async function getUserById(req, res) {
//     var userId = req.params.id;
//     var user = await userModel.findById({ _id: userId });

//     if (user != null) {
//         var response = res.status(200).json({ "status": "success", "data": user });
//         return response;
//     } else {
//         var response = res.status(200).json({ "status": "success", "data": "User not Found" });
//         return response;
//     }
// }

// // create new user
// async function createNewUser(req, res) {
//     var { userName, email, password } = req.body;

//     if (!userName || typeof userName !== 'string' || userName.trim() === '') {
//         return res.status(400).json({ error: 'Username is required and must be a non-empty string.' });
//     }

//     if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         return res.status(400).json({ error: 'Email is required and must be a valid email address.' });
//     }

//     if (password === undefined || typeof password !== 'string') {
//         return res.status(400).json({ error: 'Enter password' });
//     } else if (password.length < 8) {
//         return res.status(400).json({ error: 'Password length grater then 8 char' });
//     }

//     var response = await userModel.create({
//         userName: userName,
//         email: email,
//         password: password,
//     });
//     return res.status(200).json({ "status": "success" });
// }


// // update user
// async function updateUser(req, res) {
//     var {id, email, password} = req.body;
//    return  res.json("updating");
// }

// // delete user
// async function deleteUserById(req, res) {
//     var userId = req.body.id;
//     var data = await userModel.findByIdAndDelete({ _id: userId });
//     if (data == null) {
//         return res.status(200).json({ "status": "success", "data": "User not exist or deleted" });
//     } else {
//         return res.status(200).json({ "status": "success", "data": "User Deleted" });
//     }
// }


// module.exports = {
//     getAllUsers,
//     getUserById,
//     createNewUser,
//     deleteUserById,
//     updateUser,
// }