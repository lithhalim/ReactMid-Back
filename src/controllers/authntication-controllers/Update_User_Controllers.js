const RegusterModel=require("../../model/reguster_model");

module.exports=async(req,res)=>{
    console.log(req.body)
    let Data=await RegusterModel.update(req.body,{
        where:{regusterid:req.body.regusterid}
    })
    res.json("userUpdate")
}