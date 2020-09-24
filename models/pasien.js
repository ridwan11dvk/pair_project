'use strict';
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
      Pasien.belongsToMany(models.Penyakit, {through: 'PenyakitPasien'})
      Pasien.hasMany(models.PenyakitPasien)
    }
  };
  Pasien.init({
    nama: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    DokterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pasien',
  });
  return Pasien;
};