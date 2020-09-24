class Helper{
    static titlePasien(nama,gender){
        if(gender === 'female'){
            return `Nn. ${nama}`
        }
        else{
            return `Tn. ${nama}`
        }
    }
}

module.exports = Helper