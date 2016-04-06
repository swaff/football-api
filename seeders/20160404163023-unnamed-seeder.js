'use strict';

var models = require('../models');

module.exports = {
    up: function (queryInterface, Sequelize) {

        var timeStamp = Sequelize.fn('NOW');

        return queryInterface.bulkInsert('Stadia', [
            { name: 'Anfield', capacity: 45522, createdAt: timeStamp, updatedAt: timeStamp },
            { name: 'Villa Park', capacity: 42785, createdAt: timeStamp, updatedAt: timeStamp },
            { name: 'The Emirates', capacity: 60432, createdAt: timeStamp, updatedAt: timeStamp },
            { name: 'King Power Stadium', capacity: 32262, createdAt: timeStamp, updatedAt: timeStamp },
            { name: 'White Hart Lane', capacity: 36284, createdAt: timeStamp, updatedAt: timeStamp }
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Stadia', null, {}, models.Stadium);
    }
};
