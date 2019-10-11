const express = require('express');
const app = express();
const port = process.env.PORT;

const sequelize = require('./db');

app.use((req, res, next) => {
    //TODO: Make Logger
    next();
});

const {Company} = require('./Models');

app.get('/', async (req, res) => {
    Company.findAll().then(companies => {
        console.log(companies[0].dataValues)
    });
    return res.status(200).send({hello: 'world'});
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
    }); 
});

