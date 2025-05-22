const express = require("express");

const userController = require("../controller/user_controller");

const router = express.Router();

const jwt = require('jsonwebtoken');
const checkUserLogin = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(403).json({ status: false, data: "need token" });
    }
    try {

        const decodeToken = jwt.verify(authHeader, process.env.JWT_SECRET);
        req.user = decodeToken;
        next()
    } catch (e) {
        return res.status(403).json({ status: false, data: "something went wrong" });
    }
}

// router.get('/', checkUserLogin, (req, res) => { });

// get all users
router.get("/users",checkUserLogin, userController.getAllUsers);

// get user by id
router.get("/:id", userController.getUserById);

// delete user by passing user id
router.delete("/delete", userController.deleteUserById);

// update user 
router.post("/update", userController.updateUser);





module.exports = router;