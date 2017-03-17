var Doctor = require('./../js/lookup.js').doctorModule;
var Patient = require('./../js/patient.js').patientModule;


var displaySuccess = function(doctor) {
  $("#recommendations").append(
    "<tr>" + "<td>" + doctor.name + "</td>" + "<td>" + doctor.specialty + "</td>"+"</tr>"
  );
};

var displayError = function(error) {
  alert("BetterDoctor API failed to get results! " + error);
};

$(document).ready(function() {

  $("#intake-form").submit(function(){
    event.preventDefault();
    $("#recommendations").empty();
    var symptom = $("#symptom").val();
    var doctor_class = new Doctor("","","");
    doctor_class.getDoctors(symptom, displaySuccess, displayError);

  });




});
