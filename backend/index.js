const express = require("express");
const bodyParser = require('body-parser')
const router = require('./routes/mainRouter')

const cors = require('cors')
const app = express()
const port = 8080

const cookieParser = require('cookie-parser');

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: [
      "set-cookie",
      "Content-Type",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Credentials",
    ],
  })
);

app.use(express.json())

app.use(cookieParser());

app.get('/',(req, res) =>{
    res.send('Home')
})  

app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

