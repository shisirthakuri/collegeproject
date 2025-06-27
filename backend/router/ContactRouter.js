const express = require('express')
const {contactus, contactusget} = require('../controller/ContactusController')
const contactRouter = express.Router()
contactRouter.post('/contact',contactus)
contactRouter.get('/getcontact',contactusget)
module.exports = contactRouter