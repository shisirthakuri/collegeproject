require('dotenv').config()
const express = require('express')
const app = express()
const connectToDatabase = require('./database/index')
const LoginRouter = require('./router/LoginRouter')
const messageRouter = require('./router/MessageRouter')
const cookieParser = require('cookie-parser');
connectToDatabase()
const cors = require('cors')
const imageupload = require('./router/ImageUploadRouter')
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
     credentials:true 
}))
app.use('/NarayanMavi',LoginRouter,messageRouter,imageupload)
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`the project running at ${PORT}`)
})


