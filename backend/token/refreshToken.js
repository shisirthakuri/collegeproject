const jwt = require('jsonwebtoken')
const refreshToken = async(adminid)=>{
    console.log(process.env.REFRESH_KEY,"bye")
const token = jwt.sign({id:adminid},process.env.REFRESH_KEY,{expiresIn:'4d'})
return token
}
module.exports =refreshToken