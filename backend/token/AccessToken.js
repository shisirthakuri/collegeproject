const jwt = require('jsonwebtoken')
const generateToken = async(adminid)=>{
    const screatkey = process.env.SCREAT_KEY
    console.log(screatkey,"HELLO")
const token = jwt.sign({id:adminid},"12345678narayanmavi",{expiresIn:'15min'})
return token
}
module.exports =generateToken