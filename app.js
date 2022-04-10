const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');
require('dotenv').config()

const app = express()

console.log('General setup');
app.use(cors())

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('Adding routes')
app.use('/', router)

console.log('Starting the server')
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
});

module.exports.app = app