const mongoose = require("mongoose");

const schema = mongoose.Schema({
    Refferal_Address:{
        type:String,
        required:true,
    },
    Minter_Address:{
        type:String,
        required:true
    },
    Mint_Price:{
        type:String,
        required:true
    },
    Mint_Value:{
        type:String,
        required:true
    }
    
    
})

const Refferal = mongoose.model("Books_of_gales_Refferals", schema);
module.exports = Refferal;