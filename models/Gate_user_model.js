const mongoose = require("mongoose");

const schema = mongoose.Schema({
    user_address:{
        type:String,
        required:true,
    },
    Iswinner:{
        type:String,
        required:true
    },
    IsfreeNFT:{
        type:String,
       
    },
    IsPDF:{
        type:String,
    }

})

const Gate_User_model = mongoose.model("Gate_User_model", schema);
module.exports = Gate_User_model;