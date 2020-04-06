//business logic 
function Places(location, landmarks, timeOfYear, notes) {
  this.location = location; 
  this.landmarks = landmarks; 
  this.timOfYear = timeOfYear;
  this.notes = notes; 
}

Places.prototype.addPlace = function(Places) {
  this.Places.push(place);
}

//UI logic 
$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();

    var newLocation = $("input#location").val();
    var newLandmark = $("input#landmark").val();
    var newTimeOfYear = $("input#timeOfYear").val();
    var newNotes = $("input#notes").val();
  

    var Place = new Places(location, landmarks, timeOfYear, note);
  });
});