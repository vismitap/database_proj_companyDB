const express = require('express');
const router = express.Router();

const {employee: Employee} = require('../Models');

router.get('/', async (req, res) => {
    try {
        const employees = await Employee.findAll({});
        return res.json(employees);

    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
}); 


router.post('/', async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        return res.status(200).send({result: 'success', employee});
    } catch(error) {
        console.log(error);
        return res.status(500).send({error});
    }
});

module.exports = router;