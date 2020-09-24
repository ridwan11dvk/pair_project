const router = require('express').Router()
const CLogin = require('../controllers/loginController.js')

router.get('/',CLogin.loginHandler)
router.post('/',CLogin.postLoginHandler)


module.exports=router