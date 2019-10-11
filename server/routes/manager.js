const express = require('express');
const router = express.Router();

const {manager} = require('../Models');

router.get('/', async (req, res) => {
    try {
        const managers = await manager.findAll({});
        return res.json(managers);

    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
}); 

module.exports = router;