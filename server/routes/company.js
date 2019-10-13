const express = require('express');
const router = express.Router();

const {company: Company} = require('../Models');

router.get('/', async (req, res) => {
    try {
        const companies = await Company.findAll({});
        return res.json(companies);

    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
}); 

router.post('/', async (req, res) => {
    try {
        const company = await Company.create(req.body);
        return res.status(200).send({result: 'success', company});
    } catch(error) {
        console.log(error);
        return res.status(500).send({error});
    }
});

module.exports = router;