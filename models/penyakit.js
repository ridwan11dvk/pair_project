'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Penyakit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Penyakit.belongsToMany(models.Pasien, {through: 'PenyakitPasien'})
      Penyakit.hasMany(models.PenyakitPasien)
    }
  };
  Penyakit.init({
    nama_penyakit: DataTypes.STRING,
    jenis_penyakit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Penyakit',
  });
  return Penyakit;
};