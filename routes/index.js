const router = require('express').Router()
const Dokter = require('../routes/dokterRoutes')
const Penyakit = require('../routes/penyakitRoutes')
const Pasien = require('../routes/pasienRoutes')

router.get('/', (req,res)=>{
    res.send('aa')
})

router.use('/dokter', Dokter)
router.use('/penyakit', Penyakit)
router.use('/pasien',Pasien)



module.exports = router