const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.send('If you see this, express server is working fine :)')
});

module.exports = router