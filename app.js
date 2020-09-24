const express = require('express')
const app = express()
const port = 3000
const bp = require('body-parser')
const qr = require('qrcode')
const router = require('./routes/index.js')

app.set('view engine', 'ejs')
app.use(bp.urlencoded({extended:false}))
app.use(bp.json())
app.use(express.urlencoded({extended:false}))

app.use('/', router)

app.listen(port, ()=>{
    console.log(`App Listening on ${port}`)
})