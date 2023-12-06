const express = require("express");
const bodyParser = require("body-parser");
const { getUser, Add_Refferal_data, Get_Refferal_data, Refferal_Info, Get_Refferal_Address, Add_WhiteList_Address, Get_WhiteList_Address, Get_All_WhiteList_Address, Delete_WhiteList_Address } = require("../controller/RefferalController");
const { Refferal_record,Get_Refferal_record } = require("../controller/All_Refferal_Controller");
const { admin_register, changePassword, admin_login, sendOTP, VarifyOTP, forgotPassword } = require("../controller/userauthentication_Controller");
const { add_Gate_details, Get_Gate_Details, Get_All_Gate_Details, add_Gate_User, Get_One_User, Get_All_User } = require("../controller/Gate_Controller");

// import router 

const router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.route("/Add_Refferal_record").post(Refferal_record)
router.route("/Get_Refferal_record").get(Get_Refferal_record)
router.route("/Add_Refferal_data").post(Add_Refferal_data)
router.route("/Get_Refferal_data").get(Get_Refferal_data)
router.route("/Refferal_Info").get(Refferal_Info)


router.route("/admin_register").post(admin_register)
router.route("/admin_login").post(admin_login)
router.route("/changePassword/:email").post(changePassword)
router.route("/Get_Refferal_Address").post(Get_Refferal_Address)
router.route("/sendOTP").post(sendOTP)
router.route("/VarifyOTP").post(VarifyOTP)
router.route("/forgotPassword/:email").post(forgotPassword)
router.route("/Add_WhiteList_Address").post(Add_WhiteList_Address)
router.route("/Get_WhiteList_Address").post(Get_WhiteList_Address)
router.route("/Get_All_WhiteList_Address").get(Get_All_WhiteList_Address)
router.route("/Delete_WhiteList_Address").get(Delete_WhiteList_Address)


///// Gate Details/////////////////////////////

router.route("/add_Gate_details").post(add_Gate_details)
router.route("/Get_Gate_Details").get(Get_Gate_Details)
router.route("/Get_All_Gate_Details").get(Get_All_Gate_Details)

///// Get Gate User/////////////////////////////

router.route("/add_Gate_User").post(add_Gate_User)
router.route("/Get_One_User").get(Get_One_User)
router.route("/Get_All_User").get(Get_All_User)
















module.exports = router;