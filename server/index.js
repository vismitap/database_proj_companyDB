const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send({hello: 'world'});
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});