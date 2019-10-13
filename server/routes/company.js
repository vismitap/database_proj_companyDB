const express = require('express');
const router = express.Router();

const {company} = require('../Models');

router.get('/', async (req, res) => {
    try {
        const companies = await company.findAll({});
        return res.json(companies);

    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
}); 

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
});

module.exports = router;