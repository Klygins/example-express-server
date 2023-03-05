const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express()

console.log('General setup');
app.use(cors())

app.use(express.json())

console.log('Adding routes')
app.get('/api-status', (req, res) => {
    // Request implementation
    res.send('If you see this, express server is working fine :)')
});

console.log('Starting the server')
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});
