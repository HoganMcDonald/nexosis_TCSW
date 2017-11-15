var waiting = false;

//makes post to server
var trainData = ()=> {
  // console.log('btn clicked');
  $.ajax({
    type: 'POST',
    url: '/train',
    data: 'train'
  });
}; // end trainData

//takes a number value representing length of life in years (47.75976), returns
//object literal formatted for moment.js
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
  data = prediction.data[0];
  if (data.education_2003_revision && data.marital_status) {
    return true;
  } else {
    return false;
  }
}; // end validateForm

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
    vm.birthday = moment(vm.date);
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
      // make prediction and cache results before rerouting
      $http.post('/', predictionData)
        .then((response)=> {
          // console.log(response.data);
          vm.lifetime = response.data.data[0].detail_age;
          vm.age = constructDurration(vm.lifetime);
          vm.birthday.add(vm.age);
          vm.output = vm.birthday.format("hh:mma ddd MMMM Do YYYY");
          $location.path('/death');
        });

    }
  }; // end submit button function
}); // end controller


$(document).ready(()=>{

  // on click for train button
  $('#trainBtn').on('click', ()=> {
    // console.log('clicked');
    trainData();
  }); // end train click event

});
