const  mongoose  = require("mongoose");

const schema = new mongoose.Schema({
         profileurl:String,
        Name:String,
        quote:String
})

const photoquote = mongoose.model('photoquote',schema)
module.exports = photoquote