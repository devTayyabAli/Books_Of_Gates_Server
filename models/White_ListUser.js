const mongoose = require("mongoose");

const schema = mongoose.Schema({
   
    metamask_Address: {
        type: String,
        required: true
    }
})

const WhiteListed_User = mongoose.model("WhiteListed_User", schema);
module.exports = WhiteListed_User;