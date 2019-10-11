const express = require('express');
const router = express.Router();

const {department} = require('../Models');

router.get('/', async (req, res) => {
    try {
        const departments = await department.findAll({});
        return res.json(departments);

    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
}); 

module.exports = router;