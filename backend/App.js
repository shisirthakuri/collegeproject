require('dotenv').config()
const express = require('express')
const app = express()
const connectToDatabase = require('./database/index')
const LoginRouter = require('./router/LoginRouter')
const messageRouter = require('./router/MessageRouter')
const cookieParser = require('cookie-parser');
const axios = require('axios');
connectToDatabase()
const cors = require('cors')
const imageupload = require('./router/ImageUploadRouter')
const NoticeRouter = require('./router/NoticeRouter')
const photoquoteRouter = require('./router/photoQuoteRouter')
const contactRouter = require('./router/ContactRouter')
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
     credentials:true 
}))
app.use('/NarayanMavi',LoginRouter,messageRouter,imageupload,NoticeRouter,photoquoteRouter,contactRouter)


app.get('/pdf-proxy', async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) return res.status(400).send("Missing url param");

    const response = await axios.get(url, { responseType: 'stream' });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="file.pdf"');

    response.data.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch PDF");
  }
});

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`the project running at ${PORT}`)
})


