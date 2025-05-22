const userModel = require("../mongo_db/user_model");


// get all the user 
async function getAllUsers(req, res) {
    var data = await userModel.find({});

    return res.status(200).json({ "status": "success", "data": data });
}

// get user by id
async function getUserById(req, res) {
    var userId = req.params.id;
    var user = await userModel.findById({ _id: userId });

    if (user != null) {
        var response = res.status(200).json({ "status": "success", "data": user });
        return response;
    } else {

        var response = res.status(200).json({ "status": "success", "data": "User not Found" });
        return response;
    }
}



// update user
async function updateUser(req, res) {
    var { id, email, password } = req.body;
    return res.json("updating");
}

// delete user
async function deleteUserById(req, res) {
    var userId = req.body.id;
    var data = await userModel.findByIdAndDelete({ _id: userId });
    if (data == null) {
        return res.status(200).json({ "status": "success", "data": "User not exist or deleted" });
    } else {
        return res.status(200).json({ "status": "success", "data": "User Deleted" });
    }
}




module.exports = {
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUser,
}