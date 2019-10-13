const express = require('express');
const router = express.Router();

const {dependent: Dependent} = require('../Models');

router.get('/', async (req, res) => {
    try {
        //TODO: Dont show all dependents
        const dependents = await Dependent.findAll({});
        return res.json(dependents);

    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
}); 

router.post('/', async (req, res) => {
    try {
        const dependent = await Dependent.create(req.body);
        return res.status(200).send({result: 'success', dependent});
    } catch(error) {
        console.log(error);
        return res.status(500).send({error});
    }
});


module.exports = router;