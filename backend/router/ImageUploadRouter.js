const express = require('express')
const upload = require('../middleware/upload')
const imageUpload = require('../controller/ImageUploadController')

const imageupload = express.Router()
imageupload.post('/imageupload',upload.single('image'),imageUpload)

module.exports=imageupload