const path = require('path');
const express = require('express');
const app = express();

const sequelize = require('./db');
const routes = require('./routes');

const port = process.env.PORT;

const publicDirectory = path.join(__dirname, '..', 'public');


app.use(express.json());
app.use(express.static(publicDirectory));
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

Object.keys(routes).forEach(route => {
    console.log(route, routes[route]);
    app.use(`/${route}`, routes[route])
});

app.get('/', async (req, res) => {
    return res.status(200).render('index');
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
    }); 
});

