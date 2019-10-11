const Sequelize = require('sequelize');

const sequelize = new Sequelize('company_db', 
    process.env.USERNAME, process.env.PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        define: {
            freezeTableName: true,
            timestamps: false,
        }
});

sequelize.authenticate().then(() => {
    console.log('Connected to DB.');
}).catch(e => console.log('Cannot connect to db:', e));

module.exports = sequelize