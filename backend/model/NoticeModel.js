const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    content:{
        type:String
    }
})

const NoticeBanner = mongoose.model('NoticeBanner',Schema)

module.exports = NoticeBanner

