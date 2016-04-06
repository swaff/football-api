'use strict';

var _ = require('lodash');
var models = require('../models');

var playerData = [
{
    team: 'Arsenal',
    players: [
    { firstName: 'Petr', lastName: 'Čech', transferValue: 30000000 },
    { firstName: 'Kieran', lastName: 'Gibbs', transferValue: 15000000 },
    { firstName: 'Per', lastName: 'Mertesacker', transferValue: 4000000 },
    { firstName: 'Aaron', lastName: 'Ramsey', transferValue: 15000000 },
    { firstName: 'Olivier', lastName: 'Giroud', transferValue: 10000000 }
    ]
},
{
    team: 'Aston Villa',
    players: [
    { firstName: 'Joleon', lastName: 'Lescott', transferValue: 10000000 },
    { firstName: 'Micah', lastName: 'Richards', transferValue: 15000000 },
    { firstName: 'Kieran', lastName: 'Richardson', transferValue: 40000000 },
    { firstName: 'Gabriel', lastName: 'Agbonlahor', transferValue: 20000000 },
    { firstName: 'Rudy', lastName: 'Gestede', transferValue: 10000000 }
    ]
},
{
    team: 'Leicester City',
    players: [
    { firstName: 'Kasper', lastName: 'Schmeichel', transferValue: 10000000 },
    { firstName: 'Wes', lastName: 'Morgan', transferValue: 15000000 },
    { firstName: 'Danny', lastName: 'Drinkwater', transferValue: 9200000 },
    { firstName: 'Riyad', lastName: 'Mahrez', transferValue: 30000000 },
    { firstName: 'Jamie', lastName: 'Vardy', transferValue: 30000000 }
    ]
},
{
    team: 'Liverpool',
    players: [
    { firstName: 'Daniel', lastName: 'Sturridge', transferValue: 10000000 },
    { firstName: 'Nathaniel', lastName: 'Clyne', transferValue: 15000000 },
    { firstName: 'Philippe', lastName: 'Coutinho', transferValue: 40000000 },
    { firstName: 'Roberto', lastName: 'Firmino', transferValue: 20000000 },
    { firstName: 'Adam', lastName: 'Lallana', transferValue: 10000000 }
    ]
},
{
    team: 'Tottenham Hotspur',
    players: [
    { firstName: 'Hugo', lastName: 'Lloris', transferValue: 10000000 },
    { firstName: 'Kyle', lastName: 'Walker', transferValue: 15000000 },
    { firstName: 'Eric', lastName: 'Dier', transferValue: 20000000 },
    { firstName: 'Christian', lastName: 'Eriksen', transferValue: 30000000 },
    { firstName: 'Harry', lastName: 'Kane', transferValue: 35000000 }
    ]
}
];

var decoratePlayers = function (playerData, teams, timeStamp) {
    console.log('teams', teams);
    return _.flatten(_.map(playerData, function (teamPlayers) {

        var teamId = _.find(teams, function (team) {
            return team.name === teamPlayers.team;
        }).id;

        return _.map(teamPlayers.players, function (player) {
            player.teamId =  teamId;
            player.createdAt = timeStamp;
            player.updatedAt = timeStamp;
            return player;
        });
    }));
};

module.exports = {
    up: function (queryInterface, Sequelize) {

        var timeStamp = Sequelize.fn('NOW');

        return queryInterface.select(models.Team, 'Teams', {
            schema: "public",
            attributes: ['id', 'name']
        }).then(function (data) {
            var teams = data.map(function (teamData) {
                return teamData.dataValues;
            });

            var playersToInsert = decoratePlayers(playerData, teams, timeStamp);

            console.log(playersToInsert);
            return queryInterface.bulkInsert('Players', playersToInsert);
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Players', null, {}, models.Player);
    }
};
