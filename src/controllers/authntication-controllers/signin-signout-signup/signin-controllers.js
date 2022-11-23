const reguster_model=require("../../../model/reguster_model")



//After Checj Basic Authntication Now The Next Step Section
module.exports=async (req,res)=>{
    //Use To Create Access Token And Refresh Token
    const acces_Token=require("../../../token/access-token");
    const refresh_token=require("../../../token/refresh_token");

    try {

        //Invoket The AccessToken And Refresh Token
        let accessToken= acces_Token(req.basicAuth)
        let refreshToken=refresh_token(req.basicAuth)


        //At Every Sign Will Add New Refresh Token
        await reguster_model.update(
            {refreshtoken:refreshToken},
            {where:{email:req.basicAuth.email}})

        //The Access Token Will Send Ass Response
        res.status(200).json({accessToken:accessToken,refreshToken:refreshToken});
        return
    }
     catch (error) {
       res.status(403).send('There Is Problem In SignIn');
       }
      
}
