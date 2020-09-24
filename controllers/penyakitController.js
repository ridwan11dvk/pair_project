const {Penyakit,Pasien} = require('../models/index.js')

class CPenyakit {
    static listHandler(req,res){
        if (req.session.login == true) {
            Penyakit.findAll()
            .then(data=>{
                console.log(JSON.stringify(data,null,2))
                res.render('penyakit',{data})
            })
            .catch(err=>{
                res.send(err)
            })
        } 
        else {
            res.redirect('/login')
        }
    }

    static addPageHandler(req,res){
        if (req.session.login == true) {
            res.render('addPenyakit')
        }
        else {
            res.redirect('/login')
        }
    }

    static addHandler(req,res){
        if (req.session.login == true) {
            let obj  = {
                nama_penyakit: req.body.nama_penyakit,
                jenis_penyakit: req.body.jenis_penyakit,
            }
            Penyakit.create(obj)
            .then(data=>{
                res.redirect(`/penyakit`)
            })
            .catch(err=>{
                res.send(err)
            })
        }
        else {
            res.redirect('/login')
        }
    }

    static detailHandler(req,res){
        if (req.session.login == true) {
            Penyakit.findAll({where:
                {id:+req.params.id},
                include : Pasien   
            })
            .then(data=>{
                console.log(JSON.stringify(data,null,2))
                res.render('detailPenyakit',{data})
            })
            .catch(err=>{
                res.send (err)
            })
        }
        else {
            res.redirect('/login')
        }
    }


}

module.exports = CPenyakit