const mongoose = require("mongoose");

const schema = mongoose.Schema({
    Gate_No:{
        type:String,
        required:true,
    },
    Gate_status:{
        type:String,
        required:true
    }
   
    
    
})

const Gate_model = mongoose.model("Gate_model", schema);
module.exports = Gate_model;