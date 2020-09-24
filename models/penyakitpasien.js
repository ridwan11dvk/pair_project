'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PenyakitPasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PenyakitPasien.belongsTo(models.Penyakit)
      PenyakitPasien.belongsTo(models.Pasien)
    }
  };
  PenyakitPasien.init({
    PenyakitId: DataTypes.INTEGER,
    PasienId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PenyakitPasien',
  });
  return PenyakitPasien;
};