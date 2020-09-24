const router = require('express').Router()
const CPenyakit = require('../controllers/penyakitController.js')

router.get('/', CPenyakit.listHandler)
router.get('/add', CPenyakit.addPageHandler)
router.post('/add', CPenyakit.addHandler)
router.get('/:id/detail', CPenyakit.detailHandler)



module.exports = router