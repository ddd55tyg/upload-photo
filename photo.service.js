
const photomodel=require('../models/photo.model')

module.exports.addphoto=async(req,res)=>{
    const {title,path}=req.body;
    if(req.file){
 await photomodel.insertMany({title,path:req.file.filename})
    res.json({message:"success"})
    }else{
            res.json({message:"image only"})

    }
   
}

module.exports.getphotos=async(req,res)=>{
   let photos= await photomodel.find({})
    res.json({message:"success",photos})
}