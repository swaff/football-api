'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.addColumn('Players', 'transferValue', {
          type: Sequelize.REAL,
          defaultValue: 0,
          allowNull: false
      });
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.removeColumn('Players', 'transferValue');
  }
};
