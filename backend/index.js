const express = require("express");
const router = require('./routes/router')

const app = express()
const port = 3000

const cookieParser = require('cookie-parser');

app.use(express.json())
app.use(cookieParser());
app.use(express.static('static'))

app.use(cookieParser('1234'));

app.get('/',(req, res) =>{
    res.send('Home')
})



app.use('/api', router)

app.listen(port, () => {console.log(`Example app listening on port ${port}`)})