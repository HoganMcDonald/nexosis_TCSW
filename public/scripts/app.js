var waiting = false;

//makes post to server
var trainData = ()=> {
  // console.log('btn clicked');
  $.ajax({
    type: 'POST',
    url: '/train',
    data: 'train',
    success: getStatus
  });
}; // end trainData

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
} // end constructDurration

// checks that all input fields are valid
var validateForm = (prediction)=> {
  if (!waiting) {
    data = prediction.data[0];
    if (data.sex && data.education_2003_revision && data.marital_status) {
      waiting = true;
      return true;
    }
  } else {
    return false;
  }
}; // end validateForm

var clearForm = (response)=> {
  waiting = false;
  let day = moment($('.date').val());
  day.add(constructDurration(Number(response.data[0].detail_age)))
  $('.output').text(day)
  $('.sex').val('');
  $('.education_2003_revision').val('');
  $('.marital_status').val('');
};

//declare angular app
const app = angular.module('myApp', ['ngRoute']);

//configure the routes
app.config(($routeProvider)=> {
  $routeProvider
    .when('/', {
      templateUrl: "views/partials/input.html"
    })
    .when('/death', {
      templateUrl: "views/partials/output.html"
    });
}); // end config

//main controller
app.controller('mainController', function($location, $http) {
  let vm = this;

  vm.pageLoad = function() {
    if ($location.path() === '/death') {
      if (vm.birthday) {
        vm.birthday = vm.birthday;
      } else {
        $location.path('/');
      }
    } // end check current path
  }; // end pageload

  vm.submit = function() {
    vm.birthday = $('.date').val();
    // grab data from models and package for http request - send to service after promise returns
    let predictionData = {
      "data": [
        {
          "sex": vm.sex,
          "education_2003_revision": vm.education_2003_revision,
          "marital_status": vm.marital_status
        }
      ]
    }
    if (validateForm(predictionData) && vm.birthday) {
      // grab birthday and store in service
      vm.birthday = moment(vm.birthday);
      // make prediction and cache results before rerouting
      $http.post('/', predictionData)
        .then((response)=> {
          vm.lifetime = response.data.data[0].detail_age;
          vm.age = constructDurration(vm.lifetime);
          console.log(vm.age);
          $location.path('/death');
        });

    }
  }; // end submit button function
}); // end controller


$(document).ready(()=>{
  console.log('ready');

  // on click for train button
  $('#trainBtn').on('click', ()=> {
    // console.log('clicked');
    trainData();
  }); // end train click event

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

    //checks that all pieces of data are valid, then executes request
    if (validateForm(predictionData)) {
      $.ajax({
        type: 'POST',
        url: '/',
        data: predictionData,
        success: clearForm
      });
    }
  }); // end submit click event








});
