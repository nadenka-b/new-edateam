const router = require('express').Router();

router.get('/homepage-data', (req, res) => {
    res.send(require('../json/homepage-data/success.json'))
})

router.get('/up/favourite', (req, res) => {
    res.send(require('../json/up/favourite/success.json'))
})

module.exports = router;
