const { Router } = require('express')
const { toJWT, toData } = require('./jwt')

const router = new Router()

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  if (email && password) {
    return res.send({
      jwt: toJWT({ userId: 1 })
    })
  } else {
    return res.status(400).send({
      message: 'Please supply a valid email and password'
    })
  }

})

module.exports = router;

