const Message = require("../model/MessageModel")

const usermessage = async(req,res)=>{
const{name,email,subject,message}=req.body
if(!email || !name || !subject || !message){
    return res.status(400).json({
        message:"all fields are required!"
    })
}

const messageSaved =  new  Message({
    name,
    email,
    subject,
    message
})

await messageSaved.save()
res.status(200).json({message:" message sent successfully!"})
}

module.exports = usermessage