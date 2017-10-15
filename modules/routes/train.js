const router = require('express').Router();
const path = require('path');
const request = require('request');
const nexosis = require('nexosis-api-client');
const api_key = process.env.NEXOSIS_API_KEY;

//data json
const data = require('../data_json.js');

//csv
const dataName = process.env.DATA_SET_NAME;
const s3Region = process.env.S3_REGION;
const bucket = process.env.S3_BUCKET_NAME;
const fileName = process.env.CSV_FILE_NAME;

//nexosis client
const client = require('nexosis-api-client').default;
var nexosisClient = new client({ key: api_key });

//send html file
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/views/train.html')));

//send
router.post('/', (req, res) => {

  /* This section will use the json 'data' to create a dataset on nexosis */
  // nexosisClient.DataSets.create(dataName, data)
    // .then(response => {
    //   console.log('imprted from s3');
    //   res.send('success');
    // });

  /* This section will import the csv from an s3 bucket. */
  // nexosisClient.Imports.importFromS3(dataName, bucket, fileName, s3Region)
    // .then(response => {
    //   console.log('imprted from s3');
    //   res.send('success');
    // });

  // build the Model
  // request({
  //   url: 'https://ml.nexosis.com/v1/sessions/model',
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json',
  //     'api-key': api_key
  //   },
  //   json: {
  //     "dataSourceName": "death_data",
  //     "predictionDomain": "regression"
  //   }
  // });
  res.send('success');

});

module.exports = router;
