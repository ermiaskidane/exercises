'use strict'

const express = require('express') // npm i express
const cors = require('cors') // npm i cors
require('dotenv').config()

const notFoundHandler = require('./libraries/notFound')
const page404 = require('./handlers/404')
const ServerError = require('./handlers/500')
const unsplash = require('./libraries/unsplash')
const logger = require('./middlewares/logger')
const Validate = require('./middlewares/validate')

const app = express()

app.use(cors())

const PORT = process.env.PORT || 3001

// middleware calls
app.use(logger)

// Routes/Endpoints
app.get('/', homeHandler)
app.get('/searchImage', Validate, unsplash.searchImageHandler)
app.get('/randomImage', unsplash.randomImageHandler)
app.get('*', page404)

// Routes Handlers
function homeHandler(request, response) {
  response.send('Hello world!')
}

app.use(ServerError)

app.listen(PORT, () => console.log(`listening on ${PORT}`))

module.exports = {
  app: app,
}
