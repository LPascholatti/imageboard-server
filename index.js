const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000
//const db = require('./db')
//const model = require('./images/model')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const imageRouter = require('./images/router')
const authRouter = require('./auth/router')
const userRouter = require('./user/router')
const middleware = cors()

app.use(middleware)
app.use(jsonParser)
app.use(imageRouter)
app.use(authRouter)
app.use(userRouter)

app.get('/', (req, res) => res.send('This API is working'))

function onListen() {
  console.log(`Example App listening on port ${port}`)
}

app.listen(port, onListen)

