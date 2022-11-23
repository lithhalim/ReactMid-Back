const regusterModel=require("../../model/reguster_model");


module.exports=async(req,res)=>{
    res.json(await regusterModel.findAll({
        attributes: ['id', 'regusterid',"firstName","lastName","email","role","Image","country","refreshtoken"]
    }))
}