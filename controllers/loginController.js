const {Admin} = require('../models/index.js')

class CLogin {
    static loginHandler(req,res) {
        if(req.query.err) {
            res.render('login', {
                error: true
            })
        }
        else {
            res.render('login',{
                error: false
            })
        }
       
    }
    static postLoginHandler(req,res) {
        Admin.findOne({
            where:{
                "username": req.body.username,
                "pin":+req.body.pin
            }
        })
        .then(data=> {
            if(data == null) {
                res.redirect('/login?err=true')
            }
            else{
                req.session.login = true
                req.session.username = data.username
                res.redirect('/')
            }
        })
        .catch(err=> {
            res.send(err)
        })

    }

}
module.exports=CLogin