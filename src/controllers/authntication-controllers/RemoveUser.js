const RegusterModel=require("../../model/reguster_model");

module.exports=async(req,res)=>{
    let Data=await RegusterModel.destroy({
        where:req.body
    })
}