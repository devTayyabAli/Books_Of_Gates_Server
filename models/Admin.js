const mongoose = require("mongoose");

const schema = mongoose.Schema({
   
    email: {
        type: String,
        required: true
    }
})

const Admin = mongoose.model("Admin", schema);
module.exports = Admin;