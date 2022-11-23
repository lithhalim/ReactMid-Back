'use strict'
//required the model will create and bycrebt for hashing
const bcrypt = require('bcrypt');
const reguster_model=require("../../../model/reguster_model")

module.exports=async(req,res,next)=>{
    //Get the Pawword To Hshed And Email To Search If Email Already Reguster
    const{password,email}=req.body;
    

    try{

        //Hashing Password Befor Insert Database
        let hashPassword=await bcrypt.hash(password,10);

        //Add New Hashing Password To Data
        req.body.password=hashPassword;

        //Check Database If Any User Have Same Email
        let user=await reguster_model.findOne({where:{email:email}});
        
        //If Email Is Taken Response Erorr
        if(user){res.json({status:"Email Is Taken"});}

        //If Email Not Token Creat New User
            if(!user){
                await reguster_model.create(req.body);
               //The Email Hase Been Reguster
                res.json({status:"Email Is ok"});
                res.status(201)
            }

    }
    catch(err){ res.status(403).send('There Is Problem In Register')}
}
