const router = require('express').Router();

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
