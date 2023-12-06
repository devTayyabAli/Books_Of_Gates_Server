const Refferal = require("../models/Refferal");
const Userauthentication_Model = require("../models/Userauthentication_Model");
const WhiteListed_User = require("../models/White_ListUser");



exports.Add_Refferal_data = async (req, res) => {
    try {

        const data = new Refferal(req.body);
        await data.save()
        res.status(200).send({
            success: true,
            data: data,
            msg: "Refferal is Registor Successfully 🎉"
        })

    } catch (error) {
        console.log(error);
    }
}


exports.Get_Refferal_data = async (req, res) => {
    try {

        const data = await Refferal.find()
        if (data.length == 0) {
            res.status(200).send({
                success: false,
                data: [],
                msg: "Refferal not found"


            })
        } else {
            res.status(200).send({
                success: true,
                data: data,
                msg: 'Refferal Data'


            })
        }


    } catch (error) {
        console.log(error);
    }
}

exports.Refferal_Info = async (req, res) => {
    try {

        const { Address } = req.query
        const check_Condition = await Refferal.find({ Refferal_Address: Address })
        // console.log("check_Condition",Address);
        if (check_Condition.length == 0) {
            res.status(200).send({
                success: false,
                data: [],
                msg: "Refferal not found"


            })
        } else {
            res.status(200).send({
                success: true,
                data: check_Condition,
                msg: 'Refferal Data'


            })
        }

    } catch (error) {
        console.log(error);
    }
}


exports.Get_Refferal_Address = async (req, res) => {
    try {

        let { userName } = req.body

        let data = await Userauthentication_Model.find({ userName: userName })
        data = data[0]
        let { metamask_Address } = data
        console.log("data", metamask_Address);
        if (data.length == 0) {
            res.status(200).send({
                success: false,
                data: [],
                msg: "User not found"


            })
        } else {
            res.status(200).send({
                success: true,
                data: metamask_Address,
                msg: 'Refferal Data'


            })
        }


    } catch (error) {
        console.log(error);
    }
}

exports.Add_WhiteList_Address = async (req, res) => {
    try {

        const { metamask_Address } = req.body
        let check_WhiteListed = await WhiteListed_User.find({
            metamask_Address: {
                $regex: metamask_Address,
                $options: "i"
            }
        })
        console.log("check_WhiteListed", check_WhiteListed);

        if (check_WhiteListed.length !== 0) {
            res.status(200).send({
                success: false,
                data: [],
                msg: "Address is Already WhiteListed"
            })
        } else {

            const data = new WhiteListed_User(req.body);
            await data.save()
            res.status(200).send({
                success: true,
                data: data,
                msg: "Address is Successfully WhiteListed 🎉"
            })
        }

    } catch (error) {
        console.log(error);
    }
}

exports.Get_WhiteList_Address = async (req, res) => {
    try {

        const { metamask_Address } = req.body
        const regex = new RegExp(metamask_Address, 'i');
        let check_WhiteListed = await WhiteListed_User.find({
            metamask_Address: { $regex: regex }
        })
        console.log("check_WhiteListed", check_WhiteListed);

        if (check_WhiteListed.length == 0) {
            res.status(200).send({
                success: false,
                data: [],
                msg: "Address is Not WhiteListed"
            })
        } else {


            res.status(200).send({
                success: true,
                data: check_WhiteListed,
                msg: "Address is WhiteListed 🎉"
            })
        }

    } catch (error) {
        console.log(error);
    }
}


exports.Get_All_WhiteList_Address = async (req, res) => {
    try {


        let check_WhiteListed = await WhiteListed_User.find()
        console.log("check_WhiteListed", check_WhiteListed);

        if (check_WhiteListed.length == 0) {
            res.status(200).send({
                success: false,
                data: [],
                msg: "Address is Not WhiteListed"
            })
        } else {
            res.status(200).send({
                success: true,
                data: check_WhiteListed,
                msg: "Address is WhiteListed 🎉"
            })
        }

    } catch (error) {
        console.log(error);
    }
}

exports.Delete_WhiteList_Address = async (req, res) => {
    try {

const {metamask_Address}=req.query
console.log("check_WhiteListed", metamask_Address);
        let check_WhiteListed = await WhiteListed_User.find({metamask_Address:metamask_Address})

        if (check_WhiteListed.length == 0) {
            res.status(200).send({
                success: false,
                data: [],
                msg: "Address is Not WhiteListed"
            })
        } else {
        let delete_WhiteListed = await WhiteListed_User.deleteOne({metamask_Address:metamask_Address})


            res.status(200).send({
                success: true,
                data: delete_WhiteListed,
                msg: "WhiteListed Address Deleted SuccessFully "

            })
        }

    } catch (error) {
        console.log(error);
    }
}