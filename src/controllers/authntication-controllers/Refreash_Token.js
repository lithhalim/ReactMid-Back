const jwt = require('jsonwebtoken');
require('dotenv').config();

let refreshTokens = []

module.exports=(req,res)=>{
    //Check If The User Havent RefreshToken Return Error
    if (req.body == null) return res.sendStatus(401)

    //If The Refresh Token Not Save In Server Return Error
    if (!refreshTokens.includes(req.body)) return res.sendStatus(403)

    //verify Eamil If The Token Correct Commplete 
    jwt.verify(req.body, process.env.REFRESH_TOKEN_SECRET, 
      (err, user) => {
      if (err){ 
            return res.sendStatus(403)
      }else{
            const accessToken = generateAccessToken({    
                fullName:user.fullName,
                image:user.image,
                regusterid:user.regusterid,
                role:user.role
             })
            res.json({ accessToken: accessToken })  
      }
    })  
}


