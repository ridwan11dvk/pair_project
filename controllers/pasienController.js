const {Pasien,Penyakit, Dokter, PenyakitPasien} = require('../models/index.js')

class CPasien{
    static listHandler(req,res){
        Pasien.findAll()
        .then(data=>{
            res.render('pasien',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static addPageHandler(req,res){
        res.render('addPasien')
        // let dataPenyakit
        // Penyakit.findAll()
        // .then(data=>{
        //     dataPenyakit = data
        //     return Dokter.findAll()
        // })
        // .then(dataDokter=>{
        //     // console.log(JSON.stringify(dataPenyakit,null,2))
        //     // console.log(JSON.stringify(dataDokter,null,2))
        //     
        // })
        // .catch(err=>{
        //     res.send(err)
        // })
    }

    static addHandler(req,res){
        let obj = {
            nama: req.body.nama,
            gender: req.body.gender,
            age: req.body.age
        }

        Pasien.create(obj)
        .then(data=>{
            res.redirect(`/pasien`)
        })
        .catch(err=>{
            res.send(err)
        })

    }

    static editPageHandler(req,res){
        
    }
}

module.exports = CPasien