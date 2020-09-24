'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint("PenyakitPasiens",{
      fields: ["PasienId"],
      type: "FOREIGN KEY",
      name: "custom_fkey_constraint_pasienid",
      references: {
        table: "Pasiens",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    })
    .then(()=>{
      return queryInterface.addConstraint("PenyakitPasiens",{
        fields: ["PenyakitId"],
        type: "FOREIGN KEY",
        name: "custom_fkey_constraint_penyakitid",
        references: {
          table: "Penyakits",
          field: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeConstraint("PenyakitPasiens","custom_fkey_constraint_pasienid",{}),
      queryInterface.removeConstraint("PenyakitPasiens","custom_fkey_constraint_penyakitid",{})
    ])
  }
};
