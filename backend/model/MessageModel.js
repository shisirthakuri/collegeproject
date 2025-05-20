const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
         required:true
    },
        subject:{
        type:String,
         required:true
    },
        message:{
        type:String,
         required:true
    }
})

const Message = mongoose.model("Message",schema)

module.exports =Message