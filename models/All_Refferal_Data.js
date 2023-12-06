const mongoose = require('mongoose')

const schema=mongoose.Schema({
    Refferal_Address:{
        type:String,
        required:true
    }
})


const All_refferal_Record= mongoose.model("All_refferal_Record",schema);
module.exports= All_refferal_Record



