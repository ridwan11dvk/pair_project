const {Dokter} = require('../models/index.js')

class CDokter {
    static listHandler(req,res){
        if (req.session.login == true) {
            Dokter.findAll()
            .then(data=>{
                let arr = []
                for(let i = 0; i<data.length; i++){
                    let result = data[i].getTitle()
                    arr.push(result)
                }
                res.render('dokter',{data,arr})
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
            res.render('dokterAdd')
        }
        else {
            res.redirect('/login')
        }

    }

    static addHandler(req,res){
        if (req.session.login == true) {
            let obj  = {
                name: req.body.name,
                no_telp: req.body.no_telp,
                jadwal_tugas: req.body.jadwal_tugas,
                spesialis: req.body.spesialis
            }
    
            Dokter.create(obj)
            .then(data=>{
                res.redirect(`/dokter`)
            })
            .catch(err=>{
                res.send(err)
            })
        }
        else {
            res.redirect('/login')
        }
    }

    static deleteHandler(req,res){
        Dokter.destroy({where:{
            id:+req.params.id
        }})
        .then(data=>{
            res.redirect(`/dokter`)
        })
        .catch(err=>{
            res.send(err)
        })

    }
}

module.exports = CDokter