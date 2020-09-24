const {Penyakit,Pasien} = require('../models/index.js')

class CPenyakit {
    static listHandler(req,res){
        Penyakit.findAll()
        .then(data=>{
            console.log(JSON.stringify(data,null,2))
            res.render('penyakit',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static addPageHandler(req,res){
        res.render('addPenyakit')

    }

    static addHandler(req,res){
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

    static detailHandler(req,res){
        Penyakit.findAll({where:
            {id:+req.params.id},
            include : Pasien   
        })
        .then(data=>{
            console.log(JSON.stringify(data,null,2))
            res.render('detailPenyakit',{data})
        })
        .catch(err=>{

        })
    }


}

module.exports = CPenyakit