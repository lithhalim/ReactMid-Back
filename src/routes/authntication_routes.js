const express = require('express')
const router = express.Router()

//BASIQ AUTH REQUIRE
const basic_auth=require("../middelware/authintication/basic_auth")
const bearer_auth=require("../middelware/authintication/barear_auth");




//ALL MEDILWARE FUNCTION ARE USE
const signin_controllers=require("../controllers/authntication-controllers/signin-signout-signup/signin-controllers");
const signup_controllers=require("../controllers/authntication-controllers/signin-signout-signup/signup-controllers");
const signout_controllers=require("../controllers/authntication-controllers/signin-signout-signup/logout-controllers");

//ALL ROUTES ARE USED
router.post("/signin",basic_auth,signin_controllers)
router.post("/signup",signup_controllers);
router.post("/logout/:data",signout_controllers);

//---------------------------------- Get All Reguster User ----------------------------------------------//

const GetAllUser=require("../controllers/authntication-controllers/getAllUser_controllers");
router.get("/getAllData",GetAllUser)

const RemoveUser=require("../controllers/authntication-controllers/RemoveUser");
router.post("/removeUser",RemoveUser)



module.exports=router
