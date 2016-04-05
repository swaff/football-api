'use strict';
module.exports = function(sequelize, DataTypes) {
  var stadium = sequelize.define('Stadium', {
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return stadium;
};
