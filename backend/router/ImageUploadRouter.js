const express = require('express')
const upload = require('../middleware/upload')
const imageUpload = require('../controller/ImageUploadController')

const imageupload = express.Router()
imageupload.post('/imageupload',upload.array('images',10),imageUpload)

module.exports=imageupload