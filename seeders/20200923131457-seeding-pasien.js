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
   let obj = [
    {
      "nama":"Koko",
      "gender":"male",
      "age": 20,
      "DokterId":2
    }
    ,
    {
      "nama":"Caca",
      "gender":"female",
      "age": 21,
      "DokterId":2
    }
  ]

  obj = obj.map(el=>{
    el.createdAt = new Date(),
    el.updatedAt = new Date()
    return el
  })
  return queryInterface.bulkInsert('Pasiens', obj, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  return queryInterface.bulkDelete('Pasiens', null, {})
  }
};
