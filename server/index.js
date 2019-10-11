const express = require('express');
const app = express();
const port = process.env.PORT;

const sequelize = require('./db');

const routes = require('./routes');

app.use((req, res, next) => {
    //TODO: Make Logger
    next();
});

Object.keys(routes).forEach(route => {
    console.log(route, routes[route]);
    app.use(`/api/${route}`, routes[route])
});

app.get('/', async (req, res) => {
    return res.status(200).json({hello: 'world'});
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
    }); 
});

