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

var makePrediction = ()=> {
  console.log('clicked');
};

// checks that all input fields are valid
var validateForm = (prediction)=> {
  return true;
};

var clearForm = (response)=> {
  $('.output').text(Number(response.data[0].detail_age).toFixed(1))
  console.log(response);
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
