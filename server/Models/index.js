const sequelize = require('../db');

module.exports = {
    Company: sequelize.import(__dirname + '/company')
}