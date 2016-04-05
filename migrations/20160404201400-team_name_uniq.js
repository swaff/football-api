'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.changeColumn('Teams', 'name', {
          unique: true,
          allowNull: false,
          type: Sequelize.STRING
      });
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.changeColumn('Teams', 'name', {
          unique: false,
          allowNull: false,
          type: Sequelize.STRING
      });
  }
};
