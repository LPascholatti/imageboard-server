const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const db = require('./db')

app.get('/', (req, res) => res.send('This API is working'))

app.listen(port, () => console.log(`Example App listening on port ${port}`))

