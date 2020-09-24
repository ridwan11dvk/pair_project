'use strict';
const Sequelize = require('sequelize');
const op = Sequelize.Op;

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pasien.belongsTo(models.Dokter)
      Pasien.belongsToMany(models.Penyakit, {through: 'PenyakitPasien'})
      Pasien.hasMany(models.PenyakitPasien)
    }

    static sortingAnakAnak(){
     return Pasien.findAll({where:{
        age:{
            [op.between]: [10, 17]
        }
    }})
    }

    static sortingDewasa(){
      return Pasien.findAll({where:{
        age:{
            [op.between]: [18, 50]
        }
    }})
    }
  };
  Pasien.init({
    nama: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    DokterId: DataTypes.INTEGER
  }, {
    hooks:{
      beforeCreate(instance,opt){
        instance.nama = instance.nama[0].toUpperCase() + instance.nama.slice(1).toLowerCase()
      }
    },  
    sequelize,
    modelName: 'Pasien',
  });
  return Pasien;
};