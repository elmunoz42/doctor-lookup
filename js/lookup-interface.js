var Doctor = require('./../js/lookup.js').doctorModule;
var Patient = require('./../js/patient.js').patientModule;


var displaySuccess = function(doctor) {
  $("#recommendations").append(
    "<li>Doctor Name: " + doctor.name + "</li><li>Specialty: " + doctor.specialty + "<li>"
  );
};
var displayError = function(error) {
  alert("BetterDoctor API failed to get results! " + error);
};

$(document).ready(function() {

  $("#intake-form").submit(function(){
    event.preventDefault();
    var doctor_class = new Doctor("","","");
    doctor_class.getDoctors('head ache', displaySuccess, displayError);

  });




});
