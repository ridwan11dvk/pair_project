const router = require('express').Router()
const Dokter = require('../routes/dokterRoutes')
const Penyakit = require('../routes/penyakitRoutes')
const Pasien = require('../routes/pasienRoutes')
const qr = require('qrcode')

router.get('/', (req,res)=>{
    res.render('home')
})

router.use('/dokter', Dokter)
router.use('/penyakit', Penyakit)
router.use('/pasien',Pasien)

router.get('/test',(req,res)=>{
    res.render('test')
})

router.post('/test',(req,res)=>{
    const url = req.body.url
    if(url.length === 0) res.send('Empty')
    qr.toDataURL('I am a pony!')
    .then(url => {
      res.render('test2',{url})
    })
    .catch(err => {
      console.error(err)
    })
})



module.exports = router