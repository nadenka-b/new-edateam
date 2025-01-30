const router = require('express').Router();

router.get(`/recipepage-data/:id`, (req, res) => {
    const { id } = req.params;
    res.send(require(`../json/recipepage-data/${id}.json`))
})

router.get('/dishes0&3', (req, res) => {
    res.send(require('../json/homepage-data/dishes0&3.json'))
})

router.get('/dishes1&3', (req, res) => {
    res.send(require('../json/homepage-data/dishes1&3.json'))
})

router.get('/dishes0&9', (req, res) => {
    res.send(require('../json/homepage-data/dishes0&9.json'))
})

router.get('/up/favourite', (req, res) => {
    res.send(require('../json/up/favourite/success.json'))
})

module.exports = router;
