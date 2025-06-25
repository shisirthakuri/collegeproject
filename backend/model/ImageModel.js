const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: String,
  public_id: String,
  ImageCategory:String
},{timestamps:true});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image

