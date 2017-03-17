var apiKey = require('./../.env').apiKey;

// result.data[0].profile.first_name
// result.data[0].profile.middle_name
// result.data[0].profile.last_name
// result.data[0].specialties[0].description
// result.data[0].profile.bio

function Doctor (first_name, last_name, specialty) {
  this.name = last_name + ", " + first_name;
  this.specialty = specialty;
}

// exports.getDoctors = function(medicalIssue) {
Doctor.prototype.getDoctors = function(medicalIssue, callbackSuccess, callbackError) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      var doctor0 = new Doctor(result.data[0].profile.last_name, result.data[0].profile.first_name, result.data[0].specialties[0].description);
      var doctor1 = new Doctor(result.data[1].profile.last_name, result.data[1].profile.first_name, result.data[1].specialties[0].description);
      var doctor2 = new Doctor(result.data[2].profile.last_name, result.data[2].profile.first_name, result.data[2].specialties[0].description);
      var doctor3 = new Doctor(result.data[3].profile.last_name, result.data[3].profile.first_name, result.data[3].specialties[0].description);
      var doctor4 = new Doctor(result.data[4].profile.last_name, result.data[4].profile.first_name, result.data[4].specialties[0].description);

      var topFiveDoctors = [doctor0, doctor1, doctor2, doctor3, doctor4];
      for (var i = 0; i < topFiveDoctors.length; i++) {
        callbackSuccess(topFiveDoctors[i]);
        console.log(topFiveDoctors[i]);
      }
    })
   .fail(function(error){
      console.log("fail");
      callbackError(error);
    });
};

exports.doctorModule = Doctor;
