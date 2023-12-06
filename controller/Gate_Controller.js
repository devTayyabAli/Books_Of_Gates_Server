
const Gate_model = require('../models/Gate_model');
const Gate_User_model = require('../models/Gate_user_model');

exports.add_Gate_details = async (req, res) => {
    try {
     const { Gate_No } = req.body;

        const Check_Gate = await Gate_model.find({ Gate_No: Gate_No })
       
        if (Check_Gate.length==0) {
            const data = new Gate_model(req.body)
            await data.save()
            res.status(200).send({
                success: true,
                data: data,
                msg: "Gate Status Update 🎉"
            })
        } else {
            res.status(200).send({
                success: false,
                data: [],
                msg: "This Gate Already Registor"

            })
        }




    } catch (error) {
        console.log("Error ", error);
    }
}

exports.Get_Gate_Details = async (req, res) => {
    try {
        const { Gate_No } = req.query
        const check_Condition = await Gate_model.find({ Gate_No: Gate_No })

        if (check_Condition.length==0) {
            res.status(200).send({
                success: false,
                data: [],
                msg: "Gate not found"
            })
        } else {
            res.status(200).send({
                success: true,
                data: check_Condition,
                msg: "Gate data"
            })
        }


    } catch (error) {
        console.log(error);
    }

}

exports.Get_All_Gate_Details = async (req, res) => {
    try {
      
        const check_Condition = await Gate_model.find()

        if (check_Condition.length==0) {
            res.status(200).send({
                success: false,
                data: [],
                msg: "Gate not found"
            })
        } else {
            res.status(200).send({
                success: true,
                data: check_Condition,
                msg: "Gate data"
            })
        }

    } catch (error) {
        console.log(error);
    }

}


exports.add_Gate_User = async (req, res) => {
    try {
     const { user_address } = req.body;

        const Check_User = await Gate_User_model.find({ user_address: user_address })

        if (Check_User.length==0) {
            const data = new Gate_User_model(req.body)
            await data.save()
            res.status(200).send({
                success: true,
                data: data,
                msg: " This User is Registor🎉"
            })
        } else {
            res.status(200).send({
                success: false,
                data: [],
                msg: "This User Already Registor"

            })
        }




    } catch (error) {
        console.log("Error ", error);
    }
}

exports.Get_One_User = async (req, res) => {
    try {
        const { user_address } = req.query
        const check_Condition = await Gate_User_model.findOne({ user_address: user_address })

        if (check_Condition.length==0) {
            res.status(200).send({
                success: false,
                data: [],
                msg: "User not found"
            })
        } else {
            res.status(200).send({
                success: true,
                data: check_Condition,
                msg: "User data"
            })
        }


    } catch (error) {
        console.log(error);
    }

}


exports.Get_All_User = async (req, res) => {
    try {

        const check_Condition = await Gate_User_model.find()

        if (check_Condition.length==0) {
            res.status(200).send({
                success: false,
                data: [],
                msg: "User not found"
            })
        } else {
            res.status(200).send({
                success: true,
                data: check_Condition,
                msg: "Users data"
            })
        }

    } catch (error) {
        console.log(error);
    }

}