const express = require('express')
const {upload}= require('../middleware/upload')
const {imageUpload, getImages }= require('../controller/ImageUploadController')
const verifyToken = require('../middleware/AuthVerify')

const imageupload = express.Router()
imageupload.post('/imageupload',verifyToken,upload.array('images',10),imageUpload)
imageupload.get('/fetchimage',getImages)
module.exports=imageupload