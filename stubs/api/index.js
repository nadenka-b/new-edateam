const router = require('express').Router();


router.get(`/dishes`, (req, res) => {
    const { page, size } = req.query;
    res.send(require(`../json/homepage-data/dishes/${page}&${size}.json`))
})

router.get(`/tag`, (req, res) => {
    res.send(require(`../json/homepage-data/tags/tags.json`))
})

router.get(`/recipepage-data/:id`, (req, res) => {
    const { id } = req.params;
    res.send(require(`../json/recipepage-data/${id}.json`))
})

module.exports = router;
