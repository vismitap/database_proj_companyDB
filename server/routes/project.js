const express = require('express');
const router = express.Router();

const {project: Project} = require('../Models');

router.get('/', async (req, res) => {
    try {
        const projects = await Project.findAll({});
        return res.json(projects);

    } catch(e) {
        return res.status(500).send({error: 'Unexpected Error.'});
    }
}); 

router.post('/', async (req, res) => {
    try {
        const project = await Project.create(req.body);
        return res.status(200).send({result: 'success', project});
    } catch(error) {
        console.log(error);
        return res.status(500).send({error});
    }
});

module.exports = router;