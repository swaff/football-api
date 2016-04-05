module.exports = function (app) {
    require('./team')(app);
    require('./player')(app);
};
