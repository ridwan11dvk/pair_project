const router = require('express').Router()
const Dokter = require('../routes/dokterRoutes')
const Penyakit = require('../routes/penyakitRoutes')
const Pasien = require('../routes/pasienRoutes')
const Login = require('../routes/loginRoutes.js')
const qr = require('qrcode')
const session = require('express-session')

router.use(session({
    secret:"puskemas",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 150000
    }
}))

router.get('/', (req,res)=>{
  if (req.session.login == true) {
    let nama = req.session.nama
    res.render('home',{nama})
}
else {
    res.redirect('/login')
}
})

router.use('/dokter', Dokter)
router.use('/penyakit', Penyakit)
router.use('/pasien',Pasien)
router.use('/login', Login)

router.get('/test',(req,res)=>{
    res.render('test')
})

router.post('/test',(req,res)=>{
    const url = req.body.url
    if(url.length === 0) res.send('Empty')
    qr.toDataURL('I am a pony!')
    .then(url => {
      console.log(url)
    })
    .catch(err => {
      console.error(err)
    })
})



module.exports = router