const express = require('express')
const contactus = require('../controller/ContactusController')
const contactRouter = express.Router()
contactRouter.post('/contact',contactus)

module.exports = contactRouter