const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const db = require('./db')
const model = require('./images/model')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const imageRouter = require('./images/router')
const authRouter = require('./auth/router')

app.use(jsonParser)
app.use(imageRouter)
app.use(authRouter)

app.get('/', (req, res) => res.send('This API is working'))

app.listen(port, () => console.log(`Example App listening on port ${port}`))

