const router = require('express').Router();
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

const api_key = process.env.NEXOSIS_API_KEY;
const modelURL = process.env.MODEL_URL;

router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/views/index.html')));

router.post('/', (req, res)=> {
  let requestURL = `https://ml.nexosis.com/v1/models/${modelURL}/predict`;

  request({
    url: requestURL,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'api-key': api_key
    },
    json: req.body
  }, function(error, response, body) {
    if (error) {
      res.status(500).send(error);
    } else {
      // res.send({body: JSON.parse(body), error: error, response: response});
      res.send(body)
    }
  });

});

module.exports = router;
