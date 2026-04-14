const connectToMongo = require('./db');

connectToMongo();

const express = require('express')
const app = express()
const port = 3010

app.get('/', (req, res) => {
  res.send('Hello! I Am Bobsun')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})