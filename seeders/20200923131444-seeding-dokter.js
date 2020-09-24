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
          "name":"Budi",
          "no_telp":"089809239",
          "jadwal_tugas":"Rabu",
          "spesialis":"Umum"
        }
        ,
        {
          "name":"Adi",
          "no_telp":"0878789657",
          "jadwal_tugas":"Kamis",
          "spesialis":"Gigi"
        }
      ]

      obj = obj.map(el=>{
        el.createdAt = new Date(),
        el.updatedAt = new Date()
        return el
      })

      return queryInterface.bulkInsert('Dokters',obj,{})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Dokters',null,{})
  }
};
