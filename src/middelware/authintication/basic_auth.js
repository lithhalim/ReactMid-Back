'use strict'

//requre element section 
const base64 = require('base-64');
const reguster_model=require("../../model/reguster_model")
const bcrypt = require('bcrypt');



module.exports=async (req,res,next)=>{
    //----------------------------------DECODED THE CODE ---------------------------------------------//

        //------------------->req.headers.authorization=Basic bGl0aDoxMjM<---------------------//

        // //THE CODE COME FROM HEADER ENCODE YOU NEED TO DECODED
        let basicHeaderParts = req.body.headers.authorization.split(' ');  // ['Basic', 'KDHKJAHKJDSHJKASHJK']
        let encodedString = basicHeaderParts.pop();  // KDHKJAHKJDSHJKASHJK
        let decodedString = base64.decode(encodedString); // "USERNAME:PASSWORD"
        let [email,password]=decodedString.split(":");


        try{
            //CHECK THE EMAIL IS CORRECT RO NOT
            const user = await reguster_model.findOne({ where: { email: email } });

            //CHECK IF PASSWORD FROM HEADER MATCH WITH  PASSWORD FROM DATABASE
            const valid = await bcrypt.compare(password, user.password);

            //Check If The userName And Password Correct put The User Information In Request  and Comblite To Next Middelware
            if(valid){
                //Passing The Information In Request Object;
                req.basicAuth=user
                next()
            }else{
                res.json({accessToken:"Error Email Or Password"})
            }
        }
        catch (error) { 
            res.status(403);
            res.send("Error Email Or Password");
        }
}
