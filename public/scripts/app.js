//makes post to server
var trainData = ()=> {
  // console.log('btn clicked');
  $.ajax({
    type: 'POST',
    url: '/train',
    data: 'train',
    success: getStatus
  });
};

//will check status on training - ideally recursive until status is complete or (failed)?
var getStatus = ()=> {
  console.log('checked');
};

//takes a float value representing length of life in years (47.75976), returns object literal formatted for moment.js
var constructDurration = (lifetime)=> {
  dateObj = {
    years: 1,
    months: 12,
    days: 365, // does not calculate leap years
    hours: 8760,
    minutes: 525600,
    seconds: 31536000,
    milliseconds: 31536000000
  }

  for (var unit in dateObj) {
    factor = dateObj[unit];
    dateObj[unit] = Math.floor(factor * lifetime); // math.floor rounds down eliminating the decimals
    lifetime -= dateObj[unit] / factor;
  }

  return dateObj;
}

// checks that all input fields are valid
var validateForm = (prediction)=> {
  return true;
};

var clearForm = (response)=> {
  let day = moment($('.date').val());
  day.add(constructDurration(Number(response.data[0].detail_age)))
  $('.output').text(day)
  $('.sex').val('');
  $('.education_2003_revision').val('');
  $('.marital_status').val('');
};

$(document).ready(()=>{
  console.log('ready');

  // on click for train button
  $('#trainBtn').on('click', ()=> {
    // console.log('clicked');
    trainData();
  });

  //submits the prediction data, prints on screen when proomise is returned, clears inputs
  $('#submit').on('click', ()=> {
    let predictionData = {
      "data": [
        {
          "sex": $('.sex').val(),
          "education_2003_revision": Number($('.education_2003_revision').val()),
          "marital_status": $('.marital_status').val()
        }
      ]
    }

    console.log(predictionData);

    //checks that all pieces of data are valid, then executes request
    if (validateForm(predictionData)) {
      $.ajax({
        type: 'POST',
        url: '/',
        data: predictionData,
        success: clearForm
      });
    }
  });

});

console.log(0.0012329842986681452 * 525600);
