const jwt = require('jsonwebtoken');
require('dotenv').config();

//Create The Access Key
module.exports= createAccessToken =(user)=> jwt.sign({

    //the information will save in payload section information of user
    firstName:user.firstName,
    lastName:user.lastName,
    regusterid:user.regusterid,
    role:user.role,
    Image:user.Image
},

    //the segniture you use in the access token
    process.env.ACCESS_TOKEN_SECRET ,

    //the token will expire after these time
    {expiresIn:"1d"}
    );
