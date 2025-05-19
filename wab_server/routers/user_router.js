const express = require("express");

const userController = require("../controller/user_controller");

const router = express.Router()

// router.get("/", (req, res) => {
//     const io = req.app.io;
//     socket.emit("kd", "hello world from users");
//     res.send("Hello word");

// })

// get all users
router.get("/users", userController.getAllUsers);

// get user by id
router.get("/:id", userController.getUserById);

// create new user
router.post("/create", userController.createNewUser);

// delete user by passing user id
router.delete("/delete", userController.deleteUserById);

// update user 
router.post("/update", userController.updateUser);


module.exports = router;