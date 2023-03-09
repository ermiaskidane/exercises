'use strict'

const express = require('express')
require('dotenv').config()

const pg = require('pg')

const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const client = new pg.Client(process.env.DATABASE_URL)
// client.connect()

app.get('/', homeHandler)
app.get('/university', getUniHandler)
app.post('/university', createUniHandler)
app.delete('/university', deleteUniHandler)

function homeHandler(req, res) {
  res.status(200).send(' university database ')
}

function getUniHandler(req, res) {
  let SQL = `select * from universities`
  client
    .query(SQL)
    .then((results) => {
      res.status(200).send(results.rows)
    })
    .catch((error) => {
      console.log(error)
    })
}

// localhost:3001/people (body)
function createUniHandler(req, res) {
  let uniname = req.body.uniname
  let uniwebpage = req.body.uniwebpage

  let SQL = `INSERT INTO university (uniname, uniwebpage) VALUES ($1, $2) RETURNING *`
  let safeValues = [uniname, uniwebpage]
  client.query(SQL, safeValues).then((results) => {
    res.status(200).send(results.rows)
    // res.status(200).send('Your Data has been send')
  })
}

// localhost:3001/people?first=karen
function deleteUniHandler(req, res) {
  let uniname = req.body.uniname
  let safeValues = [uniname]
  let SQL = `DELETE FROM university WHERE uniname=$1`

  client.query(SQL, safeValues).then((results) => {
    res.send('data has been deleted ')
  })
}
const PORT = process.env.PORT

//listen to server API once my postgresql is connected
client.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
  })
})
// app.listen(PORT, () => {
//   console.log(`Listening on PORT ${PORT}`)
// })
