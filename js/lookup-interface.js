var getDoctors = require('./../js/lookup.js').getDoctors;
var Patient = require('./../js/patient.js').Patient;


// var displaySuccess = function(doctor) {
//
// };
// var displayError = function() {
//
// };

$(document).ready(function() {

  $("#intake-form").submit(function(){
    event.preventDefault();
    var result = getDoctors('head ache');


  });




});
