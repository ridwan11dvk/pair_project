const {Pasien,Penyakit, Dokter, PenyakitPasien} = require('../models/index.js')
const Helper = require('../helper/helper')
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const qr = require('qrcode')

class CPasien{
    static listHandler(req,res){
        if (req.session.login == true) {
            let dewasa
        let anak
        let alert
        if(req.query.dewasa){
            dewasa = req.query.dewasa
            dewasa = JSON.parse(dewasa)
        }
        else if(req.query.anak){
            anak = req.query.anak
            anak = JSON.parse(anak)
        }
        else if(req.query.alert){
            alert = req.query.alert
            // const fs = require('fs')
            // fs.writeFileSync('titip2.md', alert, 'utf-8')
        }
        console.log(alert)
     
        Pasien.findAll()
        .then(data=>{
            let arr = []
            let tamp 
            for(let i=0; i < data.length; i++){
                tamp = Helper.titlePasien(data[i].nama,data[i].gender)
                arr.push(tamp)
            }
            res.render('pasien',{data,arr,dewasa,anak,alert})
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
            res.render('addPasien')
        }
        else {
            res.redirect('/login')
        }
    }

    static addHandler(req,res){
        if (req.session.login == true) {
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
        else {
            res.redirect('/login')
        }
    }

    static editPageHandler(req,res){
        if (req.session.login == true) {
            Pasien.findByPk(+req.params.id)
            .then(data=>{
                res.render('editPasien',{data})
            })
        }
        else {
            res.redirect('/login')
        }
    }
    static editHandler(req,res){
        if (req.session.login == true) {
            let obj = {
                nama: req.body.nama,
                gender: req.body.gender,
                age: req.body.age
    
            }
            Pasien.update(obj,{where:
                {id: req.params.id}
            })
            .then(data=>{
                res.redirect(`/pasien`)
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
        Pasien.destroy({where:
            {id: +req.params.id}
        })
        .then(data=>{
            res.redirect(`/pasien`)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static detailPageHandler(req,res){
        if (req.session.login == true) {
            let dataDokter 
            let dataPenyakit
            Dokter.findAll()
            .then(data=>{
                dataDokter = data
                return Penyakit.findAll()
            })
            .then(data=>{
                dataPenyakit = data
                return Pasien.findAll({where:{id:+req.params.id},
                    include: [Dokter,Penyakit]
                })
            })
            .then(dataPasien=>{
                let tamp = Helper.titlePasien(dataPasien[0].nama,dataPasien[0].gender)
                res.render('detailPasien',{dataDokter,dataPasien,dataPenyakit,tamp})
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
            let obj = {
                PenyakitId: req.body.penyakit,
                PasienId: +req.params.id
            }
    
            PenyakitPasien.create(obj)
            .then(data=>{
                return Pasien.update({DokterId: req.body.dokter},{where:{
                    id: +req.params.id
                }})
            })
            .then(data=>{
                res.redirect(`/pasien`)
            })
            .catch(err=>{
                res.send(err)
            })
        }
        else {
            res.redirect('/login')
        }

        PenyakitPasien.create(obj)
        .then(data=>{
            return Pasien.update({DokterId: req.body.dokter},{where:{
                id: +req.params.id
            }})
        })
        .then(data=>{
           return qr.toDataURL('Olahraga yg cukup, makan bergizi, hindari gorengan !')
        })
        .then(url=>{
            //console.log('masuk - -')
            //res.render('test2', { url })
            //req.session.qr = url
            res.redirect(`/pasien?alert=${url}`)
        })
        .catch(err=>{
            res.send(err)
        })
    }
    
    static anakHandler(req,res){
        if (req.session.login == true) {
            Pasien.sortingAnakAnak()
            .then(data=>{
                res.redirect(`/pasien?anak=${JSON.stringify(data,null,2)}`)
            })
            .catch(err=>{
                res.send(err)
            })
        }
        else {
            res.redirect('/login')
        }
    }

    static dewasaHandler(req,res){
        if (req.session.login == true) {
            Pasien.sortingDewasa()
            .then(data=>{
                //console.log(JSON.stringify(data,null,2))
                res.redirect(`/pasien?dewasa=${JSON.stringify(data,null,2)}`)
            })
            .catch(err=>{
                res.send(err)
            })
        }
        else {
            res.redirect('/login')
        }
    }
}

module.exports = CPasien