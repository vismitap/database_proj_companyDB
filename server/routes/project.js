const express = require('express');
const router = express.Router();

const {project} = require('../Models');

router.get('/', async (req, res) => {
    try {
        const projects = await project.findAll({});
        return res.json(projects);

    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
}); 

module.exports = router;