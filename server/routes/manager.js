const express = require('express');
const router = express.Router();

const {manager: Manager} = require('../Models');

router.get('/', async (req, res) => {
    try {
        const managers = await Manager.findAll({});
        return res.json(managers);

    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
}); 

router.post('/', async (req, res) => {
    try {
        const manager = await Manager.create(req.body);
        return res.status(200).send({result: 'success', manager});
    } catch(error) {
        console.log(error);
        return res.status(500).send({error});
    }
});

module.exports = router;