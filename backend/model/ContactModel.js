const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
name:String,
email:String,
course:String
,message:String
},{timestamps:true});

const contact = mongoose.model('contact', Schema);
module.exports = contact

