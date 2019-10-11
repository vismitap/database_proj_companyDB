const express = require('express');
const router = express.Router();

const {dependent} = require('../Models');

router.get('/', async (req, res) => {
    try {
        //TODO: Dont show all dependents
        const dependents = await dependent.findAll({});
        return res.json(dependents);

    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
}); 

module.exports = router;