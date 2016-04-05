'use strict';
module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define('Team', {
        name: DataTypes.STRING,
        stadiumId: {
            type: DataTypes.INTEGER,
            references: 'Stadia',
            key: 'id'
        }
    }, {
        classMethods: {
            associate: function(models) {
                Team.hasMany(models.Player, { foreignKey: 'teamId' });
                Team.hasOne(models.Stadium, { foreignKey: 'stadiumId' });
            }
        }
    });
    return Team;
};
