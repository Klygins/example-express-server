const express = require('express');
const cors = require('cors');
const router = require('./router');
require('dotenv').config()

const app = express()

console.log('General setup');
app.use(cors())

app.use(express.json())

console.log('Adding routes')
app.use('/', router)

console.log('Starting the server')
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
});

module.exports.app = app