'use strict';
module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Player', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    teamId: {
        type: DataTypes.INTEGER,
        references: 'Team',
        key: 'id'
    },
    transferValue: {
        type: DataTypes.REAL,
        defaultValue: 0,
        allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
          Player.belongsTo(models.Team, {
              foreignKey: 'teamId'
          });
      }
    }
  });
  return Player;
};
