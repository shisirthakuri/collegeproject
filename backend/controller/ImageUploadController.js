const Image = require("../model/ImageModel")

const imageUpload = async(req,res)=>{
    try {
        if(!req.file.path){
            return res.status(400).json({message:"image upload failed!"})
        }
      const response = await Image.create({
              url: req.file.path,
  public_id: req.file.filename
        })
res.status(200).json({message:"image upload successfully",response})
    } catch (error) {
        console.log(error)
    }
}
module.exports = imageUpload