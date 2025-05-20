const express = require('express')
const app = express()
const LoginRouter = require('./router/LoginRouter')
const messageRouter = require('./router/MessageRouter')
require('dotenv').config()
app.use(express.json())
app.use(cors({
    origin:"*"
}))
app.use('/NarayanMavi',LoginRouter,messageRouter)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`the project running at ${PORT}`)
})


