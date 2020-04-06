//business logic 
function PlacesLog() {
  this.locations = []
  this.currentId = 0
}

PlacesLog.prototype.addLocation = function(place) {
  location.id = this.assignId();
  this.locations.push(place);
}

PlacesLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlacesLog.prototype.findPlace = function(id) {
  for (var i=0; i< this.locations.length; i++) {
    if (this.locations[i]) {
      if (this.locations[i].id === id) {
        return this.locations[i];
      }
    }
  };
  return false;
}

PlacesLog.prototype.deletePlace = function(id) {
  for (var i=0; i< this.locations.length; i++) {
    if (this.locations[i]) {
      if (this.locations[i].id == id) {
        delete this.locations[i];
        return true;
        console.log(PlacesLog)
      }
    }
  };
  return false;
}

function Places(location, landmarks, timeOfYear, notes) {
  this.location = location; 
  this.landmarks = landmarks; 
  this.timOfYear = timeOfYear;
  this.notes = notes; 
}


//UI logic 
var placesLog = new PlacesLog();

$(document).ready(function() {
  $("form#new-places").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    // console.log(inputtedLocation);
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTimeOfYear = $("input#new-timeOfYear").val();
    var inputtedNotes = $("input#new-notes").val();
  });
});


   
