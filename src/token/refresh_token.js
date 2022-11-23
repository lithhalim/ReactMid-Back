const jwt = require('jsonwebtoken');
require('dotenv').config();


//create the refresh token 
module.exports= createRefreshToken =(user)=> jwt.sign({

    //the information will save in payload section information of user
    firstName:user.firstName,
    lastName:user.lastName,
    regusterid:user.regusterid,
    role:user.role,
    Image:user.Image
    },
    //the signeture you use in the access token
    process.env.REFRESH_TOKEN_SECRET ,

    //the token will expire after these time
    {expiresIn:"365d"}
    );
