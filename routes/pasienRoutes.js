const router = require('express').Router()
const CPasien = require('../controllers/pasienController.js')

router.get('/', CPasien.listHandler)
router.get('/add', CPasien.addPageHandler)
router.post('/add', CPasien.addHandler)
router.get('/:id/edit', CPasien.editPageHandler)
router.post('/:id/edit', CPasien.editHandler)
router.get('/:id/delete', CPasien.deleteHandler)
router.get('/:id/detail', CPasien.detailPageHandler)
router.post('/:id/detail', CPasien.detailHandler)
router.get('/anak', CPasien.anakHandler)
router.get('/dewasa', CPasien.dewasaHandler)



module.exports = router