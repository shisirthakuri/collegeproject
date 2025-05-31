const express =require('express')
const {login,refreshAccessToken, signup, logout} = require('../controller/LoginController')
const router = express.Router()

router.post('/login',login)
router.post('/refresh-token',refreshAccessToken)
router.post('/logout',logout)
router.post('/signup',signup)
module.exports =router