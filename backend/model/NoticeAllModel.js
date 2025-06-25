const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  url: String,
  public_id: String,
  Topic:String
},{timestamps:true});

const NoticeAll = mongoose.model('NoticeAll', Schema);
module.exports = NoticeAll

