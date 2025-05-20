const express =require('express')
const login = require('../controller/LoginController')
const usermessage = require('../controller/UserMessageController')
const messageRouter = express.Router()

messageRouter.post('/message',usermessage)

module.exports =messageRouter