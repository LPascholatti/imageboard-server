const { Router } = require('express')
const Image = require('./model')
const router = new Router()

router.get('/image', (req, res, next) =>
Image
.findAll()
.then(displayImage => res.json(displayImage))
.catch(next)
)

module.exports = router;