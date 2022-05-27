/* eslint-disable max-len */
const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const cities = [{ name: 'Moscow', createdAt: new Date(), updatedAt: new Date() },
      { name: 'St.Petersburg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Novosibirsk', createdAt: new Date(), updatedAt: new Date() },
    ];
    const roles = [{ name: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'regular', createdAt: new Date(), updatedAt: new Date() }];
    // const cards = [{
    //   name: 'warior', img: '/s1111/', createdAt: new Date(), updatedAt: new Date(),
    // }, {
    //   name: 'berserk', img: '/s2222/', createdAt: new Date(), updatedAt: new Date(),
    // }];
    const cards = [];
    const arrNames = await fs.readdir('./public/img');
    for (let i = 0; i < arrNames.length; i += 1) {
      const dotIndex = arrNames[i].indexOf('.');
      const filename = arrNames[i].substr(0, dotIndex);
      cards.push({
        name: filename,
        img: `/img/${filename}.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    const states = [{ name: 'new', createdAt: new Date(), updatedAt: new Date() }, { name: 'old', createdAt: new Date(), updatedAt: new Date() }, { name: 'norm', createdAt: new Date(), updatedAt: new Date() }];
    // const users = [{
    //   name: 'Ilya', email: '11@', pass: '123', role_id: 2, city_id: 1, createdAt: new Date(), updatedAt: new Date(),
    // }, {
    //   name: 'Alex', email: '22@', pass: '123', role_id: 2, city_id: 2, createdAt: new Date(), updatedAt: new Date(),
    // }, {
    //   name: 'Natalya', email: '33@', pass: '123', role_id: 2, city_id: 2, createdAt: new Date(), updatedAt: new Date(),
    // }];
    // const posts = [{

    //   card_id: 1, user_id: 3, state_id: 1, price: 10.9, createdAt: new Date(), updatedAt: new Date(),
    // }, {
    //   card_id: 1, user_id: 3, state_id: 2, price: 11.9, createdAt: new Date(), updatedAt: new Date(),
    // }, {
    //   card_id: 2, user_id: 2, state_id: 3, price: 4, createdAt: new Date(), updatedAt: new Date(),
    // }, {
    //   card_id: 2, user_id: 1, state_id: 2, price: 6.12, createdAt: new Date(), updatedAt: new Date(),
    // }];
    // const carts = [{
    //   user_id: 1, post_id: 3, createdAt: new Date(), updatedAt: new Date(),
    // }, {
    //   user_id: 3, post_id: 3, createdAt: new Date(), updatedAt: new Date(),
    // }, {
    //   user_id: 2, post_id: 1, createdAt: new Date(), updatedAt: new Date(),
    // }, {
    //   user_id: 2, post_id: 2, createdAt: new Date(), updatedAt: new Date(),
    // }];

    await queryInterface.bulkInsert('Cities', cities, {});
    await queryInterface.bulkInsert('Roles', roles, {});
    await queryInterface.bulkInsert('Cards', cards, {});
    await queryInterface.bulkInsert('States', states, {});
    // await queryInterface.bulkInsert('Users', users, {});
    // await queryInterface.bulkInsert('Posts', posts, {});
    // await queryInterface.bulkInsert('Carts', carts, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
