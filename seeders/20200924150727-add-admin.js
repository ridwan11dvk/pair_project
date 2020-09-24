'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let admin = 
   [
     { "username": "Rudi",
     "pin": 1234 
   },
   { "username": "Doni",
   "pin": 1224 
 }]
 admin = admin.map(el=>{
  el.createdAt = new Date(),
  el.updatedAt = new Date()
  return el
})
return queryInterface.bulkInsert('Admins', admin, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Admins', null, {})
  }
};
