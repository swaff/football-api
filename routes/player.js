var db = require('../models');

module.exports = function (app) {
    app.route('/player')
        .get(function (req, res) {
            db.Player.findAll().then(function (response) {
                res.type('json').
                    json(response.map(function (item) {
                        return item.dataValues;
                    }));
            });
        })
       .post(function (req, res) {
           db.Player.create(req.body)
               .then(function (team) {
                   res.status(201).json(team.dataValues);
               }).catch(function (err) {
                   console.log(err);
                   res.send(500);
               });
       });
};
