// const mongoose = require('mongoose');

// const uri = "mongodb://localhost:27017/";
// const appName = "localApp";



// const db = mongoose.connect(uri + appName)
//    .then(() => console.log('Connected to MongoDB'))
//    .catch(err => console.error('MongoDB connection error:', err));


// // schema
// const userSchema = new mongoose.Schema({
//    userName: String,
//    email: String,
//    password: {
//       type: String,
//       select: false,
//    },

// }, { versionKey: false });


// const userModel = mongoose.model("users", userSchema);

// module.exports = userModel;