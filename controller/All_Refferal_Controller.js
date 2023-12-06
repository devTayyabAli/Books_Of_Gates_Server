const All_refferal_Record = require('../models/All_Refferal_Data')

exports.Refferal_record = async (req, res) => {
    try {
     const { Refferal } = req.body;

        const Check_Refferal = await All_refferal_Record.find({ Refferal_Address: Refferal })
        console.log("Check_Refferal",Refferal);
        if (Check_Refferal.length==0) {
            const data = new All_refferal_Record({ Refferal_Address: Refferal})
            await data.save()
            res.status(200).send({
                success: true,
                data: data,
                msg: "Refferal is Registor Successfully 🎉"

            })
        } else {
            res.status(200).send({
                success: false,
                data: [],
                msg: "This Refferal Already Registor"

            })
        }




    } catch (error) {
        console.log("Error ", error);
    }
}

exports.Get_Refferal_record = async (req, res) => {
    try {

        
        const { Refferal } = req.query
        const check_Condition = await All_refferal_Record.find({ Refferal_Address: Refferal })

        if (check_Condition.length==0) {
            res.status(200).send({
                success: false,
                data: [],
                msg: "Refferal not found"
            })
        } else {
            res.status(200).send({
                success: true,
                data: check_Condition,
                msg: "Refferal data"
            })
        }



    } catch (error) {
        console.log(error);
    }

}

