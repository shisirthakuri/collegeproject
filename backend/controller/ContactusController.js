const contact = require("../model/ContactModel")

const contactus = async(req,res)=>{
     const{name,email,course,message}=req.body
     await contact.create({
        name,
        email,
        course,
        message
     })
     res.status(200).json({message:"message send successfully"})
}
module.exports=contactus