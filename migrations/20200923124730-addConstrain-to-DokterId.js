'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint("Pasiens",{
      fields: ["DokterId"],
      type: "FOREIGN KEY",
      name: "custom_fkey_constraint_dokterId",
      references: {
        table: "Dokters",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    })
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint("Pasiens","custom_fkey_constraint_dokterId",{})
  }
};
