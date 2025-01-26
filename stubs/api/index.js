const router = require('express').Router();

router.get('/homepage-data', (req, res) => {
    res.send(require('../json/homepage-data/success.json'))
})

module.exports = router;
