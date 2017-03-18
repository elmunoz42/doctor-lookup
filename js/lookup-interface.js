var Doctor = require('./../js/lookup.js').doctorModule;
var getDoctors = require('./../js/lookup.js').getDoctors;
var getDoctorsGeo = require('./../js/lookup.js').getDoctorsGeo;
var testLat=0;
var testLon=0;

var displaySuccess = function(doctor) {
  $("#recommendations").append(
    "<tr>" + "<td>" + doctor.name + "</td>" + "<td>" + doctor.specialty + "</td>"+ "<td>" + doctor.address + "</td>" + "</tr>"
  );
};

var displayError = function(error) {
  alert("BetterDoctor failed to get results! Perhaps you misspelled or try describing your condition differently." + error);
};


var getLocation = function() {
  if (navigator.geolocation) {
    currentPos = navigator.geolocation.getCurrentPosition(getPosition);
    console.log(navigator.geolocation);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  return currentPos;
};

var getPosition = function(position, positionFound) {
  testLat = position.coords.latitude;
  testLon = position.coords.longitude;
  var currentPosition = [testLat, testLon];
  console.log("testLat in function" + testLat);
  console.log("testLon in function" + testLon);
  return currentPosition;
};

var combinedGeoDoc = function(symptom, displaySuccess, displayError){
  getDoctorsGeo(symptom, displaySuccess, displayError, getLocation());
};


$(document).ready(function() {

  // getLocation(getPosition);

  var positionFound = false;
  $("#intake-form").submit(function(){
    event.preventDefault();
    $("#recommendations").empty();
    var location = $("#location").val();
    console.log("type of location: " + typeof(location));
    console.log("location: " + location);
    var patientLat = 45.5209678;
    var patientLon = -122.6775636;
    var symptom = $("#symptom").val();
    if (location==='0') {
      getDoctors(symptom, displaySuccess, displayError, patientLat, patientLon);
    }
    if (location==='1') {
        combinedGeoDoc(symptom, displaySuccess, displayError, testLat, testLon);
        // if (testLat!=0 && testLon!=0){
        //   patientLat = testLat;
        //   patientLon = testLon;
        //   console.log("testLat in submit: " + testLat);
        //   console.log("testLon in submit: " + testLon);
        //   doctor_class.getDoctors(symptom, displaySuccess, displayError, patientLat, patientLon);
        // } else {
        //   alert("couldn't find location at the time. Try again in a minute.");
        // }
    }
    // if
  });
  // submit

});
// document ready
