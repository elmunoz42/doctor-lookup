function Patient (name, symptom, lat, lon) {
  this.name = name;
  this.symptom = symptom;
  this.patientLat = lat;
  this.patientLon = lon;
}


exports.patientModule = Patient;
