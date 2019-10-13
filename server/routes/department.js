const express = require('express');
const router = express.Router();

const {department: Department} = require('../Models');

router.get('/', async (req, res) => {
    try {
        const departments = await Department.findAll({});
        return res.json(departments);

    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
}); 

router.post('/', async (req, res) => {
    try {
        const department = await Department.create(req.body);
        return res.status(200).send({result: 'success', department});
    } catch(error) {
        console.log(error);
        return res.status(500).send({error});
    }
});

module.exports = router;