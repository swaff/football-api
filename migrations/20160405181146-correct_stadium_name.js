'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.renameTable('stadia', 'Stadia')
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.renameTable('Stadia', 'stadia')
  }
};
