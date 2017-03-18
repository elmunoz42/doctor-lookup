var Doctor = require('./../js/lookup.js').doctorModule;
var getDoctors = require('./../js/lookup.js').getDoctorsModule;

var displaySuccess = function(doctor) {
  $("#recommendations").append(
    "<tr>" + "<td>" + doctor.name + "</td>" + "<td>" + doctor.specialty + "</td>"+ "<td>" + doctor.address + "</td>" + "</tr>"
  );
};

var displayError = function(error) {
  alert("BetterDoctor failed to get results! Perhaps you misspelled or try describing your condition differently. " + error);
};


$(document).ready(function() {


  $("#intake-form").submit(function(){
    event.preventDefault();
    $("#recommendations").empty();

    //NOTE: the "geolocation" branch on git hub uses geo location to find doctors. Had async issues.
    
    var patientLat = 45.5209678;
    var patientLon = -122.6775636;
    var symptom = $("#symptom").val();

    getDoctors(symptom, displaySuccess, displayError, patientLat, patientLon);

  });
  // submit

});
// document ready
