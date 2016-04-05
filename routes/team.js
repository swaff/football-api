var db = require('../models');

var findAllTeams = function (req, res) {
    db.Team.findAll().then(function (response) {
        res.type('json').
            json(response.map(function (item) {
                return item.dataValues;
            }));
    });
};

var findTeamByName = function (req, res) {
    db.Team.findOne({
        where: {
            name: req.query.name
        }
    }).then(function (team) {
        if (team) {
        res.type('json')
            .json(team);
        } else {
            res.status(404).send();
        }
    });
};

module.exports = function (app) {
    app.route('/team')
        .get(function (req, res) {
            if (req.query.name) {
                findTeamByName(req, res);
            } else {
                findAllTeams(req, res);
            }
        })
       .post(function (req, res) {
           db.Team.create(req.body)
               .then(function (team) {
                   res.status(201).json(team.dataValues);
               }).catch(function (err) {
                   console.log(err);
                   res.send(500);
               });
       });

       app.route('/team/:id/players')
           .get(function (req, res) {

               db.Team.findById(req.params.id).then(function (team) {

                   if (team) {
                       team.getPlayers().then(function (players) {
                           res.json(players);
                       });
                   } else {
                       res.status(404).send();
                   }
               });
           });

       app.route('/team/:id/stadium')
           .get(function (req, res) {

               db.Team.findById(req.params.id).then(function (team) {

                   if (team) {
                       team.getStadium().then(function (stadium) {
                           res.json(stadium);
                       });
                   } else {
                       res.status(404).send();
                   }
               });
           });
};
