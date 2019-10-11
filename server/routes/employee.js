const express = require('express');
const router = express.Router();

const {employee} = require('../Models');

router.get('/', async (req, res) => {
    try {
        const employees = await employee.findAll({});
        return res.json(employees);

    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
}); 

module.exports = router;