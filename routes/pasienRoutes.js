const router = require('express').Router()
const CPasien = require('../controllers/pasienController.js')

router.get('/', CPasien.listHandler)
router.get('/add', CPasien.addPageHandler)
router.post('/add', CPasien.addHandler)
// router.get('/:id/delete', CPasien.deleteHandler)



module.exports = router