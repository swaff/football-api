'use strict';
module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Player', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    teamId: {
        type: DataTypes.INTEGER,
        references: 'Team',
        key: 'id'
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
