const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/views/train.html')));

module.exports = router;
