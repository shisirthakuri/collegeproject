const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
         required:true
    },
    role:{
        type:String,
        enum:["admin","host"],
        default:"admin"
    }
})

const Admin = mongoose.model("Admin",schema)

module.exports =Admin