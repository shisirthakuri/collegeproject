const jwt = require('jsonwebtoken')
const generateToken = async(adminid)=>{
    const screatkey = process.env.SCREAT_KEY
const token = jwt.sign({id:adminid},screatkey,{expiresIn:'4d'})
return token
}
module.exports =generateToken