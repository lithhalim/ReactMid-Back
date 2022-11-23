const reguster_model=require("../../../model/reguster_model")

module.exports=async(req,res)=>{
     await reguster_model.update(
    {refreshtoken:""}
    ,{where:{regusterid:req.params.data}})
    
    res.json({result:"deletes Refresh Token"})
}
