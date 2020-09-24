'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    getTitle() {
      let title 
      if(this.spesialis === 'Anak'){
        title = `Dokter ${this.name} Sp.A`
      }
      else if(this.spesialis === 'Mata'){
        title = `Dokter ${this.name} Sp.M`
      }
      else if(this.spesialis === 'Gigi'){
        title = `Dokter ${this.name} Sp.KG`
      }
      else if(this.spesialis === 'Telinga Hidung Tenggorok'){
        title = `Dokter ${this.name} Sp.THT`
      }
      else{
        title = `Dokter ${this.name} Sp.Umum`
      }
     return title
    }
  };
  Dokter.init({
    name: {
     type: DataTypes.STRING,
     validate: {
       notEmpty:{
         msg: 'Data Name Tidak Boleh Kosong'
       }
     }
    } ,
      
    no_telp: {
     type: DataTypes.INTEGER,
      validate: {
        notEmpty:{
          msg: 'Data Nomor Telepon Tidak Boleh Kosong'
        }
      }
    },

    jadwal_tugas: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'Data Jadwal Tugas Tidak Boleh Kosong'
        }
      }
    },

    spesialis: {
     type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'Data Spesialis Tidak Boleh Kosong'
        }
      }
    } 

  }, {
    sequelize,
    modelName: 'Dokter',
  });
  return Dokter;
};