const sequelize = require('../db');

module.exports = {
    company: sequelize.import(__dirname + '/company'),
    department: sequelize.import(__dirname + '/department'),
    dependent: sequelize.import(__dirname + '/dependent'),
    employee: sequelize.import(__dirname + '/employee'),
    manager: sequelize.import(__dirname + '/manager'),
    project: sequelize.import(__dirname + '/project'),
}