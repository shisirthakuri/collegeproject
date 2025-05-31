const jwt = require('jsonwebtoken')
const refreshToken = async(adminid)=>{
    const screatkey = process.env.REFRESH_TOKEN_SECRET

const token = jwt.sign({id:adminid},"12345678narayanmavi",{expiresIn:'4d'})
return token
}
module.exports =refreshToken