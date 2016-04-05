'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.addColumn('Teams', 'stadiumId', {
          type: Sequelize.INTEGER,
          references: {
              model: 'stadia',
              key: 'id'
          }
      });
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.removeColumn('Teams', 'stadiumId');
  }
};
