const express = require('express')
const {photoAndQuoteUpload, photoAndQuoteFetch} = require('../controller/PhotoAndQuoteUpload')
const { upload } = require('../middleware/upload')
const verifyToken = require('../middleware/AuthVerify')
const photoquoteRouter = express.Router()

photoquoteRouter.post('/uploadphotoquote',upload.single('profileurl'),photoAndQuoteUpload)
photoquoteRouter.get('/getphoto',photoAndQuoteFetch)
module.exports = photoquoteRouter

