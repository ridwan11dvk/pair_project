const router = require('express').Router()
const CDokter = require('../controllers/dokterController.js')

router.get('/', CDokter.listHandler)
router.get('/add', CDokter.addPageHandler)
router.post('/add', CDokter.addHandler)
router.get('/:id/delete', CDokter.deleteHandler)



module.exports = router