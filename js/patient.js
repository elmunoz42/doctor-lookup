function Patient (name, symptom, location) {
  this.name = name;
  this.symptom = symptom;
  this.location = location;
}

// var currentLocation = document.getElementById("demo");
// Patient.prototype.getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }
//
// Patient.prototype.showPosition(position) {
//   currentLocation.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }

exports.patientModule = Patient;
