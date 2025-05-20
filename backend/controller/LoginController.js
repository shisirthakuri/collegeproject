const Admin = require("../model/AdminModel")

const login = async(req,res)=>{
const{username,password}=req.body
if(!username || !password){
    return res.status(400).json({
        message:"all field should be required!"
    })
}

const checkusername = await Admin.findOne({username:username})

if(!checkusername){
    return res.status(404).json({
        message:"username not found!"
    })
}

const decoded = bcrypt.compareSync(password,checkusername.password)
if(!decoded){
    return res.status(400).json({message:"password is wrong"})
}

const token = generateToken(checkusername._id)
if(!token){
    return res.status(400).json({message:"login failed!"})
}

res.cookie('token',{ httpOnly: true,
      secure: false,
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,})
}

res.status(200).json({message:"login successfully!"})
module.exports=login