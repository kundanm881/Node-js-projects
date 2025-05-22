const mongoose = require('mongoose');

// USER MODEL
const schema = new mongoose.Schema({
   userName: { 
      type: String, 
      required: true,
   },
   email: String,
   password: {
      type: String,
      select: false,
   },

}, { versionKey: false });


const userModel = mongoose.model("users", schema);

module.exports = userModel;