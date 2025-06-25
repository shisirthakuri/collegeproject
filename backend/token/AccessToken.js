const jwt = require('jsonwebtoken')
const generateToken = async(adminid)=>{
    console.log( process.env.ACCESS_KEY,"hello")
const token = jwt.sign({id:adminid}, process.env.ACCESS_KEY,{expiresIn:'15min'})
return token
}
module.exports =generateToken