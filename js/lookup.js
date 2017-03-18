var apiKey = require('./../.env').apiKey;

function Doctor (first_name, last_name, specialty, street, city, state) {
  this.name = last_name + ", " + first_name;
  this.specialty = specialty;
  this.address = street + ", " + city + ", " + state;
}

var getDoctors = function(medicalIssue, callbackSuccess, callbackError, patientLat, patientLon) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location='+patientLat+'%2C'+patientLon+'&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      var topFiveDoctors = [];
      for (var i = 0; i < 5; i++) {
        var doctor = new Doctor(result.data[i].profile.last_name, result.data[i].profile.first_name, result.data[i].specialties[0].description, result.data[i].practices[0].visit_address.street, result.data[i].practices[0].visit_address.city, result.data[i].practices[0].visit_address.state);
        topFiveDoctors.push(doctor);
      }

      for (var j = 0; j < topFiveDoctors.length; j++) {
        callbackSuccess(topFiveDoctors[j]);
        console.log(topFiveDoctors[j]);
      }
      console.log(result.data[0].practices[0].visit_address.state);
    })
   .fail(function(error){
      console.log("fail");
      callbackError(error);
    });
};

var getDoctorsGeo = function(medicalIssue, callbackSuccess, callbackError, latLon) {

testLat = latLon[0];
testLon = latLon[1];
setTimeout(function () {
  if (testLat!==0 && testLon!==0){
    patientLat = testLat;
    patientLon = testLon;
    console.log("testLat in submit: " + testLat);
    console.log("testLon in submit: " + testLon);
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location='+patientLat+'%2C'+patientLon+'&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      var topFiveDoctors = [];
      for (var i = 0; i < 5; i++) {
        var doctor = new Doctor(result.data[i].profile.last_name, result.data[i].profile.first_name, result.data[i].specialties[0].description, result.data[i].practices[0].visit_address.street, result.data[i].practices[0].visit_address.city, result.data[i].practices[0].visit_address.state);
        topFiveDoctors.push(doctor);
      }

      for (var j = 0; j < topFiveDoctors.length; j++) {
        callbackSuccess(topFiveDoctors[j]);
        console.log(topFiveDoctors[j]);
      }
      console.log(result.data[0].practices[0].visit_address.state);
    })
   .fail(function(error){
      console.log("fail");
      callbackError(error);
    });
  } else {
    alert("couldn't find location at the time. Try again in a minute.");
  }
}, 8000);

};

exports.getDoctors = getDoctors;
exports.getDoctorsGeo = getDoctorsGeo;
exports.doctorModule = Doctor;
