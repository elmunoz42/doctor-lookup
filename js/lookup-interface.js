var Doctor = require('./../js/lookup.js').doctorModule;
var Patient = require('./../js/patient.js').patientModule;
var testLat=0;
var testLon=0;

var displaySuccess = function(doctor) {
  $("#recommendations").append(
    "<tr>" + "<td>" + doctor.name + "</td>" + "<td>" + doctor.specialty + "</td>"+ "<td>" + doctor.address + "</td>" + "</tr>"
  );
};

var displayError = function(error) {
  alert("BetterDoctor API failed to get results! " + error);
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
  positionFound = true;
  return currentPosition;
};

$(document).ready(function() {

  var positionFound = false;
  $("#intake-form").submit(function(){
    event.preventDefault();
    $("#recommendations").empty();
    var location = $("#location").val();
    console.log("type of location: " + typeof(location));
    console.log("location: " + location);
    var patientLat = 45.5209678;
    var patientLon = -122.6775636;
    var name = $("#name").val();
    var symptom = $("#symptom").val();
    var doctor_class = new Doctor("","","");
    if (location==='0') {
      doctor_class.getDoctors(symptom, displaySuccess, displayError, patientLat, patientLon);
    }
    if (location==='1') {
        getLocation(getPosition);
        console.log("loading...");
        setTimeout(function(){
          patientLat = testLat;
          patientLon = testLon;
          console.log("testLat in submit: " + testLat);
          console.log("testLon in submit: " + testLon);
          doctor_class.getDoctors(symptom, displaySuccess, displayError, patientLat, patientLon);
        }, 6000 );
        // timeout
    }
    // if
  });
  // submit

});
// document ready
