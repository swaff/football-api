'use strict';
var _ = require('lodash');

var models = require('../models');

var getStadiumByName = function (stadia, name) {
    return _.find(stadia, function (stadium) {
        return stadium.name === name;
    });
};

var teams = [
    { name: 'Liverpool', stadiumName: 'Anfield' },
    { name: 'Arsenal', stadiumName: 'The Emirates' },
    { name: 'Aston Villa', stadiumName: 'Villa Park' },
    { name: 'Tottenham Hotspur', stadiumName: 'White Hart Lane' },
    { name: 'Leicester City', stadiumName: 'King Power Stadium' }
];

var decorateTeams = function (teams, stadia, timeStamp) {
    return teams.map(function (team) {
        return {
            name: team.name,
            stadiumId: getStadiumByName(stadia, team.stadiumName).id,
            createdAt: timeStamp,
            updatedAt: timeStamp
        };
    });
};

module.exports = {
    up: function (queryInterface, Sequelize) {
        var timeStamp = Sequelize.fn('NOW');
        return queryInterface.select(models.Stadium, 'Stadia', {
            schema: "public",
            attributes: ['id', 'name']
        }).then(function (data) {
            var stadia = data.map(function (stadiumData) {
              return stadiumData.dataValues;
          });

          var teamsToInsert = decorateTeams(teams, stadia, timeStamp);

          return queryInterface.bulkInsert('Teams', teamsToInsert);
      });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Teams', null, {}, models.Team);
  }
};
